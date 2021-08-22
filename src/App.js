import { useState } from 'react';

import { AUTHOR } from './scraper/author';
import './App.css';

const authors = Object.entries(AUTHOR).map(([id, value]) => ({ id, ...value }));

function App() {
  const [author, setAuthor] = useState('');

  return (
    <>
      <div className="App">
        <header className="App_Content">
          <h1 className="Heading1"> 인터뷰스낵</h1>
          <span>🍿 Self Review 모아보기 🍿</span>
          <ul className="CrewList">
            {authors.map((v) => (
              <li className="Crew" key={v.id}>
                <button
                  className={'Crew__Button' + (author === v.id ? ' Crew__Button--selected' : '')}
                  onClick={() => setAuthor(v.id)}
                >
                  <img className="Crew__Image" src={v.img} alt={`${v.nickname} 프로필사진`} />
                  <span className="Crew__Name">{v.nickname}</span>
                </button>
              </li>
            ))}
          </ul>
        </header>
        {author && (
          <main className="App_Content">
            {['1기'].map((termId) => (
              <section className="Review" key={termId}>
                <h2>
                  <strong>{AUTHOR[author].nickname}</strong>의 {termId} 리뷰
                </h2>
                <ul className="Review__List">
                  {AUTHOR[author]['1기'].map((v, i) => (
                    <li className="Review__Item" key={v.id}>
                      <a href={v.url} target="_blank" rel="noreferrer noopener" className="Review__Item__Title">
                        {i + 1}. {v.title}
                      </a>
                      {v.comment.split('\n').map((line, index) => {
                        if (!line.includes(':')) {
                          return (
                            <span key={index} className="Review__Item__Comment">
                              {line}
                            </span>
                          );
                        }

                        const [key, value] = line.split(':');

                        return (
                          <span key={index} className="Review__Item__Comment">
                            <strong>{key}</strong> {value}
                          </span>
                        );
                      })}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </main>
        )}
        <div className="App_Background" />
      </div>
    </>
  );
}

export default App;
