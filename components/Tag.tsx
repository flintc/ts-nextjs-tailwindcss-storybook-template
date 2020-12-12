import React from 'react'

enum Color {
  amber = "bg-amber-400",
  blue = "bg-blue-400"
}

interface TagProps {
  name: string
  color: Color,
}

const defaultColor = Color.blue

const Tag = ({ name, color=defaultColor}) => {
  return (
    <a className={`p-1 mr-1 text-xs text-white rounded ${color} hover:bg-gray-500`}>
      {name}
    </a>
  )
}


export default Tag
