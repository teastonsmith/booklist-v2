import React from 'react'

export default function Footer() {
  return (
        <footer style={footerStyle}>
          <h1>Copyright &copy; 2019 Easton Smith</h1>
          <h2>
              <a>Home</a>
          </h2>
        </footer>
    )
}


const footerStyle = {
    background: '#333',
    fontSize: '10px',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%'
}