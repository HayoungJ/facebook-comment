import { useState } from 'react';
import './App.scss';
import UserPost from './components/UserPost/UserPost';

const App = () => {
  const [showAuthors, setShowAuthors] = useState(false);

  return (
    <div className="App">
      <UserPost />
      <div
        className={`authors ${showAuthors && 'authors--show'}`}
        onClick={() => setShowAuthors(!showAuthors)}
      >
        이미지 출처
        <ul>
          <li>
            Icons made by
            <a
              href="https://www.flaticon.com/authors/kmg-design"
              title="kmg design"
            >
              kmg design
            </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>
            Icons made by
            <a
              href="https://www.flaticon.com/authors/md-tanvirul-haque"
              title="Md Tanvirul Haque"
            >
              Md Tanvirul Haque
            </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>
            Icons made by
            <a
              href="https://www.flaticon.com/kr/authors/md-tanvirul-haque"
              title="Md Tanvirul Haque"
            >
              Md Tanvirul Haque
            </a>
            from
            <a href="https://www.flaticon.com/kr/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
          <li>
            Icons made by
            <a
              href="https://www.flaticon.com/authors/icon-wind"
              title="icon wind"
            >
              icon wind
            </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
