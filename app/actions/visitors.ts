"use server"

import { db } from "@/lib/db"
import { visitors } from "@/lib/db/schema"

export async function logVisitor(name: string) {
  const trimmed = name.trim()

  if (!trimmed) {
    return { success: false, error: "Please enter your name." }
  }

  if (trimmed.length > 100) {
    return { success: false, error: "That name is too long." }
  }

  try {
    await db.insert(visitors).values({ name: trimmed })
    return { success: true }
  } catch (error) {
    console.log("[v0] Failed to log visitor:", error)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
