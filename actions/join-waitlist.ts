"use server"

import { db } from "@/lib/db";

export async function joinWaitlist(email: string) {
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return { error: "Invalid email address" };
  }

  try {
    const existingUser = await db.waitlist.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "This email is already on the waitlist!" };
    }

    await db.waitlist.create({
      data: {
        email,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to join waitlist:", error);
    return { error: "Something went wrong. Please try again." };
  }
}
