import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

export interface LeadRecord {
  intent: string;
  fullName: string;
  email: string;
  phone: string;
  practiceName: string;
  role?: string;
  serviceInterest?: string;
  message?: string;
}

let db: Database.Database | null = null;

const initialiseDb = () => {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  const dbPath = path.join(dataDir, "practicestack.db");
  const database = new Database(dbPath);
  database.pragma("journal_mode = WAL");
  database.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      intent TEXT NOT NULL,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      practice_name TEXT NOT NULL,
      role TEXT,
      service_interest TEXT,
      message TEXT,
      created_at TEXT NOT NULL
    );
  `);
  return database;
};

export const getDb = () => {
  if (!db) {
    db = initialiseDb();
  }
  return db;
};

export const insertLead = (lead: LeadRecord) => {
  const database = getDb();
  const stmt = database.prepare(`
    INSERT INTO leads (
      intent,
      full_name,
      email,
      phone,
      practice_name,
      role,
      service_interest,
      message,
      created_at
    ) VALUES (
      @intent,
      @fullName,
      @email,
      @phone,
      @practiceName,
      @role,
      @serviceInterest,
      @message,
      @createdAt
    );
  `);
  const result = stmt.run({
    ...lead,
    createdAt: new Date().toISOString(),
  });
  return result.lastInsertRowid;
};
