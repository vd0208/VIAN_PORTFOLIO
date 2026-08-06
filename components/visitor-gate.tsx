"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { logVisitor } from "@/app/actions/visitors"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

const STORAGE_KEY = "portfolio-visitor-name"

export function VisitorGate() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null
    if (!stored) {
      setOpen(true)
    }
  }, [])

  // Lock scroll while the gate is open
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = previous
      }
    }
  }, [open])

  if (!mounted || !open) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submitting) return
    setError(null)

    const trimmed = name.trim()
    if (!trimmed) {
      setError("Please enter your name.")
      return
    }

    setSubmitting(true)
    const result = await logVisitor(trimmed)
    setSubmitting(false)

    if (!result.success) {
      setError(result.error ?? "Something went wrong. Please try again.")
      return
    }

    window.localStorage.setItem(STORAGE_KEY, trimmed)
    setOpen(false)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 px-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visitor-gate-title"
    >
      <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="aurora pointer-events-none h-72 w-72 left-1/2 top-1/4 -translate-x-1/2"
        style={{ background: "oklch(0.64 0.26 322)" }}
        aria-hidden="true"
      />
      <div className="fade-in-up relative w-full max-w-md rounded-2xl border border-primary/30 bg-card/90 backdrop-blur-xl p-8 glow-primary">
        <p className="mono-label text-xs text-accent">Welcome</p>
        <h2 id="visitor-gate-title" className="display mt-3 text-3xl text-balance text-card-foreground">
          Before you <span className="holo-text">explore</span>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {"I'd love to know who's visiting. Enter your name to view the portfolio."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3" noValidate>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="visitor-name" className="sr-only">
              Your name
            </label>
            <Input
              id="visitor-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoFocus
              autoComplete="name"
              maxLength={100}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "visitor-name-error" : undefined}
              disabled={submitting}
            />
            {error ? (
              <p id="visitor-name-error" className="text-sm text-destructive" role="alert">
                {error}
              </p>
            ) : null}
          </div>

          <Button type="submit" className="w-full rounded-full glow-primary" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Entering
              </>
            ) : (
              "Enter portfolio"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
