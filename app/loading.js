import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <FontAwesomeIcon icon={faSpinner} className="icon fa-spin fa-3x" />
    </div>
  )
}

export default Loading;