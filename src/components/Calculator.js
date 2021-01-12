import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sum } from "../store/Calculator/Calculator.actions";
import { sub } from "../store/Calculator/Calculator.actions";

function Calculator() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator);
  // const result = useSelector(function (state){
  //     return state.calculator
  // })

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <>
      <input
        type="text"
        placeholder="a"
        value={a}
        onChange={(a) => setA(Number(a.target.value))}
      />
      <input
        type="text"
        placeholder="b"
        value={b}
        onChange={(b) => setB(Number(b.target.value))}
      />
      <button
        onClick={() => {
          dispatch(sum(a, b));
        }}
      >
        Somar
      </button>
      <button
        onClick={() => dispatch(sub(a, b))}
      >
        Subtrair
      </button>

      <div>{result}</div>
    </>
  );
}
export default Calculator;

// import React from "react";
// import {connect} from 'react-redux'

// function Calculator({result}) {
//   return (
//     <>
//       <input type="text" placeholder="a" />
//       <input type="text" placeholder="b" />
//       <button>Somar</button>
//       <button>Subtrair</button>

//       <div>{result}</div>
//     </>
//   );
// }
// function mapStateToProps(state){
//     return{
//         result: state.calculator
//     }
// }
// export default connect(mapStateToProps)(Calculator);
