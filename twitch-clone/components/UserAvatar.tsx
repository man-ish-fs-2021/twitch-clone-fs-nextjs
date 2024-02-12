import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import LiveBadge from "./LiveBadge";
import { Skeleton } from "./ui/skeleton";

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "w-8 h-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  imageUrl: string;
  username: string;
  isLive?: boolean;
  showBadge?: boolean;
}
const UserAvatar = ({
  imageUrl,
  isLive,
  username,
  showBadge,
  size,
}: UserAvatarProps) => {
  const canShowBadge = showBadge && isLive;
  return (
    <div className="relative">
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-500 border border-background",
          avatarSizes({ size })
        )}
      >
        <AvatarImage src={imageUrl} alt={username} className="object-cover" />
        <AvatarFallback>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
  {
    /* </div><Link href={`/${username}`}></Link>; */
  }
};

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
  return <Skeleton className={cn(avatarSizes({ size }), "rounded-full")} />;
};

export default UserAvatar;
