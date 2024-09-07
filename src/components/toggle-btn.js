import React from 'react'
import { VscSettings } from "react-icons/vsc";

export default function ToggleButton({
  isOn,
  toggleSwitch,
}) {
  return (
    <div
      className={`w-16 mt-2 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${isOn ? 'bg-green-500' : 'bg-indigo-600'
        }`}
      onClick={toggleSwitch}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ${isOn ? 'translate-x-8' : ''
          }`}
      >
        <div className="flex justify-center mt-1">
          <VscSettings size={15} />
        </div>
      </div>
    </div>
  )
}
