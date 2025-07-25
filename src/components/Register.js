import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://fe-test.zojapay.com/api/admin/register', form, {
        headers: {
          Accept: 'application/json',
        },
      });
      setResponseMsg(res.data.message || 'Registered successfully!');
      // Save the token to localStorage if needed
      localStorage.setItem('token', res.data.data.token);
    } catch (error) {
      setResponseMsg(error.response?.data?.message || 'Registration failed');
    }
  };
  return (
    <section className="w-full lg:h-[585px] lg:bg-green-200 lg:flex lg:flex-row lg:justify-center lg:items-center">
    <div className='lg:w-[690px] lg:h-[585px] lg:bg-[#FFFFFF] lg:p-16'>
        <div className='lg:w-[120px] lg:h-[36px] lg:bg-transparent'>
           <img src="/images/buddy.png" alt="Company logo" className="mx-auto" />
        </div>
        <div className='lg:w-[488px] lg:h-[371px]  lg:bg-transparent lg:mt-20'>
          <div className='lg:w-[488px] lg:h-[248px] lg:bg-transparent'>
            <div className='lg:w-[462px] lg:h-[48px] lg:bg-transparent  lg:mb-4 lg:flex lg:items-center lg:flex-row lg:justify-between'>
              <img src='images/Checkbox.png'  alt='good' className='lg:mr-2'/>
             <h3 className='lg:font-light lg:text-[18px] lg:text-[#5B6871]'>Track real-time overview of company’s financial performance.</h3>
            </div>

            <div className='lg:w-[462px] lg:h-[48px] lg:bg-transparent  lg:mb-4 lg:flex lg:items-center lg:flex-row lg:justify-between'>
              <img src='images/Checkbox.png'  alt='good' className='lg:mr-2'/>
             <h3 className='lg:font-light lg:text-[18px] lg:text-[#5B6871]'>Track created projects budget against actual revenue and expenses.</h3>
            </div>
{/* width: 488.44122314453125;
height: 75.18095397949219;
angle: 0 deg;
opacity: 1;
gap: 16px; */}

            <div className='lg:w-[488px] lg:h-[75px] lg:bg-transparent  lg:mb-4 lg:flex lg:items-center lg:flex-row lg:justify-between'>
              <img src='images/Checkbox.png'  alt='good' className='lg:mr-2'/>
             <h3 className='lg:font-light lg:text-[18px] lg:text-[#5B6871]'>Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.</h3>
            </div>

            

            </div>

        </div>
    </div>

    <div className='lg:w-[710px] lg:h-[585px] lg:bg-[#F8FAFC] lg:flex lg:justify-center lg:items-center '>
       <div className='lg:w-[489px] lg:h-[502px] lg:rounded-md lg:p-[50px] lg:bg-[#FFFFFF] lg:border-[1px]'>
        <div className='lg:w-[389px] lg:h-[410px] lg:bg-transparent'>
           <div className='lg:w-[389px] lg:h-[376px] lg:bg-transparent'>
           <div className='lg:w-[389px] lg:h-[289px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between'>
             <div className='lg:w-[329px] lg:h-[59px] lg:bg-transparent  lg:flex lg:flex-col lg:justify-between'>
                <div className='lg:w-[244px] lg:h-[24px] lg:bg-transparent lg:flex lg:items-center'>
                    <h2 className=' lg:font-semibold lg:text-[24px]'>Register your account</h2> 
                    </div>
                    <div className='lg:w-[329px] lg:h-[27px] lg:bg-transparent lg:pt-[4px] lg:pr-[4px] lg:pb-[4px] lg:flex lg:items-center'>
                      <h3 className='lg:font-light lg:text-[13px] lg:text-[#5B6871]'>
                        Proceed to create account and setup your organization              
                        </h3> 

                    </div>

</div>

{/* text */}
{/* <div className="max-w-md mx-auto p-4"> */}
<div className="">
      <form onSubmit={handleSubmit} className="space-y-3 lg:outline-none">
        <div className='lg:flex lg:h-[40px] lg:flex-row lg:justify-between lg:mx-auto lg:items-center lg:bg-yellow-transparent'>
          <img src='/images/user.png' alt='user' className='lg:relative lg:mt-0 lg:ml-4 lg:z-10' />
 <input
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
          // className="border p-2 w-full"
          className='lg:w-[185px] lg:h-[40px] lg:outline-none lg:absolute lg:text-center lg:bg-transparrent lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4]'
          required
        />

        <div>
            
            <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={handleChange}
          className='lg:w-[185px] lg:h-[40px] lg:bg-[#FFFFFF] lg:outline-none lg:text-center lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4]'
          required
        />
        </div>
        
        </div>
         <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="lg:w-[389px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4] pl-3"
          required
        />

        <input
  type="password"
  name="password"
  placeholder="Password"
  onChange={handleChange}
  className="lg:w-[389px] lg:h-[40px] lg:font-normal lg:text-[14px] lg:outline-none lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4] pl-3"
  required/>
        <div className='lg:w-[389px] lg:-[40px] lg:flex lg:mx-auto lg:flex-row lg:justify-between lg:items-center'>
           <button type="submit" className="bg-[#FF8600] text-white px-4 py-2 lg:w-[389px] lg:h-[40px] lg:font-normal lg:text-[14px]
            lg:rounded-md lg:border-[1px] lg:border-[#DDE2E4] pl-3">
          Create account
        </button>

        {/* <Link to="/login">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
        </Link> */}
        </div>
       
      </form>
      {responseMsg && <p className="mt-4">{responseMsg}</p>}
    </div>


{/* text ends */}

            </div>
            <div className='lg:w-[383px] lg:h-[54px] lg:bg-transparent lg:mt-4 lg:mx-auto'>
              <h2 className=' lg:font-normal lg:text-[13px]'>By clicking the button above, you agree to our <span className='lg:text-[#FF8600]'>Terms of Service</span> and <span className='lg:text-[#FF8600]'>Privacy Policy</span>.</h2>
            </div>
            </div>
            <div className='lg:w-[205px] lg:h-[32px] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
               <h2 className='lg:font-normal lg:text-[14px] lg:text-[#5B6871]'>
            Already have an account?
</h2>
<Link to="/login"><h2 className='lg:font-normal lg:text-[14px] lg:text-[#FF8600]'>
           Login
</h2>
</Link>
            </div>
         
            </div>
        </div>
    </div>
    </section> 
  )
}
export default Register 

