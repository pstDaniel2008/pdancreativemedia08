import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SPREADSHEET_ID = "10OoI-_RBdBBjh8llflMfIlYl5oFoXNft6Ye1b6zXwwA";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  projectType: z.string().trim().min(1).max(80),
  message: z.string().trim().min(1).max(2000),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const sheetsKey = process.env.GOOGLE_SHEETS_API_KEY;
    if (!lovableKey || !sheetsKey) {
      console.error("Missing gateway credentials for Google Sheets");
      throw new Error("Server not configured to store leads");
    }

    const timestamp = new Date().toISOString();
    const row = [timestamp, data.name, data.email, data.projectType, data.message];

    const url =
      `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:E1:append` +
      `?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": sheetsKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error(`Google Sheets append failed [${res.status}]: ${errBody}`);
      throw new Error(`Failed to save lead [${res.status}]`);
    }

    return { ok: true as const };
  });
