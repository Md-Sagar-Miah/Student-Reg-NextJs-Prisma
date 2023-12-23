import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Finding All users
export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();

        const result = await prisma.users.findMany()
        return NextResponse.json({ message: "Success", data: result })

    } catch (error) {
        return NextResponse.json({ message: "Fail", Error: error.toString() })
    }
}

//Creating Many users
export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();

        const result = await prisma.users.createMany({
            data: reqBody
        })

        return NextResponse.json({ message: "Success", data: result })

    } catch (error) {
        return NextResponse.json({ message: "Fail", Error: error.toString() })
    }
}