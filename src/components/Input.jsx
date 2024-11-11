import React from 'react'

function input({value}) {
  return (
    <div>
        <input type="text" value={value} className="mon-input" placeholder=""/>
    </div>
  )
}

export default input