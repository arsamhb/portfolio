import React from 'react'


const Window = ({ window, color }) => {
   
    return (
        <div
            className="window"
            style={{ backgroundColor: `${window ? color : "transparent"}`, }}
        >
        </div>
    )
}

export default Window