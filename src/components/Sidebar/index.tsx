import { NavLink } from 'react-router-dom';

import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Pencil,
} from 'phosphor-react';

import twitterLogo from '../../assets/logo-twitter.svg';

import './index.css';

type SidebarPropsType = {};

export default function Sidebar(props: SidebarPropsType) {
  return (
    <aside className='sidebar'>
      <NavLink to='/' className='nav-item'>
        <img className='logo' src={twitterLogo} alt='Logo' />
      </NavLink>
      <nav className='main-navigation'>
        <NavLink to='/' className='nav-item'>
          <House weight='fill' />
          <span>Home</span>
        </NavLink>
        <a href='#' className='nav-item'>
          <Hash />
          <span>Explore</span>
        </a>
        <a href='#' className='nav-item'>
          <Bell />
          <span>Notifications</span>
        </a>
        <a href='#' className='nav-item'>
          <Envelope />
          <span>Messages</span>
        </a>
        <a href='#' className='nav-item'>
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href='#' className='nav-item'>
          <FileText />
          <span>Lists</span>
        </a>
        <a href='#' className='nav-item'>
          <User />
          <span>Profile</span>
        </a>
        <a href='#' className='nav-item'>
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
      <button className='new-tweet-button' type='button'>
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
