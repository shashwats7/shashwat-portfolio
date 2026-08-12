"use client";

import { useState } from "react";

const sections = [
  {
    title: "Appointment Setting",
    description:
      "Cold outreach, discovery conversations, qualification, and booking qualified appointments.",
    items: [
      "Opening the conversation",
      "Finding the prospect's problem",
      "Qualifying the lead",
      "Transitioning to the call",
      "Booking the appointment",
    ],
  },
  {
    title: "Objection Handling",
    description:
      "Frameworks for handling hesitation without becoming pushy or defensive.",
    items: [
      "I need to think about it",
      "It's too expensive",
      "I don't have time",
      "Send me more information",
      "I'm already working with someone",
    ],
  },
  {
    title: "Lead Qualification",
    description:
      "Identify whether a prospect is genuinely worth moving forward with.",
    items: [
      "Current situation",
      "Desired outcome",
      "Pain points",
      "Urgency",
      "Budget and decision process",
    ],
  },
  {
    title: "Discovery Conversations",
    description:
      "Ask better questions, understand the prospect, and uncover the real problem.",
    items: [
      "Situation questions",
      "Problem questions",
      "Impact questions",
      "Goal questions",
      "Commitment questions",
    ],
  },
  {
    title: "Follow-Up",
    description:
      "Stay persistent without sounding desperate, repetitive, or spammy.",
    items: [
      "First follow-up",
      "Value-based follow-up",
      "Ghosting recovery",
      "No-response sequence",
      "Final follow-up",
    ],
  },
  {
    title: "Closing & Handoff",
    description:
      "Turn a qualified conversation into a clean appointment and professional handoff.",
    items: [
      "Confirming the appointment",
      "Setting expectations",
      "Reducing no-shows",
      "Calendar confirmation",
      "CRM handoff",
    ],
  },
];

export default function SalesPlaybook() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-green-400">
            Conversation Library
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Sales Playbook
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            A practical library of sales conversations, objection handling
            frameworks, appointment-setting scripts, and lead qualification
            systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => {
            const isOpen = openSection === index;

            return (
              <div
                key={section.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-green-400/40"
              >
                <h2 className="text-2xl font-semibold">
                  {section.title}
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  {section.description}
                </p>

                <button
                  onClick={() =>
                    setOpenSection(isOpen ? null : index)
                  }
                  className="mt-7 rounded-full bg-green-500 px-6 py-3 font-medium text-black transition hover:bg-green-400"
                >
                  {isOpen ? "Hide Framework" : "View Framework"}
                </button>

                {isOpen && (
                  <div className="mt-7 border-t border-white/10 pt-6">
                    <p className="mb-4 text-sm font-medium uppercase tracking-wider text-green-400">
                      Framework Includes
                    </p>

                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-green-400/20 bg-green-400/[0.04] p-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-400">
            Setter Principle
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Don't sell the call. Sell the next step.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            Your job as an appointment setter is to start genuine
            conversations, understand the prospect's situation, determine
            whether there is a fit, and make the next step easy.
          </p>
        </div>
      </section>
    </main>
  );
}
