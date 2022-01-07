// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function handler (req: NextApiRequest, res: NextApiResponse<User[]>) {
  const users: User[] = await prisma.user.findMany({})
  return res.json(users)
}
