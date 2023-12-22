import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { CardHeader, IconCard } from "../page";

export const QuickLinksCard = () => (
  <div className="w-[30vw] h-[14vw] scrollbar-none bg-cyan-500/10 shadow-[0_0_10px_1px_rgba(0,0,0,.2)] rounded-[1vw]">
    <CardHeader title="Quick Links" />
    <div className="flex flex-wrap h-[11vw] gap-[1.5vw] p-[1vw] scrollbar-none">
      <IconCard
        icon={<FaDiscord />}
        bgColor="bg-indigo-600"
        bgHover={"hover:bg-indigo-600/60"}
      />
      <IconCard
        icon={<FaXTwitter />}
        bgColor="bg-black"
        bgHover={"hover:bg-black/60"}
      />
      <IconCard
        icon={<FaInstagram />}
        bgColor="bg-pink-600"
        bgHover={"hover:bg-pink-600/60"}
      />
      <IconCard
        icon={<FaLinkedinIn />}
        bgColor="bg-cyan-600"
        bgHover={"hover:bg-cyan-600/60"}
      />
      <IconCard
        icon={<FaFacebookF />}
        bgColor="bg-blue-600"
        bgHover={"hover:bg-blue-600/60"}
      />
      <IconCard
        icon={<FaYoutube />}
        bgColor="bg-red-600"
        bgHover={"hover:bg-red-600/60"}
      />
      <IconCard
        icon={<FaGithub />}
        bgColor="bg-black"
        bgHover={"hover:bg-black/60"}
      />
    </div>
  </div>
);
