import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {sum} from '../store/Calculator/Calculator.actions'

function Calculator() {
    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)
    // const result = useSelector(function (state){
    //     return state.calculator
    // })

    

  return (
    <>
      <input type="text" placeholder="a" />
      <input type="text" placeholder="b" />
      <button
      onClick={()=>{
          dispatch(sum(1,5))
        }}
      >Somar</button>
      <button>Subtrair</button>

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
