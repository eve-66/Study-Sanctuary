'use client'
import type { NextComponentType, NextPageContext } from "next";
import { useTime } from "../hooks/useTime";

interface Props {}

const Time: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  const time = useTime();
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-5xl font-extrabold tracking-wide'>{time.toLocaleDateString()}</div>
      <div className='text-8xl font-extrabold tracking-wider'>{time.toLocaleTimeString()}</div>
    </div>
  )
}

export default Time