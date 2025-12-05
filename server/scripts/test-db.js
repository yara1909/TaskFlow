import dotenv from "dotenv";
dotenv.config();
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Connected! DB time:", res.rows[0]);
    process.exit(0);
  } catch (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
})();