import { getRecommended } from "@/lib/reconmendeService";
import Recommended, { RecommendedSkeleton } from "./Recommended";
import Toggle, { ToggleSkeleton } from "./Toggle";
import Wrapper from "./wrapper";

const Sidebar = async () => {
  // server component
  // follow users
  const reco = await getRecommended();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-4">
        <Recommended data={reco} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
      <ToggleSkeleton />
      <div className="space-y-4 pt-4 lg:pt-4">
        <RecommendedSkeleton />
      </div>
    </aside>
  );
};

export default Sidebar;
