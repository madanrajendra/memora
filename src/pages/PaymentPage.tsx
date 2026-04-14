import React from 'react';

const plans = [
  {
    tier: 'PHASE 0',
    price: '$0-FREE',
    badge: null,
    features: [
      'AI-POWERED MEMORY CAPTURE',
      'BASIC DECISION ADVISORY',
      'MEMORY TIMELINE (CHRONOLOGICAL RECALL)',
      'LIMITED DAILY VOICE INTERACTION (120 SECONDS)',
    ],
  },
  {
    tier: 'PHASE 1',
    price: '$14',
    badge: 'MOST POPULAR',
    features: [
      'VOICE AGENT INTERACTION',
      'IMAGE ANALYSIS ENGINE',
      'ADVANCED MEMORY INDEXING & SEARCH',
      'STRUCTURED LEARNING VIA EDUCATION HUB',
    ],
  },
  {
    tier: 'PHASE 2',
    price: '$45',
    badge: null,
    features: [
      'AI EMPLOYEE CO-PILOT',
      'COMPANY KNOWLEDGE GRAPH',
      'TEAM BRAIN SYNC',
      'TASK AUTOMATION AGENT',
    ],
  },
] as const;

export default function PaymentPage() {
  return (
    <main className="relative min-h-[1800px] overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_45%_18%,rgba(234,110,17,0.24),transparent_14%),radial-gradient(circle_at_63%_19%,rgba(120,63,255,0.22),transparent_15%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[250px] h-[710px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.015)_18%,transparent_55%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[232px] h-[710px] w-[1920px] -translate-x-1/2 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.09)_1px,transparent_0)] [background-size:12px_12px] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent),linear-gradient(to_bottom,transparent,black_20%,black_75%,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[572px] h-[445px] w-[589px] -translate-x-[38%] rounded-full bg-[#a84f10]/30 blur-[110px]" />
      <div className="pointer-events-none absolute left-1/2 top-[320px] h-[438px] w-[344px] translate-x-[72%] rounded-full bg-[#5823d5]/22 blur-[120px]" />

      <section className="relative mx-auto flex w-full max-w-[1080px] flex-col items-center px-4 pb-24 pt-10 text-center sm:px-6 lg:px-0">
        <div className="max-w-[640px]">
          <h1 className="font-orienta text-[34px] leading-[1.05] tracking-[-0.04em] text-white sm:text-[42px]">
            &quot;Your intelligence. Your tier.&quot;
          </h1>
          <p className="mt-3 font-['Inter'] text-[18px] text-white/76">
            Unlock memory, focus, and automation-your way.
          </p>
          <p className="mt-2 font-['Inter'] text-[11px] leading-[1.45] text-white/42">
            One mind. Multiple levels of power.
            <br />
            Find the plan that fits your thinking.
          </p>
        </div>

        <div className="mt-8 inline-flex h-[52px] items-center rounded-full border border-white/12 bg-[#0b0b0d]/90 p-2 shadow-[inset_0_0_20px_rgba(255,255,255,0.03)]">
          <button
            type="button"
            className="flex h-9 min-w-[90px] items-center justify-center rounded-full px-5 font-['Inter'] text-[11px] text-white/74"
          >
            Annual
          </button>
          <button
            type="button"
            className="flex h-9 min-w-[90px] items-center justify-center rounded-full bg-white px-5 font-['Inter'] text-[11px] text-black shadow-[0_6px_18px_rgba(255,255,255,0.16)]"
          >
            Monthly
          </button>
        </div>

        <div className="mt-8 grid w-full gap-6 lg:grid-cols-3">
          {plans.map(({ tier, price, badge, features }) => (
            <article
              key={tier}
              className="relative overflow-hidden rounded-[12px] border border-white/12 bg-black/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
            >
              <div className="px-6 pb-12 pt-8 text-left">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-8 items-center rounded-full border border-white/12 px-3 font-['Inter'] text-[10px] uppercase tracking-[0.08em] text-white/56">
                    {tier}
                  </span>
                  {badge ? (
                    <span className="inline-flex h-7 items-center rounded-full bg-[linear-gradient(180deg,#08382d_0%,#071711_100%)] px-3 font-['Inter'] text-[9px] uppercase tracking-[0.1em] text-[#5df2b5]">
                      {badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-5">
                  <h2 className="font-['Inter'] text-[48px] font-medium tracking-[-0.05em] text-white">
                    {price}
                  </h2>
                  <p className="mt-1 font-['Inter'] text-[11px] text-white/56">/month</p>
                </div>

                <ul className="mt-16 space-y-3 font-['Inter'] text-[9px] uppercase tracking-[0.06em] text-white/48">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-[3px] h-[2px] w-[2px] rounded-full bg-white/55" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 px-6 py-6">
                <button
                  type="button"
                  className="flex h-10 w-full items-center justify-center rounded-full border border-white/14 bg-transparent font-['Inter'] text-[11px] text-white/88 transition-colors hover:border-white/24 hover:text-white"
                >
                  Get started
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
