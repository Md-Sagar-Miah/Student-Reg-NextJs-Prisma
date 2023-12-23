import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Geting One User
export async function GET(req, res) {
    try {
        const { searchParams } = new URL(req.url)
        const reqId = parseInt(searchParams.get("id"))
        const prisma = new PrismaClient();

        const result = await prisma.users.findUnique({
            where: { id: reqId }
        })
        return NextResponse.json({ message: "Success", data: result })

    } catch (error) {
        return NextResponse.json({ message: "Fail", Error: error.toString() })
    }
}

//Creating One User
export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();

        const result = await prisma.users.create({
            data: reqBody
        })

        return NextResponse.json({ message: "Success", data: result });

    } catch (error) {
        return NextResponse.json({ message: "Fail", Error: error.toString() })
    }
}

//Updating One User
export async function PATCH(req, res) {
    try {
        const { searchParams } = new URL(req.url)
        const reqId = parseInt(searchParams.get("id"))
        const reqBody = await req.json()
        const prisma = new PrismaClient();

        const result = await prisma.users.update({
            where: { id: reqId },
            data: reqBody
        })
        return NextResponse.json({ message: "Update Success", data: result })

    } catch (error) {
        return NextResponse.json({ message: "Fail", Error: error.toString() })
    }
}

// Deleting One User
export async function DELETE(req, res) {
    try {
        const { searchParams } = new URL(req.url)
        const reqId = parseInt(searchParams.get("id"))
        const prisma = new PrismaClient();

        const result = await prisma.users.delete({
            where: { id: reqId }
        })
        return NextResponse.json({ message: "Delete Success", data: result })

    } catch (error) {
        return NextResponse.json({ message: "Fail", Error: error.toString() })
    }
}