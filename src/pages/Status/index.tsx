import AutoGrowTextArea from '../../components/AutoGrowTextArea';
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import Tweet from '../../components/Tweet';

import './index.css';

const answers = [
  { id: 3, content: 'Keep studying' },
  { id: 2, content: 'Welcome to twitter' },
  { id: 1, content: "That's awesome" },
];

type StatusPropsType = {};

export default function Status(props: StatusPropsType) {
  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet
        content={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eius tenetur vero quis impedit, maxime laborum quas non perferendis facilis magni quia placeat corrupti omnis deserunt amet deleniti explicabo culpa!'
        }
      />

      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/danielbgc.png' alt='DanielBGC' />
          {/* <textarea id='tweet' placeholder='Tweet your answer'></textarea> */}

          <AutoGrowTextArea />
        </label>
        <button type='submit'>Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer.id} content={answer.content} />;
      })}
    </main>
  );
}
