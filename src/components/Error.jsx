import React from 'react'

const Error = ({children}) => {
  return (
    <div className=' my-4 bg-red-700 text-white text-center uppercase p-3'>
        {children}
    </div>
  )
}

export default Error