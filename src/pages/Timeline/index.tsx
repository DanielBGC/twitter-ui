import { FormEvent, useState } from 'react';
import './index.css';

/* Components */
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import Tweet from '../../components/Tweet';

import { TweetType } from '../../interfaces';

const initialTweets: TweetType[] = [
  {
    id: 4,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut repellendus voluptate ex inventore eum harum dolores illo, enim molestias? Praesentium, voluptate voluptatem. Iste similique unde veniam, aspernatur quam et?',
  },
  { id: 3, content: 'Creating an application with vite' },
  { id: 2, content: 'Hello World' },
  { id: 1, content: 'My first tweet' },
];

type TimelinePropsType = {};

export default function Timeline(props: TimelinePropsType) {
  const [newTweet, setNewTweet] = useState('');

  const [tweets, setTweets] = useState<TweetType[]>(initialTweets);

  const handleNewTweet = (event: FormEvent) => {
    event.preventDefault();

    const idArray = tweets.map((tweet) => tweet.id);

    let lastTweetId = idArray.sort((a, b): any => {
      return b - a;
    })[0];

    setTweets([
      {
        id: (lastTweetId += 1),
        content: newTweet,
      },
      ...tweets,
    ]);

    setNewTweet('');
  };

  return (
    <main className='timeline'>
      <Header title='Home' />

      <form onSubmit={handleNewTweet} className='new-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/danielbgc.png' alt='DanielBGC' />
          <textarea
            id='tweet'
            placeholder="What's happening?"
            onChange={(event) => setNewTweet(event.target.value)}
            value={newTweet}
          ></textarea>
        </label>
        <button type='submit'>Tweet</button>
      </form>
      <Separator />

      {tweets
        ?.sort((a, b): any => {
          return b.id - a.id;
        })
        ?.map((tweet) => {
          return <Tweet key={tweet.id} content={tweet.content} />;
        })}
    </main>
  );
}
