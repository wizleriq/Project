import React from 'react'
import Navbar from './Navbar'
import Barchart from './Barchart'

const Main = () => {
  return (
    <section className='lg:w-[998.7px]  lg:h-[1080px]  lg:bg-[#fafafae7] justify-between flex flex-col '>
      <div className='ml-4 lg:w-full lg:h-[1080px] lg:bg-transparent'>
        {/* lg:w-[1134px] lg:bg-[#fafafae7] */}
        <Navbar />
        <div className='lg:w-full lg:h-[1010px] lg:bg-transparent justify-between lg:mt-4 flex flex-row' >
          <div className='lg:w-[715px] lg:h-[940px] lg:bg-transparent lg:p-0 '>
            {/* User Section Starts */}

            <div className='lg:w-[715px] lg:h-[81px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
              <div className='lg:w-[230px] lg:h-[81px] lg:rounded-xl lg:p-[16px] lg:bg-[#FFFFFF] lg:flex lg:justify-between lg:items-center'>
                <div className='lg:w-[97px] lg:h-[49px] lg:transparent lg:flex lg:flex-col'>
                  <div className='lg:w-[29px] lg:h-[33px]'>
                    <h2 className='lg:font-medium text-2xl lg:text-[25px] lg:text- black'>51</h2>
                  </div>
                  <div className='lg:w-[97px] lg:h-[16px] lg:bg-transparent'>
                    <h3 className='lg:font-medium lg:text-[12px] lg:text-[#A3A3A6] '>  Total Channels
                    </h3>

                  </div>


                </div>
                <div className='lg:w-[48px] lg:h-[48px] lg:bg-[#E0FAF5] lg:flex lg:rounded-full lg:justify-center lg:items-center '>
                  <img src="/images/circle.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center items-center' />


                </div>

              </div>
              <div className='lg:w-[230px] lg:h-[81px] lg:rounded-xl lg:p-[16px] lg:bg-[#FFFFFF] lg:flex lg:justify-between lg:items-center'>
                <div className='lg:w-[97px] lg:h-[49px] lg:transparent lg:flex lg:flex-col'>
                  <div className='lg:w-[29px] lg:h-[33px]'>
                    <h2 className='lg:font-medium text-2xl lg:text-[25px] lg:text- black'>125</h2>
                  </div>
                  <div className='lg:w-[97px] lg:h-[16px] lg:bg-transparent'>
                    <h3 className='lg:font-medium lg:text-[12px] lg:text-[#A3A3A6] '>New Members
                    </h3>
                  </div>
                </div>
                <div className='lg:w-[48px] lg:h-[48px] lg:bg-[#EFF2FE] lg:flex lg:rounded-full lg:justify-center lg:items-center '>
                  <img src="/images/add.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center items-center' />
                </div>
              </div>
              <div className='lg:w-[230px] lg:h-[81px] lg:rounded-xl lg:p-[16px] lg:bg-[#FFFFFF] lg:flex lg:justify-between lg:items-center'>
                <div className='lg:w-[97px] lg:h-[49px] lg:transparent lg:flex lg:flex-col'>
                  <div className='lg:w-[29px] lg:h-[33px]'>
                    <h2 className='lg:font-medium text-2xl lg:text-[25px] lg:text- black'>789</h2>
                  </div>
                  <div className='lg:w-[97px] lg:h-[16px] lg:bg-transparent'>
                    <h3 className='lg:font-medium lg:text-[12px] lg:text-[#A3A3A6] '>  All Impressions
                    </h3>
                  </div>
                </div>
                <div className='lg:w-[48px] lg:h-[48px] lg:bg-[#FFF0E0] lg:flex lg:rounded-full lg:justify-center lg:items-center '>
                  <img src="/images/growth.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center items-center' />
                </div>
              </div>
            </div>
            {/* User Section Ends */}

            {/* Bar Chart Section Starts */}

            <div className='lg:w-[715px] lg:h-[320px] lg:mt-2 lg:rounded-2xl lg:p-[24px] lg:bg-[#FFFFFF]'>
              <div className='lg:w-[151px] lg:h-[27px] lg:bg-transparent lg:mt-[-10px] lg:mb-2'>
                <h2 className='lg:font-bold lg:text-xl lg:text-[20px] lg:text-black'>Overview</h2>
              </div>
              <Barchart />
            </div>

            {/* Bar Chart Section Ends */}

            {/* Trending Post Section Starts */}
            <div className='lg:w-[715px] lg:h-[274px] lg:mt-2 lg:p-[16px] lg:bg-[#FFFFFF] lg:rounded-2xl'>
              <div className='lg:w-[151px] lg:h-[27px] lg:bg-transparent'>
                <h2 className='lg:font-bold lg:text-xl lg:text-[20px] lg:text-black'>Trending Posts</h2>
              </div>


              <div className='lg:w-[684px] lg:h-[179px] lg:bg-transparent lg:mt-5 lg:flex lg:justify-between '>
                {/* <div className='lg:w-[335px] lg:h-[179px] lg:bg-[#FFFFFF] lg:rounded-md lg:p-16px border-[1px] lg:flex lg:flex-col
 lg:justify-evenly lg:items-center'>
             <div className='lg:w-[320px] lg:h-[100px] lg:bg-red-200 lg:flex  lg:flex-col lg:justify-between lg:'>
              <div className='lg:w-[320px] lg:h-[42px] lg:bg-green-200'>
                <h2 className='lg:font-semibold lg:text-base lg:text-[18px]'>8 Upcoming Influencer Marketing Trends and Benefits</h2>
              </div>
               <div className='lg:w-[322px] lg:h-[42px] lg:bg-yellow-200'>
                <h2 className='lg:font-light lg:text-[14px]'>Marketing is evolving. It's changing from a one-way street to a two-way conversa…</h2>
              </div>
              </div>
               <div className='lg:w-[218px] lg:h-[27px] lg:bg-green-200 lg:flex lg:justify-items-start'>
            


              </div>

              
              </div> */}
                <div className='lg:w-[335px] lg:h-[179px] lg:bg-white lg:rounded-md border lg:flex lg:flex-col lg:justify-evenly'>
                  <div className='lg:w-[320px] lg:h-[100px] lg:bg-transparent lg:flex  lg:mx-auto lg:flex-col lg:justify-between'>
                    <div className='lg:w-[320px] lg:h-[42px] lg:bg-transparent'>
                      <h2 className='lg:font-semibold lg:text-base lg:text-[18px]'>8 Upcoming Influencer Marketing Trends and Benefits</h2>
                    </div>
                    <div className='lg:w-[320px] lg:h-[42px] lg:bg-transparent'>
                      <h2 className='lg:font-light lg:text-[14px]'>Marketing is evolving. It's changing from a one-way street to a two-way conversa…</h2>
                    </div>
                  </div>
                  <div className='lg:w-[218px] lg:h-[27px] lg:bg-transparent self-start lg:ml-2 lg:flex lg:justify-between'>
                    <div className='lg:w-[64px] lg:h-[27px] lg:rounded-2xl lg:pt-[4px] lg:bg-[#F6F6F6] lg:pr-[10px] lg:pb-[4px] lg:pl-[10px]'>
                      <img src="/images/heart.png" alt="Company logo" className='lg:w-[44px] h-[19px] lg:flex justify-center items-center' />
                    </div>
                    <div className='lg:w-[64px] lg:h-[27px] lg:rounded-2xl lg:pt-[4px] lg:bg-[#F6F6F6] lg:pr-[10px] lg:pb-[4px]
     lg:pl-[10px] lg:flex lg:justify-between lg:items-center'>
                      <img src="/images/comment.png" alt="Company logo" className='lg:w-[16px] h-[16px] lg:flex justify-center items-center' />
                      <div className='lg:w-[26px] lg:h-[19px] lg:ml-1'>
                        <h2 className='lg:font-medium lg:text-xs lg:text-[14px]'>234</h2>
                      </div>
                    </div>
                    <div className='lg:w-[64px] lg:h-[27px] lg:rounded-2xl lg:pt-[4px] lg:bg-[#F6F6F6] lg:pr-[10px] lg:pb-[4px]
     lg:pl-[10px] lg:flex lg:justify-between lg:items-center'>
                      <img src="/images/next.png" alt="Company logo" className='lg:w-[16px] h-[16px] lg:flex justify-center items-center' />
                      <div className='lg:w-[26px] lg:h-[19px] lg:ml-1'>
                        <h2 className='lg:font-medium lg:text-xs lg:text-[14px]'>123</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='lg:w-[335px] lg:h-[179px] lg:bg-white lg:rounded-md border lg:flex lg:flex-col lg:justify-evenly'>
                  <div className='lg:w-[320px] lg:h-[100px] lg:bg-transparent lg:flex  lg:mx-auto lg:flex-col lg:justify-between'>
                    <div className='lg:w-[320px] lg:h-[42px] lg:bg-transparent'>
                      <h2 className='lg:font-semibold lg:text-base lg:text-[18px]'>How Influencer Marketing Affects Consumer Buying Behavior</h2>
                    </div>
                    <div className='lg:w-[322px] lg:h-[42px] lg:bg-transparent'>
                      <h2 className='lg:font-light lg:text-[14px]'>As influencer marketing continues to grow, consumers have been turning to their…</h2>
                    </div>
                  </div>
                  <div className='lg:w-[218px] lg:h-[27px] lg:bg-transparent self-start lg:ml-2 lg:flex lg:justify-between'>
                    <div className='lg:w-[64px] lg:h-[27px] lg:rounded-2xl lg:pt-[4px] lg:bg-[#F6F6F6] lg:pr-[10px] lg:pb-[4px] lg:pl-[10px]'>
                      <img src="/images/heart.png" alt="Company logo" className='lg:w-[44px] h-[19px] lg:flex justify-center items-center' />
                    </div>
                    <div className='lg:w-[64px] lg:h-[27px] lg:rounded-2xl lg:pt-[4px] lg:bg-[#F6F6F6] lg:pr-[10px] lg:pb-[4px]
     lg:pl-[10px] lg:flex lg:justify-between lg:items-center'>
                      <img src="/images/comment.png" alt="Company logo" className='lg:w-[16px] h-[16px] lg:flex justify-center items-center' />
                      <div className='lg:w-[26px] lg:h-[19px] lg:ml-1'>
                        <h2 className='lg:font-medium lg:text-xs lg:text-[14px]'>234</h2>
                      </div>
                    </div>
                    <div className='lg:w-[64px] lg:h-[27px] lg:rounded-2xl lg:pt-[4px] lg:bg-[#F6F6F6] lg:pr-[10px] lg:pb-[4px]
     lg:pl-[10px] lg:flex lg:justify-between lg:items-center'>
                      <img src="/images/next.png" alt="Company logo" className='lg:w-[16px] h-[16px] lg:flex justify-center items-center' />
                      <div className='lg:w-[26px] lg:h-[19px] lg:ml-1'>
                        <h2 className='lg:font-medium lg:text-xs lg:text-[14px]'>123</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* Trending Post Section Ends */}

            <div className='lg:w-[715px] lg:h-[215px] lg:rounded-2xl lg:mt-2 lg:p-[20px] lg:bg-[#FFFFFF] lg:flex lg:flex-col
            lg:justify-between lg:items-center'>
              <div className='lg:w-[680px] lg:h-[27px] lg:bg-transparent lg:flex lg:flex-row lg:justify-between'>
               <h2 className='lg:font-semibold lg:text-xl lg:tex-[20px] lg:text-[#3B3B45] '>Potential Members</h2>
              </div>

              <div className='lg:w-[680px] lg:h-[132px] lg:bg-transparent  lg:flex lg:flex-row lg:justify-between'> 
                <div className='lg:w-[130px] lg:h-[132px] lg:rounded-xl lg:pt-[12px] lg:pr-[16px] lg:pb-[12px] lg:pl-[16px]
                lg:bg-transparent lg:border lg:border-[#F1F1F1] lg:flex lg:flex-col lg:justify-between lg:items-center'>
                  
                  <div className='lg:w-[105px] lg:h-[80px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:items-center'>
                    <div className='lg:w-[40px] lg:h-[40px] lg:bg-transparent '>
                      <img src="/images/Wander.png" alt="Company logo" className='lg:w-[40px] h-[40px] lg:flex justify-center items-center' />
                    
                    </div>
                    <div className='lg:w-[105px] lg:h-[32px] lg:bg-transparent '>
                <div className='lg:w-[105px] lg:h-[18px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
               <h2 className='lg:font-medium lg:text-[14px] lg:text-center lg:align-middle lg:text-[#3B3B45]'>Wanda Parker</h2>
</div>
<div className='lg:w-[105px] lg:h-[14px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
                  
        <h2 className='lg:font-normal lg:text-[11px] lg:text-center lg:align-middle lg:text-[#818187]'>@ashking1234</h2>
</div>


                    </div>
                  </div>

                  <div className='lg:w-[77px] lg:h-[20px] lg:bg-transparent lg:flex lg:flex-row lg:justify-around lg:items-center'>
                  <img src="/images/growth.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center items-center' />
                  <div className='lg:w-[29px] lg:h-[20px] lg:bg-transparent  lg:flex lg:flex-row lg:justify-center lg:items-center'>
                    <h2 className=' lg:font-semibold lg:text-[16px]'>
                      10.3%
                    </h2>
                   

                  </div>
</div>
                </div>

                <div className='lg:w-[130px] lg:h-[132px] lg:rounded-xl lg:pt-[12px] lg:pr-[16px] lg:pb-[12px] lg:pl-[16px]
                lg:bg-transparent lg:border lg:border-[#F1F1F1] lg:flex lg:flex-col lg:justify-between lg:items-center'>
                  
                  <div className='lg:w-[105px] lg:h-[80px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:items-center'>
                    <div className='lg:w-[40px] lg:h-[40px] lg:bg-transparent '>
                      <img src="/images/Brown.png" alt="Company logo" className='lg:w-[40px] h-[40px] lg:flex justify-center items-center' />
                    
                    </div>
                    <div className='lg:w-[105px] lg:h-[32px] lg:bg-transparent '>
                <div className='lg:w-[105px] lg:h-[18px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
               <h2 className='lg:font-medium lg:text-[14px] lg:text-center lg:align-middle lg:text-[#3B3B45]'>Terry Brown</h2>
</div>
<div className='lg:w-[105px] lg:h-[14px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
                  
        <h2 className='lg:font-normal lg:text-[11px] lg:text-center lg:align-middle lg:text-[#818187]'>@ashking1234</h2>
</div>


                    </div>
                  </div>

                  <div className='lg:w-[77px] lg:h-[20px] lg:bg-transparent lg:flex lg:flex-row lg:justify-around lg:items-center'>
                  <img src="/images/growth.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center items-center' />
                  <div className='lg:w-[29px] lg:h-[20px] lg:bg-transparent  lg:flex lg:flex-row lg:justify-center lg:items-center'>
                    <h2 className=' lg:font-semibold lg:text-[16px]'>
                      9.8%
                    </h2>
                   

                  </div>
</div>
                </div>

                <div className='lg:w-[130px] lg:h-[132px] lg:rounded-xl lg:pt-[12px] lg:pr-[16px] lg:pb-[12px] lg:pl-[16px]
                lg:bg-transparent lg:border lg:border-[#F1F1F1] lg:flex lg:flex-col lg:justify-between lg:items-center'>
                  
                  <div className='lg:w-[105px] lg:h-[80px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:items-center'>
                    <div className='lg:w-[40px] lg:h-[40px] lg:bg-transparent '>
                      <img src="/images/Lucas.png" alt="Company logo" className='lg:w-[40px] h-[40px] lg:flex justify-center items-center' />
                    
                    </div>
                    <div className='lg:w-[105px] lg:h-[32px] lg:bg-transparent '>
                <div className='lg:w-[105px] lg:h-[18px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
               <h2 className='lg:font-medium lg:text-[14px] lg:text-center lg:align-middle lg:text-[#3B3B45]'>Lucas Holmes</h2>
</div>
<div className='lg:w-[105px] lg:h-[14px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
                  
        <h2 className='lg:font-normal lg:text-[11px] lg:text-center lg:align-middle lg:text-[#818187]'>@ashking1234</h2>
</div>


                    </div>
                  </div>

                  <div className='lg:w-[77px] lg:h-[20px] lg:bg-transparent lg:flex lg:flex-row lg:justify-around lg:items-center'>
                  <img src="/images/growth.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center items-center' />
                  <div className='lg:w-[29px] lg:h-[20px] lg:bg-transparent  lg:flex lg:flex-row lg:justify-center lg:items-center'>
                    <h2 className=' lg:font-semibold lg:text-[16px]'>
                      6.5%
                    </h2>
                   

                  </div>
</div>
                </div>

                <div className='lg:w-[130px] lg:h-[132px] lg:rounded-xl lg:pt-[12px] lg:pr-[16px] lg:pb-[12px] lg:pl-[16px]
                lg:bg-transparent lg:border lg:border-[#F1F1F1] lg:flex lg:flex-col lg:justify-between lg:items-center'>
                  
                  <div className='lg:w-[105px] lg:h-[80px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:items-center'>
                    <div className='lg:w-[40px] lg:h-[40px] lg:bg-transparent '>
                      <img src="/images/Janice.png" alt="Company logo" className='lg:w-[40px] h-[40px] lg:flex justify-center items-center' />
                    
                    </div>
                    <div className='lg:w-[105px] lg:h-[32px] lg:bg-transparent '>
                <div className='lg:w-[105px] lg:h-[18px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
               <h2 className='lg:font-medium lg:text-[14px] lg:text-center lg:align-middle lg:text-[#3B3B45]'>Janice Miller</h2>
</div>
<div className='lg:w-[105px] lg:h-[14px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
                  
        <h2 className='lg:font-normal lg:text-[11px] lg:text-center lg:align-middle lg:text-[#818187]'>@ashking1234</h2>
</div>


                    </div>
                  </div>

                  <div className='lg:w-[77px] lg:h-[20px] lg:bg-transparent lg:flex lg:flex-row lg:justify-around lg:items-center'>
                  <img src="/images/growth.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center items-center' />
                  <div className='lg:w-[29px] lg:h-[20px] lg:bg-transparent  lg:flex lg:flex-row lg:justify-center lg:items-center'>
                    <h2 className=' lg:font-semibold lg:text-[16px]'>
                      8.6%
                    </h2>
                   

                  </div>
</div>
                </div>

                <div className='lg:w-[130px] lg:h-[132px] lg:rounded-xl lg:pt-[12px] lg:pr-[16px] lg:pb-[12px] lg:pl-[16px]
                lg:bg-transparent lg:border lg:border-[#F1F1F1] lg:flex lg:flex-col lg:justify-between lg:items-center'>
                  
                  <div className='lg:w-[105px] lg:h-[80px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:items-center'>
                    <div className='lg:w-[40px] lg:h-[40px] lg:bg-transparent '>
                      <img src="/images/Wander.png" alt="Company logo" className='lg:w-[40px] h-[40px] lg:flex justify-center items-center' />
                    
                    </div>
                    <div className='lg:w-[105px] lg:h-[32px] lg:bg-transparent '>
                <div className='lg:w-[105px] lg:h-[18px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
               <h2 className='lg:font-medium lg:text-[14px] lg:text-center lg:align-middle lg:text-[#3B3B45]'>Terry Brown</h2>
</div>
<div className='lg:w-[105px] lg:h-[14px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-end lg:items-center'>
                  
        <h2 className='lg:font-normal lg:text-[11px] lg:text-center lg:align-middle lg:text-[#818187]'>@ashking1234</h2>
</div>


                    </div>
                  </div>

                  <div className='lg:w-[77px] lg:h-[20px] lg:bg-transparent lg:flex lg:flex-row lg:justify-around lg:items-center'>
                  <img src="/images/growth.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center items-center' />
                  <div className='lg:w-[29px] lg:h-[20px] lg:bg-transparent  lg:flex lg:flex-row lg:justify-center lg:items-center'>
                    <h2 className=' lg:font-semibold lg:text-[16px]'>
                      9.8%
                    </h2>
                   

                  </div>
</div>
                </div>
                
              

              </div>

             

            </div>
          </div>

          {/* Left Side */}
          <div className='lg:w-[267px] lg:h-[940px] lg:bg-transparent'>
            <div className='lg:w-[267px] lg:h-[287px] lg:rounded-xl lg:p-[20px] lg:bg-[#FFFFFF] lg:flex lg:flex-col
            lg:justify-evenly lg:items-center'>
             <div className='lg:w-[250px] lg:h-[27px] lg:justify-between lg:bg-transparent lg:flex lg:flex-row lg:items-center'>
              <div className='lg:w-[95px] lg:h-[27px] lg:bg-transparent'>
       <h2 className='lg:font-semibold lg:text-base lg:text-[20px]'>Watchlist</h2>
</div>
<div className='lg:w-[62px] lg:h-[15px] lg:bg-transparent lg:flex lg:flex-row lg:justify-center lg:items-center'>
  <h3 className='lg:font-medium lg:text-[12px] lg:text-[#FF8600]'>VIEW ALL</h3>
</div>

              </div>

          <section className='lg:w-[250px] lg:h-[204px] lg:justify-between lg:bg-transparent lg:flex lg:flex-col'>
            <div className='lg:w-[250px] lg:h-[96px] lg:justify-between lg:rounded-md lg:pt-[12px] lg:pr-[16px]
            lg:pb-[12px] lg:pl-[16px] lg:bg-[#F6F6F6] lg:flex lg:flex-row  lg:items-center '>
              <div className='lg:w-[96px] lg:h-[72px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between'>
              <div className='lg:w-[96px] lg:h-[24px] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
                <div className='lg:w-[48px] lg:h-[23px] lg:bg-transparent  lg:flex lg:items-center lg:justify-between'>
                 <h2 className=' lg:font-semibold lg:text-[18px] lg:text-lg'>
                  AAPL
                 </h2>

                </div>

                <div className='lg:w-[24px] lg:h-[24px] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
                  <img src="/images/up.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center lg:mx-auto  items-center' />
                </div>
</div>

<div className='lg:w-[57px] lg:h-[40px] lg:bg-transparent'>
 <div className='lg:w-[57px] lg:h-[22px] lg:bg-transparent'>
 <h2 className='lg:font-medium lg:text-[15px] lg:text-[#A3A3A6]'>$142.90</h2>
 </div>
<div className='lg:w-[42px] lg:h-[18px] lg:bg-transparent'>
 <h3 className='lg:text-[#00A441] lg:font-normal lg:text-[12px] '>+0.47%</h3>
 

 </div>

</div>
              </div>

              <div className='lg:w-[120px] lg:h-[59px] lg:bg-transparent'>
               <img src="/images/Line.png" alt="Company logo" className=' lg:items-center lg:w-[120px]  lg:absolute lg:justify-center lg:mt-7'/>
               <img src="/images/orange.png" alt="Company logo" className='lg:relative lg:items-center lg:justify-center lg:mt-[0px]'/>
                {/* width: 154.00000000000057;
height: 0px;
angle: 0 deg;
opacity: 1;
top: 51.5px;
left: 120px;
border-width: 1px;
border-style: dashed;
dashes: 5, 5; */}


              </div>
            </div>

             <div className='lg:w-[250px] lg:h-[96px] lg:justify-between lg:rounded-md lg:pt-[12px] lg:pr-[16px]
            lg:pb-[12px] lg:pl-[16px] lg:bg-[#F6F6F6] lg:flex lg:flex-row  lg:items-center '>
              <div className='lg:w-[96px] lg:h-[72px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between'>
              <div className='lg:w-[96px] lg:h-[24px] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
                <div className='lg:w-[48px] lg:h-[23px] lg:bg-transparent  lg:flex lg:items-center lg:justify-between'>
                 <h2 className=' lg:font-semibold lg:text-[18px] lg:text-lg'>
                  BPL
                 </h2>

                </div>

                <div className='lg:w-[24px] lg:h-[24px] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
                  <img src="/images/down.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center lg:mx-auto  items-center' />
                </div>
</div>

<div className='lg:w-[57px] lg:h-[40px] lg:bg-transparent'>
 <div className='lg:w-[57px] lg:h-[22px] lg:bg-transparent'>
 <h2 className='lg:font-medium lg:text-[15px] lg:text-[#A3A3A6]'>$142.90</h2>
 </div>
<div className='lg:w-[42px] lg:h-[18px] lg:bg-transparent'>
 <h3 className='lg:text-[#FF5252] lg:font-normal lg:text-[12px] '>-0.48%</h3>
 

 </div>

</div>
              </div>

              <div className='lg:w-[120px] lg:h-[59px] lg:bg-transparent'>
               <img src="/images/Line.png" alt="Company logo" className=' lg:items-center lg:w-[120px]  lg:absolute lg:justify-center lg:mt-7'/>
               <img src="/images/orange.png" alt="Company logo" className='lg:relative lg:items-center lg:justify-center lg:mt-[0px]'/>
              </div>
            </div>
               
              </section>
            </div>

            <div className='lg:w-[267px] lg:h-[287px] lg:mt-2 lg:rounded-xl lg:p-[10px] lg:bg-[#FFFFFF] lg:flex lg:flex-col
            '>
               <div className='lg:w-[250px] lg:h-[27px] lg:justify-between lg:bg-transparent lg:flex lg:flex-row lg:items-center'>
              <div className='lg:w-[95px] lg:h-[27px] lg:bg-transparent'>
       <h2 className='lg:font-semibold lg:text-base lg:text-[20px]'>Revenue</h2>
</div>

              </div>
                        <section className='lg:w-[250px] lg:h-[216px] lg:mt-2 lg:justify-between lg:bg-transparent lg:flex lg:flex-col'>
                          <div className='lg:w-[250px] lg:h-[64px]  lg:mb-2 lg:rounded-xl lg:pt-[8px] lg:pr-[16px]
                          lg:pb-[8px] lg:pl-[16px] lg:border-[1px] lg:bg-[#ffffff] lg:border-[#F1F1F1] lg:flex lg:flex-row
                          lg:justify-between lg:items-center'>
                           <div className='lg:w-[133px] lg:h-[40px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between'>
                            <div className='lg:w-[64px] lg:h-[24px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
                            <h2 className='lg:font-semibold lg:text-[18px] lg:text-lg lg:text-[#3B3B45]'>$4,000</h2>
                            </div>
                             <div className='lg:w-[133px] lg:h-[16px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
                            <h2 className='lg:font-medium lg:text-[12px] lg:text-xs lg:text-[#A3A3A6]'>Recently Added Pages</h2>
                            </div>
                           </div>

                           <div className='lg:w-[48px] lg:h-[48px] lg:bg-[#1773EA14] lg:rounded-full lg:flex lg:justify-center lg:items-center'>
                           <img src="/images/Facebook.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center lg:mx-auto  items-center' />
                          

                           </div>

                          </div>

                           <div className='lg:w-[250px] lg:h-[64px]  lg:mb-2 lg:rounded-xl lg:pt-[8px] lg:pr-[16px]
                          lg:pb-[8px] lg:pl-[16px] lg:border-[1px] lg:bg-[#ffffff] lg:border-[#F1F1F1] lg:flex lg:flex-row
                          lg:justify-between lg:items-center'>
                           <div className='lg:w-[133px] lg:h-[40px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between'>
                            <div className='lg:w-[64px] lg:h-[24px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
                            <h2 className='lg:font-semibold lg:text-[18px] lg:text-lg lg:text-[#3B3B45]'>$2,120</h2>
                            </div>
                             <div className='lg:w-[133px] lg:h-[16px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
                            <h2 className='lg:font-medium lg:text-[12px] lg:text-xs lg:text-[#A3A3A6]'>Video Monetization</h2>
                            </div>
                           </div>
                           <div className='lg:w-[48px] lg:h-[48px] lg:bg-[#EB334814] lg:rounded-full lg:flex lg:justify-center lg:items-center'>
                           <img src="/images/instagram.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center lg:mx-auto  items-center' />
                          

                           </div>

                          </div>

                           <div className='lg:w-[250px] lg:h-[64px]  lg:mb-2 lg:rounded-xl lg:pt-[8px] lg:pr-[16px]
                          lg:pb-[8px] lg:pl-[16px] lg:border-[1px] lg:bg-[#ffffff] lg:border-[#F1F1F1] lg:flex lg:flex-row
                          lg:justify-between lg:items-center'>
                           <div className='lg:w-[133px] lg:h-[40px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between'>
                            <div className='lg:w-[64px] lg:h-[24px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
                            <h2 className='lg:font-semibold lg:text-[18px] lg:text-lg lg:text-[#3B3B45]'>$1,752</h2>
                            </div>
                             <div className='lg:w-[133px] lg:h-[16px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
                            <h2 className='lg:font-medium lg:text-[12px] lg:text-xs lg:text-[#A3A3A6]'>Community Buildup</h2>
                            </div>
                           


                           

                           </div>

                           <div className='lg:w-[48px] lg:h-[48px] lg:bg-[#2764AC14] lg:rounded-full lg:flex lg:justify-center lg:items-center'>
                           <img src="/images/linkedin.png" alt="Company logo" className='lg:w-[18px] h-[18px] lg:flex justify-center lg:mx-auto  items-center' />
                          

                           </div>

                          </div>
                        </section>
            </div>

            {/* Trending News Section Starts */}
             <section className='lg:w-[267px] lg:h-[326px] lg:mt-2 lg:rounded-xl lg:p-[10px] lg:bg-[#FFFFFF] lg:flex lg:flex-col
            '>
               <div className='lg:w-[250px] lg:h-[27px] lg:justify-between lg:bg-transparent lg:flex lg:flex-row lg:items-center'>
              <div className='lg:w-[152px] lg:h-[27px] lg:bg-transparent'>
       <h2 className='lg:font-semibold lg:text-base lg:text-[20px]'>Trending News</h2>
</div>

              </div>

               <div className='lg:w-[250px] lg:h-[240px] lg:mt-2 lg:justify-between lg:bg-transparent lg:flex lg:flex-col'>
  <div className='lg:w-[250px] lg:h-[72px]  lg:mb-2 lg:rounded-xl lg:p-[8px] lg:border-[1px] lg:bg-[#ffffff] lg:border-[#F1F1F1] lg:flex lg:flex-row
                          lg:justify-between lg:items-center'>
                            <img src="/images/Russia.png" alt="Company logo" className='lg:w-[48px] h-[48px] lg:rounded-sm lg:flex justify-center items-center' />
                            <div className='lg:w-[180px] lg:h-[35px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:text-[#3B3B45]'>
                              <div className='lg:w-[170px] lg:h-[18px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
                                <h2 className='lg:font-semibold lg:text-base lg:text-[13.9px]'>Russia & Ukraine War</h2>
                              </div>

                                <div className='lg:w-[170px] lg:h-[18px] lg:bg-transparent lg:flex lg:justify-center lg:items-center'>
                                <h2 className='lg:font-light lg:text-[12px]'>Marketing is evolving. It's chang...</h2>
                              </div>
                             


                            
                              
                            </div>
                          </div>

                           <div className='lg:w-[250px] lg:h-[72px]  lg:mb-2 lg:rounded-xl lg:p-[8px] lg:border-[1px] lg:bg-[#ffffff] lg:border-[#F1F1F1] lg:flex lg:flex-row
                          lg:justify-between lg:items-center'>
                            <img src="/images/Elon.png" alt="Company logo" className='lg:w-[48px] h-[48px] lg:rounded-sm lg:flex justify-center items-center' />
                            <div className='lg:w-[180px] lg:h-[35px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:text-[#3B3B45]'>
                              <div className='lg:w-[190px] lg:h-[18px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
                                <h2 className='lg:font-semibold lg:text-base lg:text-[13.9px]'>Elon Musk bought Twitter</h2>
                              </div>

                                <div className='lg:w-[170px] lg:h-[18px] lg:bg-transparent lg:flex lg:justify-center lg:items-center'>
                                <h2 className='lg:font-light lg:text-[11.5px]'>Twitter is the most useful social pl....</h2>
                              </div>   
                            </div>
                          </div>

                           <div className='lg:w-[250px] lg:h-[72px]  lg:mb-2 lg:rounded-xl lg:p-[8px] lg:border-[1px] lg:bg-[#ffffff] lg:border-[#F1F1F1] lg:flex lg:flex-row
                          lg:justify-between lg:items-center'>
                            <img src="/images/car.png" alt="Company logo" className='lg:w-[48px] h-[48px] lg:rounded-sm lg:flex justify-center items-center' />
                            <div className='lg:w-[180px] lg:h-[35px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between lg:text-[#3B3B45]'>
                              <div className='lg:w-[170px] lg:h-[18px] lg:bg-transparent lg:flex lg:justify-between lg:items-center'>
                                <h2 className='lg:font-semibold lg:text-base lg:text-[13.9px]'>Fuel Crisis Everywhere</h2>
                              </div>

                                <div className='lg:w-[170px] lg:h-[18px] lg:bg-transparent lg:flex lg:justify-center lg:items-center'>
                                <h2 className='lg:font-light lg:text-[11.5px]'>Due to covid situation in 2020 the...</h2>
                              </div>
                             {/* font-family: Lexend;
font-weight: 300;
font-style: Light;
font-size: 12px;
leading-trim: NONE;
line-height: 140%;
letter-spacing: 0%;
vertical-align: middle; */}


                            
                              
                            </div>
                          </div>
               </div>
              </section>
               {/* Trending News Section Ends */}
           


          </div>
        </div>

      </div>


    </section>
  )
}

export default Main