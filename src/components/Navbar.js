import React from 'react'

const Navbar = () => {
  return (
    <section className='lg:w-full lg:h-[48px] lg:justify-between lg:bg-transparent lg:mt-2 lg:items-center flex flex-row'>
<div className='lg:w-[156px] lg:h-[33px] lg:bg-transparent' >
  <h3 className='lg:font-semibold lg:text-[25px] lg:text-[#3B3B45]'>My Portfolio</h3>
  </div>
  <div className='lg:w-[550px] lg:h-[48px] lg:bg-transparent lg:flex lg:justify-between'>
    <div  className='lg:w-[422px] lg:h-[48px]'>
      <input type='text' placeholder='Search' className='lg:w-[422px] lg:h-[48px] lg:text-[#818187] lg:font-medium
       lg:rounded-xl lg:text-[14px]  lg:pt-[12px] lg:pr-[16px] lg:absolute lg:pb-[12px]  lg:pl-[16px] lg:bg-[#FFFFFF]' /> 
        {/* <img src="/images/search.png" alt="Company logo" className='lg:w-[18px] lg:mt-4 ml-4 lg:relative h-[18px] lg:bg-transparent' /> */}
     
    </div>

    <div className='lg:w-[48px] lg:h-[48px] lg:rounded-full lg:bg-[#ffffff] lg:p-[12px] lg:flex lg:justify-center lg:items-center'>
    <img src="/images/plus.png" alt="Company logo" className='lg:w-[24px]
     h-[24px] lg:flex justify-center items-center' />
    </div>

       <div className='lg:w-[48px] lg:h-[48px] lg:rounded-full lg:bg-[#ffffff] lg:p-[12px] lg:flex lg:justify-center lg:items-center'>
    <img src="/images/Bell.png" alt="Company logo" className='lg:w-[24px]
     h-[24px] lg:flex justify-center items-center lg:absolute' />
      <img src="/images/Red.png" alt="Company logo" className='lg:w-[8px]
     h-[8px] lg:flex justify-center items-center lg:relative  lg:top-[-6px] lg:right-[-6px]' />


    </div>

    


  </div>





    </section>
  )
}

export default Navbar