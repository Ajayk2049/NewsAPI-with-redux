import { useSelector, useDispatch } from "react-redux";
import { increment, decrese, reset } from "./redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="w-[800px] h-[200px] flex justify-center items-center gap-10">
      <h2>count : {count}</h2>
      <button
        className="p-2 border rounded "
        onClick={() => dispatch(increment())}
      >
        {" "}
        add
      </button>{" "}
      <br /> <br />
      <button
        className="p-2 border rounded "
        onClick={() => dispatch(decrese())}
      >
        {" "}
        remove{" "}
      </button>
      <br />
      <button className="p-2 border rounded " onClick={() => dispatch(reset())}>
        {" "}
        reset{" "}
      </button>
    </div>
  );
};

export default Counter;
