import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 추가 S 01

// 2)
// 함수 형태의 자바스크립트 문법
// 그래서, 리액트는 기본적으로 함수를 정의하는 형태로 컴포넌트를 명시할 수 있다
// ㄴ student라는 변수를 받아서 바로 렌더링을 수핼할 수 있도록 할게요
// L 이렇게 그냥 함수로 작성하게 되면 렌더라는 함수가 생략된 형태로 사용할 수 있어요

// 학생이 변수로 들어왔을 때
// 학생의 이름과 학번을 함께 출력할 수 있도록 작업

function formatInfo(student) {
  return student.name + '[' + student.id + ']';
}

// 3)
// 이러한 컴포넌트를 사용하기 위해서 그 다음
// 실제로 한명의 학생에 대한 정보를 변수를 이용해서 만들어 보겠습니다.

// 즉 학생을 작성할 때의 그 색상을 블루라는 디자인 요소로 이용하겠다는 거
// 그래서 결과적으로 하나의 elementf를 만들어서
// 즉, html의 요소를 만들 것이다
// 즉 요소라는 것은 간단히 이러한 태그 같은 것들을 모두 포함하는 html에서의 단위를 의미하는
// 실제로 위에서 정의한 이 학생의 색상을 클래스를 정의하고

// 즉 제목을 나타내는 글자를 적을 수 있는 태그의 내용으로는
// 위에서 정리했던 formatInfo 컴퍼넌트를 사용하겠다는

// 즉 그 이후에 리액트 돔에서의 렌더를 하는 대상으로는
// 바로 위에서 정리한 element가 되겠죠

const student = {
  id: '20230122',
  name: 'anns',
  color: 'blue',
};

const element = <h3 className={student.color}>{formatInfo(student)}</h3>; // eslint-disable-line no-unused-vars
// 04
// 위 element - 웹사이트 화면에 그려주겠다
// 디자인요소로 student.color
// 그 내용으로는 formatInfo함수를 사용하겠다 명시
// formatInfo는 함수 형태로 작성된 컴포넌트로써 어떠한 내용을 렌더링 하도록 되어 있죠
// 학생의 이름과 , 학번이 렌더링 되도록 처리된 것을 확인할 수 있다

// 그래서 결과적으로 우리가 위에서 정의한 학생을 이 태그의 내부 내용으로 이렇게 그려준 건데요.
// 이 때 {중괄호} 사용하였는데, 이게 바로!!!!! jsx 이다 !!!
// react - 기존의 html 코드와, 자바스크립트를 한꺼번에 사용
// html코드 안에서 어떤 부분이 자바스크립트 코드다라는 것을 알려주기 위해 !!! 중괄호 사용 !!!!

// 추가 E 01

// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<HelloReact />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// 0) root 및 기타에 대한 설명
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// root에 컴포넌트를 그리기 위해서
// ReactDOM이라는 것을 이용한다
// createRoot 그리고자 하는 컴포넌트를 랜더함수에 넣는다
// document.getElementById 웹문서에서 그리고자하는 값을 ,
// root라는 id값을 가지는 요소를 찾아서
// HelloReact라는 컴포넌트를 그리겠다는

// 즉 Html 리액트에 있는 Root라는 곳에다가 헬로 리액트를 그린다.
// ReactDom은 그려주는 역할 > 그려주는 대상이 컴포넌트이다.
// 도화지에다가 스티커붙여서 전체도화지를 완성한다
