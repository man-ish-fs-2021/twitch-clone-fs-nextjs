import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export async function getSelf() {
  // Your logic to check if the user exists in the database
  // Return true if the user exists, false otherwise
  const self = await currentUser();
  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }
  const user = await db.user.findUnique({
    where: {
      externalUserId: self.id,
    },
  });
  if (!user) {
    throw new Error("Not found");
  }
  return user;
}
