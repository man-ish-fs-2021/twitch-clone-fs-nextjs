import { isFollowingUser } from "@/lib/followService";
import { getUserByUsername } from "@/lib/userService";
import { notFound } from "next/navigation";
import React from "react";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);
  if (!user) {
    notFound();
  }
  const isFollowing = await isFollowingUser(user.id);
  return <div className="flex flex-col gap-y-4 ">User: {params.username}</div>;
};

export default UserPage;
