import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Suffer",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=973128914643853392&permissions=8&scope=bot%20applications.commands",
  //BotInvite Link
  Features: [
    {
      name: "Moderation",
      description:
        "Moderation is the process of eliminating or lessening extremes.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "95% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Fm",
      description:
        "Fm is a lastfm system you can use with spotify",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 25, //-  - Your
  memberCount: 44,862, //--   - Bot
  executedCommand: 103, //--  - Stats
  availableCommand: 103, //---   - Here
  //Do not change if you don't know about them
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "https://github.com/Jakey1234",
  discordLink: "https://discord.gg/eYGrDsUqur",
};

export default config;
