import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const visitors = pgTable("visitors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})
