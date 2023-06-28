import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom/client';

// 1)
// 기본적으로 랜더링만 수행하는 형태는 컴포넌트로의 기능이 약하다

class HelloReact extends React.Component {
  render() {
    return <h1>컨디션 안좋음</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <HelloReact />
    </div>
  );
}

export default App;
