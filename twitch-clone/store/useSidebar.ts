import { create } from "zustand";

interface SidebarStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
  collapsed: false,
  onCollapse: () => set(() => ({ collapsed: false })),
  onExpand: () => set(() => ({ collapsed: true })),
}));
