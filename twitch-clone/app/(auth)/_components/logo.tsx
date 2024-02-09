import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full flex items-center justify-center">
        <Image src="/spooky.svg" width={80} height={80} alt="logo" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className={cn("text-xl font-semibold", font.className)}>Gamehub</p>
        <p className={cn("text-sm text-muted-foreground", font.className)}>
          Let&apos;s play!
        </p>
      </div>
    </div>
  );
};
