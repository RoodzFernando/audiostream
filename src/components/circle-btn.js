import React from 'react'

export default function CircleButton({
  icon
}) {
  return (
    <button className="border-indigo-600 hover:border-indigo-500 border-2 rounded-full bg-indigo-600 hover:bg-indigo-500 p-3">
      {icon}
    </button>
  )
}
