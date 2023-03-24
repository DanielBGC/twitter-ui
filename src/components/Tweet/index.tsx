import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './index.css';

type TweetPropsType = {
  content: string;
};

export default function Tweet(props: TweetPropsType) {
  return (
    <Link to='/status' className='tweet'>
      <img src='https://github.com/danielbgc.png' alt='DanielBGC' />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>DanielBGC</strong>
          <span>@danielbgc</span>
        </div>
        <p>{props.content}</p>

        <div className='tweet-content-footer'>
          <button type='button'>
            <ChatCircle />
            20
          </button>
          <button type='button'>
            <ArrowsClockwise />
            20
          </button>
          <button type='button'>
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
