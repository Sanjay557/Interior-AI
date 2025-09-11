import { serial } from "drizzle-orm/mysql-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    imageUrl: varchar('imageUrl').notNull(),
    credits: integer('credits').default(3),

});

export const AiGeneratedImage = pgTable('aiGeneratedImage', {
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    roomType:varchar('roomType').notNull(),
    designType:varchar('designType').notNull(),
    orgImage:varchar('orgImage').notNull(),
    aiImage:varchar('aiImage').notNull()
})