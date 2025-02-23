import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const USERS_FILE = path.join(process.cwd(), "src/data/users.txt");

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Read users.txt file
    const fileContent = fs.readFileSync(USERS_FILE, "utf-8");
    const users = fileContent.split("\n").map((line) => line.trim().split(","));

    // Find user in the file
    const user = users.find(([storedEmail, storedPassword]) =>
      storedEmail === email && storedPassword === password
    );

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
