import React from 'react'
import "./Counter.css"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';


function Counter() {

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='container'>
        <div className='counter'>
            <button id="decrease" onClick={()=>dispatch(decrement())}>-</button>
            <div className='count'>{count}</div>
            <button id="increase" onClick={()=>dispatch(increment())}>+</button>
        </div>
    </div>
  );
}

export default Counter;