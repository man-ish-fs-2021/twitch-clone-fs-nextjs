// Assuming you have a User interface defined in authService

import { getSelf } from "./authService";
import { db } from "./db";

// // Retrieve the current user's information

export const getRecommended = async () => {
  let userId;
  try {
    const self = await getSelf();
    userId = self.id;
  } catch (err) {
    userId = null;
  }
  let users = [];
  if (userId) {
    users = await db.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return users;
};
