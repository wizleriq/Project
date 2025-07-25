import React from 'react'
import Navbar from './Navbar'

const Message = () => {
  return (
    <section className='lg:w-[998.7px] lg:h-[1080px]  lg:bg-[#fafafae7] justify-between flex flex-col '>
      <div className='ml-4 lg:w-full lg:h-[1080px] lg:bg-[#fafafae7]'>
        <Navbar />
        <div className='lg:w-full lg:h-[1010px] lg:bg-[#FFFFFF] justify-between lg:p-2 lg:mt-4 flex flex-row' >
          

            <section className='lg:w-[267px] lg:h-[940px] lg:bg-[#FAFAFA] lg:flex lg:flex-col lg:rounded-xl'>
<div className='lg:w-[264px] lg:h-[569px] lg:bg-transparent lg:flex lg:flex-col lg:mx-auto '>
  <div className='lg:w-[256px] lg:h-[45px] lg:bg-transparent lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:mt-2'> 
   <div className='lg:w-[155px] lg:h-[45px] lg:flex lg:justify-between lg:bg-transparentlg:items-center ' >
    <img src='/images/Man.png'  alt='man'/>
     <div className='lg:w-[102px] lg:h-[45px] lg:bg-transparent lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <div className='lg:w-[102px] lg:h-[15px] lg:bg-transparent lg:flex lg:flex-col justify-center'>
        <h2 className='lg:font-semibold lg:text-[15px] lg:text-[#FF8600]'>David Peters</h2>
        

      </div>

      <div className='lg:w-[102px] lg:h-[13px] lg:bg-transparent'>
        <h2 className='lg:font-semibold lg:text-[9px] lg:text-[#2E2E2E]'>Senior Developer</h2>
      </div>
    </div>
    </div>

    <div>
      <img src="images/Pencil.png" alt='pencil'  className='lg:mt-[-16px]'/>
      
    </div>
    </div>

    <div className='lg:w-[263px] lg:h-[40px] lg:mt-5 lg:bg-transparent'>
      <input type='text' placeholder='Search Here...' className='lg:w-[263px] lg:h-[40px] lg:outline-none lg:text-center lg:absolute lg:rounded-xl lg:bg-[#FFFFFF]'/>
      <div>
        <img src='images/Icon.png' alt='search' className='lg:relative lg:ml-3 lg:mt-[10px] lg:text-[#CDCDCD]' />
      </div>

    </div>

    <hr className='lg:w-[257px] lg:h-0  lg:bg-black' />
    
    <div className='lg:w-[264px] lg:h-[397px] lg:bg-transparent lg:mt-5'>
     {/* <div className='lg:w-[264px] lg:h-[55px] lg:rounded-lg lg:pt-[5px] lg:pr-[10px] lg:pb-[5px]
      lg:pl-[10px] lg:bg-[#FFFFFF] lg:mb-3'>
      hhh
      </div> */}
      <div className='lg:w-[264px] lg:h-[55px] lg:mb-3 lg:rounded-lg lg:pt-[5px] lg:pr-[5px] lg:pb-[5px]
      lg:pl-[5px] lg:bg-[#FFFFFF] lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:mt-2'> 
   <div className='lg:w-[155px] lg:h-[45px] lg:flex lg:justify-between lg:bg-transparent lg:items-center ' >
    <img src='/images/Lisa.png'  alt='man'/>
     <div className='lg:w-[140px] lg:h-[45px] lg:bg-transparent lg:ml-2 lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <div className='lg:w-[136px] lg:h-[15px] lg:bg-transparent lg:flex lg:flex-col justify-center'>
        <h2 className='lg:font-semibold lg:text-[15px] lg:text-[#FF8600]'>Lisa Roy</h2>
        

      </div>

      <div className='lg:w-[136px] lg:h-[13px] lg:bg-transparent'>
        <h2 className='lg:font-semibold lg:text-[9px] lg:text-[#959595]'>Hi, are you Available Tomorrow?</h2>
      </div>
    </div>
    </div>

    <div className='lg:w-[41px] lg:h-[11px]'>
      <h3 className='lg:font-normal lg:text-[9px] lg:text-[#8D8D8D] '>10:35 AM</h3>
    </div>
    </div>

      <div className='lg:w-[264px] lg:h-[55px] lg:mb-3 lg:rounded-lg lg:pt-[5px] lg:pr-[5px] lg:pb-[5px]
      lg:pl-[5px] lg:bg-transparent lg:flex lg:flex-row lg:justify-between lg:mx-auto lg:mt-2'> 
   <div className='lg:w-[155px] lg:h-[45px] lg:flex lg:justify-between lg:bg-transparent lg:items-center ' >
    <img src='/images/Jamine.png'  alt='man'/>
    <div className='lg:w-[140px] lg:h-[45px] lg:bg-transparent lg:ml-2 lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <div className='lg:w-[136px] lg:h-[15px] lg:bg-transparent lg:flex lg:flex-col justify-center'>
        <h2 className='lg:font-semibold lg:text-[15px] lg:text-[#FF8600]'>Jamie Taylor</h2>
        

      </div>

      <div className='lg:w-[136px] lg:h-[13px] lg:bg-transparent'>
        <h2 className='lg:font-semibold lg:text-[9px] lg:text-[#959595]'>Nice One.
Will Do it tommorow</h2>
      </div>
    </div>
    </div>

      <div className='lg:w-[41px] lg:h-[11px]'>
      <h3 className='lg:font-normal lg:text-[9px] lg:text-[#8D8D8D] '>10:35 AM</h3>
      <img src='/images/Three.png' alt='three' className='lg:ml-6 lg:mt-1' />
    </div>
    </div>

     <div className='lg:w-[264px] lg:h-[55px] lg:mb-3 lg:rounded-lg lg:pt-[5px] lg:pr-[5px] lg:pb-[5px]
      lg:pl-[5px] lg:bg-transparent lg:flex lg:flex-row lg:justify-between lg:mx-auto lg:mt-2'> 
   <div className='lg:w-[155px] lg:h-[45px] lg:flex lg:justify-between lg:bg-transparent lg:items-center ' >
    <img src='/images/Jason.png'  alt='man'/>
    <div className='lg:w-[140px] lg:h-[45px] lg:bg-transparent lg:ml-2 lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <div className='lg:w-[136px] lg:h-[15px] lg:bg-transparent lg:flex lg:flex-col justify-center'>
        <h2 className='lg:font-semibold lg:text-[15px] lg:text-[#FF8600]'>Jason Roy</h2>
        

      </div>

      <div className='lg:w-[136px] lg:h-[24px] lg:bg-transparent'>
        <h2 className='lg:font-semibold lg:text-[9px] lg:text-[#959595]'>That’s Great. I am Looking forward to having a great start.</h2>
      </div>
    </div>
    </div>

      <div className='lg:w-[41px] lg:h-[11px]'>
      <h3 className='lg:font-normal lg:text-[9px] lg:text-[#8D8D8D] '>10:35 AM</h3>
      <img src='/images/Good.png' alt='three' className='lg:ml-6 lg:mt-1' />
    </div>
    </div>

     <div className='lg:w-[264px] lg:h-[55px] lg:mb-3 lg:rounded-lg lg:pt-[5px] lg:pr-[5px] lg:pb-[5px]
      lg:pl-[5px] lg:bg-transparent lg:flex lg:flex-row lg:justify-between lg:mx-auto lg:mt-2'> 
   <div className='lg:w-[155px] lg:h-[45px] lg:flex lg:justify-between lg:bg-transparent lg:items-center ' >
    <img src='/images/Amy.png'  alt='man'/>
    <div className='lg:w-[140px] lg:h-[45px] lg:bg-transparent lg:ml-2 lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <div className='lg:w-[136px] lg:h-[15px] lg:bg-transparent lg:flex lg:flex-col justify-center'>
        <h2 className='lg:font-semibold lg:text-[15px] lg:text-[#FF8600]'>Amy Frost</h2>
        

      </div>

      <div className='lg:w-[136px] lg:h-[24px] lg:bg-transparent'>
        <h2 className='lg:font-semibold lg:text-[9px] lg:text-[#959595]'>Hi, will you start working on the chat app right now?</h2>
      </div>
    </div>
    </div>
      <div className='lg:w-[41px] lg:h-[11px]'>
      <h3 className='lg:font-normal lg:text-[9px] lg:text-[#8D8D8D] '>10:35 AM</h3>
      <img src='/images/Good.png' alt='three' className='lg:ml-6 lg:mt-1' />
    </div>
    </div>
     <div className='lg:w-[264px] lg:h-[55px] lg:mb-3 lg:rounded-lg lg:pt-[5px] lg:pr-[5px] lg:pb-[5px]
      lg:pl-[5px] lg:bg-transparent lg:flex lg:flex-row lg:justify-between lg:mx-auto lg:mt-2'> 
   <div className='lg:w-[155px] lg:h-[45px] lg:flex lg:justify-between lg:bg-transparent lg:items-center ' >
    <img src='/images/Paul.png'  alt='man'/>
    <div className='lg:w-[140px] lg:h-[45px] lg:bg-transparent lg:ml-2 lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <div className='lg:w-[136px] lg:h-[15px] lg:bg-transparent lg:flex lg:flex-col justify-center'>
        <h2 className='lg:font-semibold lg:text-[15px] lg:text-[#FF8600]'>Paul Wilson</h2>
        

      </div>

      <div className='lg:w-[136px] lg:h-[13px] lg:bg-transparent'>
        <h2 className='lg:font-semibold lg:text-[9px] lg:text-[#959595]'>See you tommorow champ</h2>
      </div>
    </div>
    </div>

      <div className='lg:w-[41px] lg:h-[11px]'>
      <h3 className='lg:font-normal lg:text-[9px] lg:text-[#8D8D8D] '>10:35 AM</h3>
      <img src='/images/Good.png' alt='three' className='lg:ml-6 lg:mt-1' />
    </div>
    </div>

     <div className='lg:w-[264px] lg:h-[55px] lg:mb-3 lg:rounded-lg lg:pt-[5px] lg:pr-[5px] lg:pb-[5px]
      lg:pl-[5px] lg:bg-transparent lg:flex lg:flex-row lg:justify-between lg:mx-auto lg:mt-2'> 
   <div className='lg:w-[155px] lg:h-[45px] lg:flex lg:justify-between lg:bg-transparent lg:items-center ' >
    <img src='/images/Ana.png'  alt='man'/>
    <div className='lg:w-[140px] lg:h-[45px] lg:bg-transparent lg:ml-2 lg:flex lg:flex-col lg:justify-center lg:items-center'>
      <div className='lg:w-[136px] lg:h-[15px] lg:bg-transparent lg:flex lg:flex-col justify-center'>
        <h2 className='lg:font-semibold lg:text-[15px] lg:text-[#FF8600]'>Ana Wlliams</h2>
        

      </div>

      <div className='lg:w-[136px] lg:h-[13px] lg:bg-transparent'>
        <h2 className='lg:font-semibold lg:text-[9px] lg:text-[#959595]'>??</h2>
      </div>
    </div>
    </div>

      <div className='lg:w-[41px] lg:h-[11px]'>
      <h3 className='lg:font-normal lg:text-[9px] lg:text-[#8D8D8D] '>10:35 AM</h3>
      <img src='/images/One.png' alt='three' className='lg:ml-6 lg:mt-1' />
    </div>
    </div>
    </div>
  </div>
           </section>
          {/* Left Side */}
          <div className='lg:w-[699px] lg:h-[940px] lg:bg-[#FFFFFF] lg:p-0 '>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Message
