"use client";

import LiveBadge from "@/components/LiveBadge";
import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive: boolean;
}

const UserItem = ({ imageUrl, isLive, username }: UserItemProps) => {
  const path = usePathname();
  const { collapsed } = useSidebar((state) => state);
  const href = `/${username}`;
  const isActive = path === href;
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center w-full gap-x-4",
            collapsed && "justify-center"
          )}
        >
          <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
          {!collapsed && (
            <p
              className={cn(
                "text-sm font-semibold truncate",
                isActive ? "text-white" : "text-muted-foreground"
              )}
            >
              {username}
            </p>
          )}
          {!collapsed && isLive && <LiveBadge className="ml-auto" />}
        </div>
      </Link>
    </Button>
  );
};

interface UserItemSkeletonProps {}
export const UserItemSkeleton = ({}: UserItemSkeletonProps) => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};

export default UserItem;
