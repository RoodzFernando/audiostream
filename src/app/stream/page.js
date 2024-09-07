'use client'
import CircleButton from '@/components/circle-btn';
import CallToAction from '@/components/cta';
import MenuActions from '@/components/menu-actions';
import WaveForm from '@/components/waveform';
import React, { useState } from 'react'
import { FaShareNodes } from "react-icons/fa6";

function StatusDisplay({
  text,
  status,
}) {
  return <div className="flex">
    <div className={`border-2 ${status ? 'bg-green-500 border-green-500' : 'bg-yellow-500 border-yellow-500'} w-6 h-6 rounded-full`}></div>
    <p className="text-white ml-2">{text}</p>
  </div>
}

export default function StreamCall() {
  const [status, setStatus] = useState(false);
  return (
    <div className="h-[88.2vh] bg-indigo-500 flex flex-col justify-between p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between">
        <div>
          {status ? <StatusDisplay text='connected' status={status} /> : <StatusDisplay text='Waiting' status={status} />}
        </div>

        <div>
          <CircleButton icon={<FaShareNodes color='white' />} />
        </div>
      </div>

      <WaveForm />

      <MenuActions />

      <div className="self-center">
        <CallToAction
          title='End Streaming'
          backgroundColor='red'
          handleClick={() => { }}
        />
      </div>
    </div>
  )
}
