/* eslint-disable */
/* eslint-disable */
import { PrismaClient } from "@prisma/client"
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient
    }
  }
}

let prisma: PrismaClient

const isServer = typeof window === "undefined"

if (isServer) {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient()
    }
    prisma = global.prisma
  }
}

export default prisma