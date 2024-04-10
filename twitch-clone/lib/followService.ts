import { getSelf } from "./authService";
import { db } from "./db";

export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({ where: { id } });
    if (!otherUser) throw new Error("User not found");
    if (otherUser.id === self.id) return true; // can't follow yourself
    const existingFollow = await db.follow.findFirst({
      where: { followerId: self.id, followingId: otherUser.id },
    });
    return !!existingFollow;
  } catch (err) {
    return false;
  }
};

export const followUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({ where: { id } });
    if (!otherUser) throw new Error("User not found");
    if (otherUser.id === self.id) throw new Error("Can't follow yourself");
    const existingFollow = await db.follow.findFirst({
      where: { followerId: self.id, followingId: otherUser.id },
    });
    if (existingFollow) {
      throw new Error("Already following this user");
    }
    const follow = await db.follow.create({
      data: { followerId: self.id, followingId: otherUser.id },
      include: {
        follower: true,
        following: true,
      },
    });
    return follow;
  } catch (err) {
    return false;
  }
};
