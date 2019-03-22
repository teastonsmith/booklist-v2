import React from 'react'

export default function Footer() {
  return (
        <footer style={footerStyle}>
            <h1>Footer</h1>
        </footer>
    )
}


const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'absolute',
    bottom: '0',
    width: '100%'
}