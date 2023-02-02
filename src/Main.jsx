import React from "react";
import "./Main.css";

import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./features/counter/CounterSlice";
import {
  incByAmount,
  resetAmount,
  decByAmount,
} from "./features/counter/CounterSlice";

const Main = () => {
  //   let [counter, setCounter] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  //   const addOneHandler = () => {
  //     console.log("it is ok");
  //     setCounter(counter + 1);
  //   };

  //   const addFiveHandler = () => {
  //     setCounter(counter + 5);
  //   };

  //   const addResetHandler = () => {
  //     setCounter((counter = 0));
  //   };
  //   const removeOneHandler = () => {
  //     if (counter <= 1) {
  //       return setCounter((counter = 0));
  //     } else {
  //       setCounter(counter - 1);
  //     }
  //   };

  //   const removeFiveHandler = () => {
  //     if (counter <= 5) {
  //       return setCounter((counter = 0));
  //     } else {
  //       setCounter(counter - 5);
  //     }
  //   };

  return (
    <main>
      <span className="circle">
        <h1>{count}</h1>
      </span>
      <div className="buttons">
        <button onClick={() => dispatch(incByAmount(1))}>inc by one</button>
        <button onClick={() => dispatch(incByAmount(5))}>inc by five</button>
        <button onClick={() => dispatch(resetAmount())}>reset</button>
        <button onClick={() => dispatch(decByAmount(1))}>dec by one</button>
        <button onClick={() => dispatch(decByAmount(5))}>dec by five</button>
        {/* <Button click={addOneHandler}>Add One</Button>
        <Button click={addFiveHandler}>Add Five</Button>
        <Button click={addResetHandler}>Reset</Button>
        <Button click={removeOneHandler}>Remove One</Button>
        <Button click={removeFiveHandler}>Remove Five</Button> */}
      </div>
    </main>
  );
};

export default Main;
