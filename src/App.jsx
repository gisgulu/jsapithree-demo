import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { getExamples } from './utils/getExamples';
import './App.css';

function App() {
  const examples = getExamples();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {examples.map((example) => (
          <Route
            key={example.path}
            path={example.path}
            element={<example.component />}
          />
        ))}
      </Routes>
    </div>
  )
}

export default App
