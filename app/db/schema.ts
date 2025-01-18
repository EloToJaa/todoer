import * as t from "drizzle-orm/sqlite-core";
import { sqliteTable as table } from "drizzle-orm/sqlite-core";

export const todos = table(
  "todos",
  {
    id: t.integer().primaryKey({ autoIncrement: true }),
    name: t.text(),
    description: t.text(),
    completed: t.integer({ mode: "boolean" }),
    order: t.integer(),
    createdAt: t.integer({ mode: "timestamp" }),
    updatedAt: t.integer({ mode: "timestamp" }),
  },
  (table) => {
    return {
      orderIndex: t.uniqueIndex("order_idx").on(table.order),
    };
  },
);
