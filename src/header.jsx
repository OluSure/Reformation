import React from 'react'

const Header = () => {
  return (
    <div className="">
        <div className="h-7 bg-gray-200 text-sm text-black text-center">Free express shipping.</div>
         <div className="hidden xl:flex justify-between py-5 px-9 ">
      <h2 className="text-3xl font-bold">Reformation</h2>
      <div>
        <a href="#" className="text-black m-2 text-sm">Sustainability</a>
        <a href="#" className="text-black m-2 text-sm">Our stores</a>
        <a href="#" className="text-black m-2 text-sm">Sign in</a>
        <a href="#" className="text-black m-2"><i className="fa-regular fa-heart"></i></a>
        <a href="#" className="text-black m-2"><i className="fa fa-lock"></i></a>
      </div>
      </div>
      <div className="hidden xl:flex justify-between py-5 px-7 border-t border-gray-300">
    <div>
    <a href="#" className="text-black text-xl m-2">New</a>
    <a href="#" className="text-black text-xl m-2">Clothing</a>
    <a href="#" className="text-black text-xl m-2">Dresses</a>
    <a href="#" className="text-black text-xl m-2">Tops</a>
    <a href="#" className="text-black text-xl m-2">Jeans</a>
    <a href="#" className="text-black text-xl m-2">Sweaters</a>
    <a href="#" className="text-black text-xl m-2">Weddings</a>
    <a href="#" className="text-black text-xl m-2">Shoes</a>
    <a href="#" className="text-black text-xl m-2">Accessories</a>
    <a href="#" className="text-black text-xl m-2">Holiday</a>
    <a href="#" className="text-black text-xl m-2">Curated</a>
    </div>
<div className='border-b border-black'>
    <input type="text" placeholder="Search" className="text-black text-lg w-40 focus:outline-none"/><button className="w-6 px-3  text-sm text-black hover:bg-emerald-300"><i className="fa fa-search"></i></button>
</div>
      </div>
      <div className='xl:hidden flex justify-between items-center mx-4 my-2'>
        <div><i className="fa fa-list"></i> <i className="fa fa-user"></i></div>
        <h1 className='text-xl font-bold'>Reformation</h1>
        <div><i className="fa fa-search"></i><i className="fa fa-lock"></i></div>
      </div>
    </div>
  )
}



export default Header
