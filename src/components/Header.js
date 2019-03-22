import React from 'react'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Reading List Generator</h1>
      </header>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

