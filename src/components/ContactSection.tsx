"use client";

import { useState, useRef } from "react";
import { toast } from "sonner";
import { Send, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { PortfolioData } from "@/types/portfolio";

interface ContactSectionProps {
  data: PortfolioData;
}

// email format check
const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

export function ContactSection({ data }: ContactSectionProps) {
  const [isPending, setIsPending] = useState(false);
  const [emailError, setEmailError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmailError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const senderName = (formData.get("name") as string) ?? "";
    const senderEmail = (formData.get("email") as string) ?? "";

    // Client-side email format gate
    if (!isValidEmail(senderEmail)) {
      setEmailError("Please enter a valid email address.");
      form.querySelector<HTMLInputElement>('[name="email"]')?.focus();
      return;
    }

    setIsPending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (res.ok && json.success) {
        toast.success("Message sent!", {
          description: `Thank you ${senderName.trim()}! I'll get back to you soon!`,
          duration: 6000,
        });
        formRef.current?.reset();
      } else {
        throw new Error(json.message ?? "Submission failed.");
      }
    } catch {
      toast.error("Something went wrong.", {
        description: "Please try again or email me directly.",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section id="contact">
      {/* Header */}
      <p className="section-eyebrow">Get in touch</p>
      <h2 className="section-heading">Contact Me</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* ── Left: info card ── */}
        <div className="flex flex-col gap-5 card-surface p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            I&apos;m open to new opportunities, freelance projects, and
            interesting conversations. Drop me a message and I&apos;ll get back
            to you as soon as I can.
          </p>

          <div className="flex flex-col gap-4">
            {/* Email */}
            <a
              href={`mailto:${data.email}`}
              className="group flex items-center gap-3"
              aria-label="Send email"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
                <Mail className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="truncate text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                  {data.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground">
                <MapPin className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">
                  {data.location} · {data.timezone}
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
              aria-label="LinkedIn profile"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="size-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="truncate text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                  Aniket Kumar Mahato
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* ── Right: form card ── */}
        <div className="card-surface p-6">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate
          >
            {/* Web3Forms access key — public by design */}
            <input
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""}
            />
            {/* Honeypot — bots fill this, Web3Forms silently drops it */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              aria-hidden="true"
            />

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                name="name"
                placeholder="Your name"
                required
                disabled={isPending}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                required
                disabled={isPending}
                aria-invalid={emailError ? true : undefined}
                onChange={() => emailError && setEmailError("")}
              />
              {emailError && (
                <p className="text-xs text-red-500 dark:text-red-400">
                  {emailError}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="What's on your mind?"
                required
                disabled={isPending}
                className="min-h-28 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="mt-1 w-full cursor-pointer"
              size="lg"
            >
              {isPending ? (
                <>Sending…</>
              ) : (
                <>
                  <Send className="size-4" />
                  Send message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
