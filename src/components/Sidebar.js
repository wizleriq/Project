import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="lg:w-[250px] lg:h-[1080px] lg:bg-[#F1F1F2] flex flex-col">
      {/* Logo Section */}
      <div className="w-[120px] h-[26px] mx-auto mt-4 text-center">
        <img src="/images/buddy.png" alt="Company logo" className="mx-auto" />
      </div>
        {/* Nagivation Starts */}
        <nav className='lg:w-[250px] lg:h-[346px] lg:bg-transparent  mt-14 lg:flex lg:flex-col'>

           <Link to="/" className='lg:w-[250px] lg:h-[51px] lg:bg-transparent lg:flex justify-evenly items-center lg:mb-1'> 
          <div className='lg:w-[200px] lg:h-[51px] lg:bg-[#ffffffc1] lg:rounded-xl lg:flex justify-center items-center'>
<img src="/images/account.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center items-center' />
<div className='lg:text-[#FF8600] lg:w-[88px] lg:h-[19px]'>
<h3 className=' lg:font-normal lg:text-[14px] lg:leading-none lg:flex justify-center items-center mt-[2px]'>My Portfolio</h3>
</div>
         </div>
         </Link>

          <div className='lg:w-[250px] lg:h-[51px] lg:bg-transparent  lg:flex justify-evenly items-center lg:mb-1 '> 
          <div className='lg:w-[200px] lg:h-[51px] lg:bg-transparent  lg:rounded-xl lg:flex justify-center items-center'>
<img src="/images/Vector.png" alt="Company logo" className='lg:w-[18px] h-[18px]' />
<div className='lg:text-[#818187] lg:w-[88px] lg:h-[19px]'>
<h3 className=' lg:font-normal lg:text-[14px] lg:leading-none lg:flex justify-center items-center'>My Group</h3>
</div>
         </div>
         </div>
          {/* <div className='lg:w-[250px] lg:h-[51px] lg:bg-transparent  lg:flex justify-evenly items-center lg:mb-1 '> 
          <div className='lg:w-[200px] lg:h-[51px] lg:bg-transparent  lg:rounded-xl lg:flex justify-center items-center'>
<img src="/images/mail.png" alt="mail" className='lg:w-[18px] h-[18px]' />
<div className='lg:text-[#818187] lg:w-[88px] lg:h-[19px]'>
  
<h3 className=' lg:font-normal lg:text-[14px] lg:leading-none lg:flex justify-center items-center'>Messages</h3>
</div>
         </div>
         </div> */}
           <Link to="/messages" className="lg:w-[250px] lg:h-[51px] lg:flex justify-evenly items-center lg:mb-1 no-underline">
          <div className="lg:w-[200px] lg:h-[51px] lg:bg-transparent lg:rounded-xl lg:flex justify-center items-center">
            <img src="/images/Mail.png" alt="mail" className="lg:w-[18px] h-[18px]" />
            <div className="lg:text-[#818187] lg:w-[88px] lg:h-[19px]">
              <h3 className="lg:font-normal lg:text-[14px] lg:leading-none lg:flex justify-center items-center">
                Messages
              </h3>
            </div>
          </div>
        </Link>

          <div className='lg:w-[250px] lg:h-[51px] lg:bg-transparent  lg:flex justify-evenly items-center lg:mb-1 '> 
          <div className='lg:w-[200px] lg:h-[51px] lg:bg-transparent  lg:rounded-xl lg:flex justify-center items-center'>
<img src="/images/vec.png" alt="Vec logo" className='lg:w-[18px] h-[18px]' />
<div className='lg:text-[#818187] lg:w-[88px] lg:h-[19px]'>
<h3 className=' lg:font-normal lg:text-[14px] lg:leading-none lg:flex justify-center items-center'>Analytics</h3>
</div>
         </div>
         </div>

          <div className='lg:w-[250px] lg:h-[51px] lg:bg-transparent g:bg-transparent  lg:flex justify-evenly items-center lg:mb-1 '> 
          <div className='lg:w-[200px] lg:h-[51px] lg:bg-transparent  lg:rounded-xl lg:flex justify-center items-center'>
<img src="/images/dollar.png" alt="Company logo" className='lg:w-[18px] h-[18px]' />
<div className='lg:text-[#818187] lg:w-[88px] lg:h-[19px] '>
<h3 className=' lg:font-normal lg:text-[14px] lg:leading-none lg:flex justify-center items-center lg:ml-[-22px]'>Pack</h3>
</div>
         </div>
         </div>

          <div className='lg:w-[250px] lg:h-[51px] lg:bg-transparent  lg:flex justify-evenly items-center lg:mb-1 '> 
          <div className='lg:w-[200px] lg:h-[51px] lg:bg-transparent  lg:rounded-xl lg:flex justify-center items-center'>
<img src="/images/Setting.png" alt="Company logo" className='lg:w-[18px] h-[18px]' />
<div className='lg:text-[#818187] lg:w-[88px] lg:h-[19px]'>
 

<h3 className=' lg:font-normal lg:text-[14px] lg:leading-none lg:flex justify-center items-center'>Settings</h3>
</div>
         </div>
         </div>
        </nav>
        {/* Navigation Ends */}
         <div className=' lg:w-[202px] lg:h-[178px] lg:bg-transparent lg:mt-[360px] lg:mx-auto lg:flex lg:flex-col
         lg:justify-between '>
<div className='lg:w-[202px] lg:h-[148px] lg:rounded-xl lg:mt-8 lg:pt-[36px]  lg:pr-[16px] lg:pb-[16px] lg:pl-[16px]
lg:bg-[#FFFFFF] lg:flex lg:flex-col lg:justify-between lg:items-center lg:absolute '>
  
  <div className='lg:bg-transparent lg:w-[60px] lg:h-[60px] lg:relative lg:mt-[-60px] '>
   <img src='images/Lady.png' alt='lady' />
  </div>

  <div className='lg:w-[170px] lg:h-[41px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between lg:items-center'>
    <h2 className='lg:font-medium lg:text-[18px] lg:text-[#3B3B45]'>Theresa milly</h2>
    <h3 className=' lg:font-medium lg:text-[12px] lg:text-[#818187]' >Influencer</h3>
   

  </div>

  <Link to="/register" className='lg:w-[170px] lg:h-[43px] lg:bg-[#FFFFFF] lg:rounded-xl lg:pt-[12px]
  lg:pr-[32px] lg:pb-[12px] lg:pl-[32px] lg:flex lg:justify-center lg:mx-auto lg:items-center'>
    <img src='images/Logout.png' alt='logout' className='lg:flex lg:justify-between lg:items-center' />
    <h2 className='text-[#FF8600] lg:font-medium lg:text-[14px]'>Logout</h2>
  </Link>
</div>
         </div>

      
    </aside>
  );
};

export default Sidebar;



// import React from 'react'

// const Sidebar = () => {
//   return (
//     <section className=' lg:w-[250px] lg-h-[1080px]  lg:bg-[#f0eeee]'>
//     {/* Logo Starts */}
//       <div className='lg:w-[120px] lg:h-[26px] justify-center align-middle text-center mx-auto mt-4'>
//         <img src="/images/buddy.png" alt="Company logo" />
//       </div>
//         {/* Logo Ends */}

//         {/* Nagivation Starts */}
//         <div className='lg:w-[250px] lg:h-[346px] lg:bg-yellow-200 mt-14 lg:flex lg:flex-col'>
//          <div> <img src="/images/account.png" alt="Company logo" />
//          <h3>My Portfolio</h3>
//          </div>

//          width: 250;
// height: 51;
// angle: 0 deg;
// opacity: 1;
// gap: 55px;

        


//         </div>

//         {/* Navigation Ends */}
    
    
//     </section>
    
//   )
// }

// export default Sidebar