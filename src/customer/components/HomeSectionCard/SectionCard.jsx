import React from 'react'
import { Link } from 'react-router-dom'

function SectionCard({ product }) {
  return (
    <>
    <div className='cursor-pointer flex flex-col items-center bg-slate-50 rounded-lg shadow-lg overflow-hidden
    w-[15rem] mx-3 border'>
      <Link to="/productdetail" >
        <div className='h-[13rem] w-[10rem]'>
        <img src={product.thumbnail} className='object-cover object-top w-full h-full rounded-lg' alt="" />
    </div>
    <div className='p-4 text-center'>
        <h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
        <p>${product.price}</p>
</div>
</Link>
    </div>
    </>
  )
}

export default SectionCard