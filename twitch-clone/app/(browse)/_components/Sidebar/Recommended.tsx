"use client";
import { useSidebar } from "@/store/useSidebar";
import { User } from "@prisma/client";
import UserItem, { UserItemSkeleton } from "./UserItem";

interface RecommendedProps {
  data: User[];
}
const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state);
  const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          {" "}
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => {
          return (
            <UserItem
              key={user.id}
              username={user.username}
              imageUrl={user.imageUrl}
              isLive={true}
            />
          );
        })}
      </ul>
    </div>
  );
};

export const RecommendedSkeleton = () => {
  return (
    <ul className="space-y-2 px-2">
      <UserItemSkeleton />
      <UserItemSkeleton />
      <UserItemSkeleton />
    </ul>
  );
};

export default Recommended;
