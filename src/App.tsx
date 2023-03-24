import './styles/global.css';
import './styles/layout.css';

/* Components */
import Tweet from './components/Tweet';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Separator from './components/Separator';

const tweets = [
  { id: 1, content: 'My first tweet' },
  { id: 2, content: 'Hello World' },
  { id: 3, content: 'Creating an application with vite' },
];

function App() {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='content'>
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
      </div>
    </div>
  );
}

export default App;
