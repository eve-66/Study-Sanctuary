'use client';
import type { NextComponentType, NextPageContext } from "next";
import { useState } from "react";
import { data } from "../action/data";

const StateButtons: NextComponentType<NextPageContext> = () => {
  const [state, setState] = useState<number>(0); // initial -> 0, start -> 1|3, stop -> 0, rest -> 2, restart -> 1|3

  const handleClick = (nextState: number) => {
    setState(nextState);
    switch(state){
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
    }
  }

  if(state === 0) {
    return (
      <div className='flex justify-center'>
        <button className='bg-blue-500 text-2xl font-bold text-white px-4 py-2 rounded mx-4 my-2 hover:bg-blue-600' onClick={() => {handleClick(1)}}>Start</button>
      </div>
    )
  } else if(state === 1 || state === 3) {
    return (
      <div className='flex justify-center'>
        <button className='bg-red-500 text-2xl font-bold text-white px-4 py-2 rounded mx-4 my-2 hover:bg-red-600' onClick={() => handleClick(0)}>Stop</button>
        <button className='bg-green-500 text-2xl font-bold text-white px-4 py-2 rounded mx-4 my-2 hover:bg-green-600' onClick={() => handleClick(2)}>Rest</button>
      </div>
    )
  } else if(state === 2) {
    return (
      <div className='flex justify-center'>
        <button className='bg-green-500 text-2xl font-bold text-white px-4 py-2 rounded mx-4 my-2 hover:bg-green-600' onClick={() => {handleClick(3)}}>Re Start</button>
      </div>
    )
  }
}

export default StateButtons