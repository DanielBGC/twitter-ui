import twitterLogo from '../../assets/logo-twitter.svg';

import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from 'phosphor-react';

import './index.css';

type SidebarPropsType = {};

export default function Sidebar(props: SidebarPropsType) {
  return (
    <aside className='sidebar'>
      <img className='logo' src={twitterLogo} alt='Logo' />
      <nav className='main-navigation'>
        <a href='' className='nav-item active'>
          <House weight='fill' />
          Home
        </a>
        <a href='' className='nav-item'>
          <Hash />
          Explore
        </a>
        <a href='' className='nav-item'>
          <Bell />
          Notifications
        </a>
        <a href='' className='nav-item'>
          <Envelope />
          Messages
        </a>
        <a href='' className='nav-item'>
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href='' className='nav-item'>
          <FileText />
          Lists
        </a>
        <a href='' className='nav-item'>
          <User />
          Profile
        </a>
        <a href='' className='nav-item'>
          <DotsThreeCircle />
          More
        </a>
      </nav>
      <button className='new-tweet-button' type='button'>
        Tweet
      </button>
    </aside>
  );
}
