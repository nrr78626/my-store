import React from 'react'

const Heading = ({title}:{title:string}) => {
  return (
    <h2 className='py-1 text-lg font-semibold text-slate-50'>{title}</h2>
  )
}

export default Heading