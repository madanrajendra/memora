# Memora Tier Usage & Cost Control Architecture

This document describes the tier categorization and LLM routing architecture designed to keep infrastructure and AI inference costs within the projected parameters ($1 to $5 per active user/month).
This architecture will be implemented after completing the Layer 1-5 foundations in the `Phase1_ToDo.md`.

## 1. Tier Definitions & Caps

The system supports two primary tiers for personal users:

### Tier 0 (FREE_TIER)
- **Target Cost**: $0.05 to $0.2 per user/month
- **Chat Limit**: ~25 messages/day
- **Model Routing**: Lightweight fast model only (Gemini 2.5 Flash-Lite)
- **Voice Usage**: Max 1–1.5 min/day
- **Memory Storage**: ~50 important active memories
- **Habit Loop**: Max 3 habits
- **Learning Vault**: Limited items (~20)
- **Memory Recall**: Shallow context only
- **Background Processing**: None
- **Rate Limiting**: Hard limit after daily cap is reached

### Tier 1 (PAID_TIER - $14/month)
- **Target Cost**: Maintained under $3–$5 per user/month
- **Chat Limit**: ~150–200 messages/day
- **Model Routing**: Mid-level reasoning model (GPT-5 mini as primary)
- **Voice Usage**: ~10 min/day
- **Memory Storage**: ~1000 active memories
- **Habit Loop**: Up to 20 habits
- **Learning Vault**: Extended capacity + Clustering
- **Memory Recall**: Deep semantic recall enabled
- **Background Processing**: Nightly memory optimization jobs
- **Queueing**: Priority request queue

## 2. LLM Usage Specification & Routing

To achieve the best cost/performance ratio, Memora employs a dual-LLM routing strategy using **GPT-5 mini** and **Gemini 2.5 Flash-Lite**.

| Model | Role | Primary Tasks | Cost (Input / Output per 1M tokens) |
| :--- | :--- | :--- | :--- |
| **GPT-5 mini** | Primary User-Facing Brain | Chat replies, Intent detection, Tool calling, Short planning, Memory-aware responses | $0.25 / $2.00 |
| **Gemini 2.5 Flash-Lite** | Cheap Background Worker | Memory summarization, Conversation compression, Tagging, Classification, Lightweight recall prep, Async jobs | $0.05 / $0.20 |

## 3. Phase-Wise Implementation Architecture

This architecture integrates seamlessly with the existing 5-Layer Phase 1 architecture outline.

### Step 1: Data Model Expansion (Layer 1 - Memory Store)
- **User Profile Updates**: Introduce `subscription_tier` (enum: `Tier_0`, `Tier_1`) to the `users` table.
- **Quota Tracking Tables**: Create `daily_usage_logs` table (tracking `message_count`, `voice_duration_seconds`, `last_reset_date`) indexed by `user_id`.
- **Memory Archival**: Implement `status` flag (`active`, `archived`) in the `memories` table to enforce active storage caps.

### Step 2: Rate Limiting & Throttling Middleware (Layer 5 - Governance & Security)
- **API Gateway/Middleware**: Implement a FastAPI dependency (`check_tier_limits`) that intercepts requests to `/api/chat` and `/api/voice`.
- **Redis Integration**: (Optional but recommended) Use Redis to track daily message/voice counts in real-time, falling back to PostgreSQL.
- **Graceful Degradation**: Return standard HTTP 429 (Too Many Requests) with custom error messages detailing limit exhaustion.

### Step 3: LLM Router Implementation (Layer 2 - Intelligence & Reasoning)
- **Model Dispatcher**: Create an `LLMRouter` class that selects the appropriate client based on the task and user tier.
    - *Free Tier Rule*: Route **all** tasks (including chat) to Gemini 2.5 Flash-Lite.
    - *Paid Tier Rule*: Route user-facing chat / intent logic to **GPT-5 mini**. Route background summarization and tagging to **Gemini 2.5 Flash-Lite**.
- **Context Depth Logic**: Adjust the number of retrieved vector chunks (`top_k`) from Pinecone based on tier (`top_k=3` for Tier 0, `top_k=15` for Tier 1).

### Step 4: Background Service Caps (Layer 3 - Automation & Execution)
- **Nightly Optimization Jobs**: Implement a chron/Celery job that only processes memory optimization for users where `subscription_tier == Tier_1`.
- **Vault/Habit Constraints**: Enforce count limits (`COUNT(*)`) at the data access layer when creating new habits or uploading items to the Learning Vault. Free users exceeding the count will receive a 403 Forbidden Error prompting an upgrade.

### Step 5: Frontend Tier Awareness (Layer 4 - Interface Layer)
- **UI State**: Expose current usage vs. limits via a `/api/users/me/usage` endpoint.
- **Paywalls & Upgrade Prompts**: Implement visual indicators (progress bars) for daily limits and lock icons on premium features (e.g., Deep Recall, >3 Habits).
