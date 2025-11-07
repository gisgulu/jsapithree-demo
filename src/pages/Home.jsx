import { Link } from 'react-router-dom';
import { getExamples } from '../utils/getExamples';
import './Home.css';

function Home() {
  const examples = getExamples();

  return (
    <div className="home">
      <div className="home-container">
        <h1>欢迎使用 MapV Three 示例</h1>
        <p className="home-description">
          这是一个基于 React + Vite + MapV Three 的地图示例集合。
          点击下方链接查看不同的地图示例。
        </p>
        <div className="examples-list">
          {examples.map((example) => (
            <Link key={example.path} to={example.path} className="example-link">
              {example.fileName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
