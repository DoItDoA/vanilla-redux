import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";
const reducer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}; // reducer는 나의 데이터를 수정하는 함수이다

const store = createStore(reducer); // store를 만들고 store는 나의 state를 넣는 곳이다. state는 나의 application에서 바뀌는 data를 의미 ,console.log시 dispatch,getState,replaceReducer,subscribe 함수 4개가 있다

const onChange = () => {
  number.innerText = store.getState(); // reducer의 return값을 호출
};

store.subscribe(onChange); // store안의 값의 변화를 감지하여 실행

add.addEventListener("click", () => store.dispatch({ type: ADD })); // reducer의 두번째 인자(action)를 이용하여 reducer호출하여 실행
minus.addEventListener("click", () => store.dispatch({ type: MINUS }));
