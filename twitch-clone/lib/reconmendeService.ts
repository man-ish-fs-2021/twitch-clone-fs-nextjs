// Assuming you have a User interface defined in authService

import { getSelf } from "./authService";
import { db } from "./db";

// // Retrieve the current user's information
// const currentUser = getSelf();

export const getRecommended = async () => {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return users;
};
