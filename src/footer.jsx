import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className=''>
<div className='grid-cols-2 sm:grid-cols-4 grid gap-5 pl-9 bg-gray-100 my-7 p-7'>
  <div className='flex flex-col items-center justify-center'>
    <i className="fa fa-shipping-fast"></i>
    <h2 className='font-medium'>Free Shipping</h2>
    <p>Oh, and we updated our returns policy</p>
  </div>
  <div className='flex flex-col items-center'>
     <i className="fa fa-map-marker-alt"></i>
    <h2 className='font-medium'>Ref stores</h2>
    <p>We're all over the place</p>
  </div>
  <div className='flex flex-col items-center'>
     <i className="fa-regular fa-cloud "></i>
    <h2 className='font-medium'>Committed to climate action</h2>
    <p>And we have big plans</p>
  </div>
  <div className='flex flex-col items-center'>
     <i className="fa-regular fa-message"></i>
    <h2 className='font-medium'>Customer love</h2>
    <p>We got you via email or text</p>
  </div>
</div>

<div className='lg:flex justify-between md:p-8'>
    <div className='sm:order-2 sm:mb-12 lg:mb-0'>
    <p className='text-xs pb-3'>We make great emails</p>
    <input type='email' placeholder='Give us your email' className='lg:w-70 md:w-160 w-90 h-15 pl-3 pr-5 text-lg border focus:outline-none focus:shadow-outline'/><button className='bg-black text-white border hover:bg-white hover:border hover:text-black py-2 px-4 h-15'>Sign up</button>
    <div className='pt-8 sm:pb-0 pb-7'><i className="fa fa-instagram"></i>
    <i className="fa fa-tiktok"></i>
    <i className="fa fa-pinterest"></i>
    <i className="fa fa-facebook"></i>
    <i className="fa fa-youtube"></i></div>
  </div>
  <div className='sm:order-1 grid sm:grid-cols-3 grid-cols-2 gap-9 ml-5'>
    <div className='flex flex-col'>
      <a href='#'>About Ref</a>
      <a href='#'>Stores</a>
      <a href='#'>Careers</a>
      <a href='#'>Affiliates</a>
    </div>
    <div className='flex flex-col'>
      <a href='#'>FAQ</a>
      <a href='#'>Contact</a>
      <a href='#'>Size guide</a>
      <a href='#'>E-gift cards</a>
    </div>
    <div className='flex flex-col'>
      <a href='#'>Sign in</a>
      <a href='#'>Returns & exchanges</a>
      <a href='#'>Order lookup</a>
      <a href='#'>Nigeria</a>
    </div>
  </div>

</div>
<div className='pl-4 mt-12 text-sm'>      
     <a href='#' className='p-2'>Do not sell or share my info</a>
      <a href='#' className='p-2'>Terms</a>
      <a href='#' className='p-2'>Privacy</a>
      <a href='#' className='p-2'>California Privacy Notice</a>
      <a href='#' className='p-2'>Sitemap</a>
      <a href='#' className='p-2'>Accessibility</a>
      <a href='#' className='p-2'>CA Supply Chain</a>
</div>
        <p className='text-sm pl-4 mb-13 mt-7 text-gray-500'>© 2025 Reformation</p>
        <div className='text-xs'> x</div>
      </footer>
      </div>
  )
}

export default Footer
