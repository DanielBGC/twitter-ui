import { FormEvent, KeyboardEvent, useState } from 'react';

import AutoGrowTextArea from '../../components/AutoGrowTextArea';
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import Tweet from '../../components/Tweet';

import { PaperPlaneRight } from 'phosphor-react';

import { TweetType } from '../../interfaces';

import './index.css';

const initialAnswers: TweetType[] = [
  { id: 3, content: 'Keep studying' },
  { id: 2, content: 'Welcome to twitter' },
  { id: 1, content: "That's awesome" },
];

type StatusPropsType = {};

export default function Status(props: StatusPropsType) {
  const [newAnswer, setNewAnswer] = useState('');

  const [answers, setAnswers] = useState<TweetType[]>(initialAnswers);

  const getLastAnswerId = () => {
    const idArray = answers.map((answer) => answer.id);

    const lastAnswerId = idArray.sort((a, b): any => {
      return b - a;
    })[0];

    return lastAnswerId;
  };

  const handleNewAnswer = (event: FormEvent) => {
    event.preventDefault();

    let lastAnswerId = getLastAnswerId();

    setAnswers([
      {
        id: (lastAnswerId += 1),
        content: newAnswer,
      },
      ...answers,
    ]);

    setNewAnswer('');
  };

  const handleHotkeySubmit = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      // Ctrl + Enter
      let lastAnswerId = getLastAnswerId();

      setAnswers([
        {
          id: (lastAnswerId += 1),
          content: newAnswer,
        },
        ...answers,
      ]);

      setNewAnswer('');
    }
  };

  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet
        content={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eius tenetur vero quis impedit, maxime laborum quas non perferendis facilis magni quia placeat corrupti omnis deserunt amet deleniti explicabo culpa!'
        }
      />

      <Separator />

      <form onSubmit={handleNewAnswer} className='answer-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/danielbgc.png' alt='DanielBGC' />
          {/* <textarea id='tweet' placeholder='Tweet your answer'></textarea> */}

          <AutoGrowTextArea
            onChange={setNewAnswer}
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            placeholder='Tweet your answer'
          />
        </label>
        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer.id} content={answer.content} />;
      })}
    </main>
  );
}
