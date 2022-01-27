import {useReducer} from "react";


import css from "./app.module.css";
import reducer from "./Redusers/Redusers";

export default function App() {

    let [state, dispatch] = useReducer(reducer, {count_1: 0, count_2: 0, count_3: 0});
    let {count_1, count_2, count_3} = state;
    console.log(state)
    return (
        <div>
            <h2 className={css.box}>Homework</h2>

            <h1> state1-{count_1}</h1>
            <button onClick={() => dispatch({type: 'plus_10'})}>plus 10</button>
            <button onClick={() => dispatch({type: 'minus_3'})}>minus 3</button>
            <button onClick={() => dispatch({type: 'RESET_1', payload: 0})}>RESET</button>
            <hr/>

            <h1> state2-{count_2}</h1>
            <button onClick={() => dispatch({type: 'plus_2'})}>plus 2</button>
            <button onClick={() => dispatch({type: 'minus_2'})}>minus 2</button>
            <button onClick={() => dispatch({type: 'RESET_2', payload: 0})}>RESET</button>
            <hr/>

            <h1> state3-{count_3}</h1>
            <button onClick={() => dispatch({type: 'plus_1'})}>plus 1</button>
            <button onClick={() => dispatch({type: 'minus_1'})}>minus 1</button>
            <button onClick={() => dispatch({type: 'RESET_3', payload: 0})}>RESET</button>
            <hr/>

        </div>
    );
}