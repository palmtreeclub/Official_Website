import { CardHeader } from "./CardHeader";
import { PageItem } from "./PageItem";

export const PagesCard = () => (
  <div className="w-[21vw] h-[14vw] relative  scrollbar-none bg-cyan-500/10 shadow-[0_0_10px_1px_rgba(0,0,0,.2)] rounded-[1vw]">
    <CardHeader title="Pages" />
    <div className="overflow-auto h-[11vw]  scrollbar-none">
      <PageItem title="Events" />
      <PageItem title="Materials" />
      <PageItem title="Team" />
      <PageItem title="Profile" />
    </div>
  </div>
);
