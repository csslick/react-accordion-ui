import { useState } from 'react';
import React from 'react'

export default function Question({q}) {
  const [showInfo, setShowInfo] = useState(false); 
  function toggleIcon() {
    setShowInfo(!showInfo);
  }

  return (
    <>
      <dt>
        <span>{q.title}</span>
        <button onClick={toggleIcon}>
          { showInfo ? '-' : '+' }
        </button>
      </dt>
      { showInfo ? <dd>{q.answer}</dd> : <dd></dd> }  
    </>
  )
}
