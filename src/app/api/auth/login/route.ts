import { NextResponse } from "next/server";
import { User } from "@/app/types/types";
import { getAllUsers } from "@/database/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Get users from database.
    const users: User[] = await getAllUsers();

    // Find user in the file
    const currentUser = users.find(user =>
      user.email == email && user.password == password
    );

    if (!currentUser) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    // Return user data (excluding sensitive information like password)
    return NextResponse.json({
      message: "Login successful",
      user: {
        username: currentUser.username,
        userId: currentUser.userID
      }
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
