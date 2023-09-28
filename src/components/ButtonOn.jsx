import React from 'react'

const ButtonOn = ({ isOn }) => {
  return (
    <button
      className='button'
      style={{ backgroundColor: `${isOn ? '#000' : '#fff'}`, color: `${isOn ? '#fff' : '#000'}` }}>
      Portfolio
    </button>
  )
}

export default ButtonOn