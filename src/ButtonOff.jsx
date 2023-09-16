import React from 'react'

const ButtonOff = ({ isOn }) => {
  return (
    <button
      className='button'
      style={{ backgroundColor: `${isOn ? '#fff' : '#000'}`, color: `${isOn ? '#000' : '#fff'}` }}>
      ButtonOn
    </button>
  )
}

export default ButtonOff