import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Explore',
    path: '/',
    icon: <MdIcons.MdOutlineExplore />,
    cName: 'nav-text'
  },
  {
    title: 'My List',
    path: '/MyList',
    icon: <FaIcons.FaListAlt />,
    cName: 'nav-text'
  },

  {
    title: 'My Note',
    path: '/MyNotes',
    icon: <ImIcons.ImPencil2 />,
    cName: 'nav-text'
  },
  {
    title: 'FeedBack',
    path: '/FeedBack',
    icon: <BiIcons.BiMessageRoundedError />,
    cName: 'nav-text'
  }
];