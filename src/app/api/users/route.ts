import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/types/types"
import { getAllUsers } from "@/database/db";

export async function GET(req: NextRequest) {
    try {
        const users: User[] = await getAllUsers();
        return NextResponse.json(users);
    } catch (error: unknown) {
        console.error("Error details:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
