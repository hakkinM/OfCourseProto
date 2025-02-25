import { NextResponse } from "next/server";
import { getAllUsers } from "@/database/db";
import { User } from "@/app/types/types";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Get users from database.
    const users: User[] = await getAllUsers();

    // Find user in the file
    const userVerif = users.find(user =>
      user.email == email && user.password == password
    );

    if (!userVerif) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
