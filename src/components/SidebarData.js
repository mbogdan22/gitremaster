import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About Me",
    path: "/AboutMe",
    icon: <FaIcons.FaBuffer />,
    cName: "nav-text",
  },
  {
    title: "Show off page",
    path: "/ShowOffPage",
    icon: <FaIcons.FaBriefcaseMedical />,
    cName: "nav-text",
  },
  {
    title: "What i studied",
    path: "/Studies",
    icon: <ImIcons.ImBook />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <IoIcons.IoIosMail />,
    cName: "nav-text",
  },
];
