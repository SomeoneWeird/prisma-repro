// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// This fails.
import { client } from "db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await client.user.findMany();
  return res.json({
    users,
  });
}
