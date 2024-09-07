import React, { useState } from 'react'
import CircleButton from './circle-btn'
import { FaMicrophone } from "react-icons/fa6";
import { PiSpeakerHighFill } from "react-icons/pi";
import ToggleButton from './toggle-btn';


export default function MenuActions() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className=" border-white/[0.4] outline-2 bg-white/[0.4] border-2 rounded-3xl p-4">
      <div className="flex justify-around">
        <CircleButton icon={<FaMicrophone color='white' />} />
        <CircleButton icon={<PiSpeakerHighFill color='white' />} />
        <ToggleButton
          isOn={isOn}
          toggleSwitch={toggleSwitch}
        />
      </div>
    </div>
  )
}
