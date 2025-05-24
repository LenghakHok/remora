import "@dotenvx/dotenvx";

import Bun from "bun";
import { drizzle } from "drizzle-orm/bun-sql";

const client = new Bun.SQL(Bun.env.DATABASE_URL);

export const db = drizzle({ client });
