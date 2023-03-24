import './index.css';

/* Components */
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import Tweet from '../../components/Tweet';

const tweets = [
  { id: 3, content: 'Creating an application with vite' },
  { id: 2, content: 'Hello World' },
  { id: 1, content: 'My first tweet' },
];

type TimelinePropsType = {};

export default function Timeline(props: TimelinePropsType) {
  return (
    <main className='timeline'>
      <Header title='Home' />

      <form className='new-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/danielbgc.png' alt='DanielBGC' />
          <textarea id='tweet' placeholder="What's happening?"></textarea>
        </label>
        <button type='submit'>Tweet</button>
      </form>
      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} content={tweet.content} />;
      })}
    </main>
  );
}
