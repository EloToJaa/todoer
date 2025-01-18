import { sql } from "drizzle-orm";
import * as t from "drizzle-orm/sqlite-core";
import { sqliteTable as table } from "drizzle-orm/sqlite-core";

export const todos = table(
  "todos",
  {
    id: t.integer().primaryKey({ autoIncrement: true }),
    listId: t
      .integer()
      .notNull()
      .references(() => lists.id),
    name: t.text().notNull().default(""),
    description: t.text().notNull().default(""),
    order: t.integer().notNull(),
    completed: t.integer({ mode: "boolean" }).notNull().default(false),
    createdAt: t
      .integer({ mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
    updatedAt: t
      .integer({ mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (table) => {
    return {
      orderIndex: t.uniqueIndex("order_idx").on(table.order),
    };
  },
);

export const lists = table(
  "lists",
  {
    id: t.integer().primaryKey({ autoIncrement: true }),
    name: t.text().notNull().default(""),
    description: t.text().notNull().default(""),
    order: t.integer().notNull(),
    createdAt: t
      .integer({ mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
    updatedAt: t
      .integer({ mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (table) => {
    return {
      orderIndex: t.uniqueIndex("order_idx").on(table.order),
    };
  },
);
