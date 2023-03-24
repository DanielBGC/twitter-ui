import './styles/global.css';
import './styles/layout.css';

import twitterLogo from './assets/logo-twitter.svg';

import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Sparkle,
} from 'phosphor-react';

import Tweet from './components/Tweet';

function App() {
  return (
    <div className='layout'>
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
      <div className='content'>
        <main className='timeline'>
          <div className='timeline-header'>
            Home
            <Sparkle />
          </div>

          <form className='new-tweet-form'>
            <label htmlFor='tweet'>
              <img src='https://github.com/danielbgc.png' alt='DanielBGC' />
              <textarea id='tweet' placeholder="What's happening?"></textarea>
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <div className='separator' />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  );
}

export default App;
