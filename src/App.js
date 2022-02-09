import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/counter";
import { useRef } from "react";
import { Form } from "./components/Form";

function App() {
  const myRef = useRef();
  return (
    <div className="App">
      <Counter />
      <Form />
      <div
        ref={myRef}
        style={{
          height: "250px",
          width: "400px",
          backgroundColor: "teal",
        }}
      >
        Div1
      </div>
      <div
        style={{
          height: "250px",
          width: "400px",
          backgroundColor: "tomato",
        }}
      >
        Div2
      </div>
      <div
        style={{
          height: "250px",
          width: "400px",
          backgroundColor: "teal",
        }}
      >
        Div3
      </div>
      <div
        style={{
          height: "250px",
          width: "400px",
          backgroundColor: "tomato",
        }}
      >
        Div4
      </div>
      <button
        onClick={() => {
          myRef.current.scrollIntoView({ behaviour: "smooth" });
          myRef.current.style.backgroundColor = "green";
        }}
      >
        Go to top
      </button>
    </div>
  );
}

export default App;
