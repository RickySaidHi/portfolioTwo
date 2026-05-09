import React from 'react'

interface Props {
  fading: boolean
}

const LoadingScreen = ({ fading }: Props) => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        zIndex: 9999,
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <p>Loading...</p>
    </div>
  )
}

export default LoadingScreen