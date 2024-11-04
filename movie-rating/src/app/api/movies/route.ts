import { NextResponse } from "next/server"
import { PrismaClient, Prisma } from '@prisma/client'

export async function GET() {
    const prisma = new PrismaClient();

    const allMovies = await prisma.movies.findMany();
    return NextResponse.json({
        allMovies
    });

}