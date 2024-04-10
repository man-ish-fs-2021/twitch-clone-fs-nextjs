"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { useEffect, useState } from "react";
import { ToggleSkeleton } from "./Toggle";
import { RecommendedSkeleton } from "./Recommended";
import { useIsClient } from "usehooks-ts";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  // client component
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);
  if (!isClient)
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
