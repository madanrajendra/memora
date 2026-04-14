# Memora Phase 1 Implementation To-Do List

This document outlines the technical architectural layer-wise tasks required to implement and release Phase 1 (Personal AI Brain) of the Memora platform.

## Layer 1: Memory Store (Persistence Foundation)
- [ ] **Infrastructure Setup**
    - [ ] Provision PostgreSQL instance for structured metadata.
    - [ ] Initialize Pinecone index (dimension matching Gemini embeddings).
    - [ ] Setup S3-compatible object storage (e.g., MinIO or AWS S3) for file uploads.
- [x] **Database Schema Implementation (PostgreSQL)**
    - [x] Create `users` table (Profile, Preferences, OAuth ID).
    - [x] Create `memories` table (Linked to Pinecone `vector_id`).
    - [x] Create `learning_items` table (Metadata for files, links, notes).
    - [x] Create `habits` and `habit_logs` tables.
    - [x] Create `decision_records` table.
    - [ ] Create `audit_logs` table for governance.
- [x] **Data Access Layer**
    - [x] Implement repository pattern for all PostgreSQL entities.
    - [x] Implement vector search utility for Pinecone.

## Layer 2: Intelligence & Reasoning Engine (Cognitive Core)
- [x] **LLM Integration**
    - [x] Configure GPT-5 mini and Gemini 2.5 flash lite API clients.
    - [x] Implement utility for generating text embeddings.
- [x] **Agent Development**
    - [x] **Personal Memory Agent**: Implement specialized prompt for fact extraction and importance scoring (Output: Structured JSON).
    - [x] **Personal Task Agent**: Implement prompt for intent parsing and action decomposition.
    - [x] **Decision Assistant Sub-module**: Implement logic for structuring decision matrices and pros/cons analysis.
    - [x] **Habit Loop Reflection**: Implement periodic analysis of habit logs to generate insights.
- [x] **Orchestration**
    - [x] Build Intent Router (using LangGraph or custom FastAPI logic) to classify user input.
    - [x] Implement context management and agent hand-offs.

## Layer 3: Automation & Execution Engine (Workflow Layer)
- [x] **Background Workers**
    - [x] Setup FastAPI BackgroundTasks or Celery for non-blocking operations.
    - [x] Implement file processing pipeline (PDF/Text extraction for Learning Vault).
- [x] **External Integrations**
    - [x] Integrate Google Calendar API for "Personal Task Agent" actions.
    - [x] Setup Email/SMS notification service for habit reminders.
- [x] **Scheduling**
    - [x] Implement APScheduler/Cron jobs for:
        - [x] Daily habit reminders.
        - [x] Weekly memory digests/summaries.
        - [x] Periodic habit reflections.


## Layer 4: Interface Layer (User Experience)
- [x] **Backend API (FastAPI)**
    - [x] `/api/chat`: Implement streaming endpoint for real-time interaction.
    - [x] `/api/memories`: Implement CRUD with semantic search filtering.
    - [x] `/api/learning`: Implement file upload and management endpoints.
    - [x] `/api/habits` & `/api/decisions`: Implement feature-specific CRUD.
    - [x] `/api/voice`: Setup WebSocket or POST for audio processing.
- [ ] **Frontend (Figma Dev Mode + TypeScript)**
    - [ ] **Shell**: Navigation, Sidebar, User Profile.
    - [ ] **Neural Chat**: Real-time chat UI with Markdown and typing indicators.
    - [ ] **Memory Timeline**: Chronological feed with search and importance filters.
    - [ ] **Learning Vault**: Artifact grid view + Category management.
    - [ ] **Habit & Goals**: Streak visualization and completion tracking.
    - [ ] **Decision Lab**: Structured input forms and comparison displays.
- [ ] **Voice Integration**
    - [ ] Implement browser-native Web Speech API for voice capture and transcription.
    - [ ] Integrate text output with GPT-5 mini and Gemini 2.5 flash lite API client flows.
    - [ ] Note: High-volume scale usage in later phases will migrate to a dedicated third-party voice stack for reliability.

## Layer 5: Governance, Security & Alignment
- [ ] **Security Implementation**
    - [ ] Implement OAuth2 flow (Auth0 or custom JWT).
    - [ ] Enforce `user_id` level data isolation across all queries.
    - [ ] Enable TLS for all data in transit.
- [ ] **Compliance & Privacy**
    - [ ] Implement Data Export utility (JSON/CSV).
    - [ ] Implement "Right to be Forgotten" (Account/Data deletion logic).
    - [ ] Setup Audit log triggers for all write operations.

## Release & Deployment
- [ ] **Environment Configuration**
    - [ ] Setup `.env` management (GPT-5 mini and Gemini 2.5 flash lite Keys, DB Strings, etc.).
- [ ] **Replit Deployment Configuration**
    - [ ] Configure `.replit` and `replit.nix` for a unified Python/FastAPI and Node.js environment.
    - [ ] Setup **Replit Secrets** for GPT-5 mini and Gemini 2.5 flash lite API Keys, Pinecone API Key, and DB credentials.
    - [ ] Provision and connect **Replit's managed PostgreSQL** database.
    - [ ] Configure Replit's web server settings to serve the Figma Dev Mode generated frontend and FastAPI backend.
- [ ] **Validation**
    - [ ] Perform End-to-End testing of the "Chat -> Memory Detection -> Timeline" flow.
    - [ ] Verify multi-modal inputs (Voice/File Uploads).
