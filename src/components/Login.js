import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [responseMsg, setResponseMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMsg('');

        try {
            const response = await axios.post('https://fe-test.zojapay.com/api/admin/login', form);
            setResponseMsg('Login successful!');
            console.log(response.data); // You can store the token if needed
        } catch (error) {
            if (error.response) {
                setResponseMsg(error.response.data.message || 'Login failed');
            } else {
                setResponseMsg('Network error');
            }
        } finally {
            setLoading(false);
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
                            <img src='images/Checkbox.png' alt='good' className='lg:mr-2' />
                            <h3 className='lg:font-light lg:text-[18px] lg:text-[#5B6871]'>Track real-time overview of company’s financial performance.</h3>
                        </div>

                        <div className='lg:w-[462px] lg:h-[48px] lg:bg-transparent  lg:mb-4 lg:flex lg:items-center lg:flex-row lg:justify-between'>
                            <img src='images/Checkbox.png' alt='good' className='lg:mr-2' />
                            <h3 className='lg:font-light lg:text-[18px] lg:text-[#5B6871]'>Track created projects budget against actual revenue and expenses.</h3>
                        </div>
                        <div className='lg:w-[488px] lg:h-[75px] lg:bg-transparent  lg:mb-4 lg:flex lg:items-center lg:flex-row lg:justify-between'>
                            <img src='images/Checkbox.png' alt='good' className='lg:mr-2' />
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
                                <div className='lg:w-[329px] lg:h-[59px] lg:bg-  lg:flex lg:flex-col lg:justify-between'>
                                    <div className='lg:w-[249px] lg:h-[24px] lg:bg-transparent lg:flex lg:items-center'>
                                        <h2 className=' lg:font-semibold lg:text-[24px]'>Log in to your account</h2>
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
                                    <form onSubmit={handleLogin} className=" lg:w-[389px] lg:h-[230px] mx-auto lg:mt-4 bg-white rounded">
                                    {/* <form onSubmit={handleLogin} className="p-4 max-w-sm mx-auto lg:mt-[-30px] bg-white shadow-md rounded"> */}
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Seyi@zojatech.com"
                                            className="w-full mb-9 p-2 border border-gray-300 rounded"
                                            required
                                        />

                                        <input
                                            type="password"
                                            name="password"
                                            value={form.password}
                                            onChange={handleChange}
                                            placeholder="........"
                                            className="w-full mb-3 p-2 border border-gray-300 text-[#5B6871] lg:justify-center lg:flex lg:items-center rounded"
                                            required
                                        />

                                        <button
                                            type="submit"
                                            className="w-full bg-[#FF8600] lg:mt-4 text-white py-2 rounded hover:bg-[#ECEDED]"
                                            disabled={loading}
                                        >
                                            {loading ? 'Logging in...' : 'Login'}
                                        </button>

                                        {responseMsg && (
                                            <p className="mt-3 text-center text-sm text-red-600">{responseMsg}</p>
                                        )}
                                    </form>
                                </div>
                            </div>
                            <div className='lg:w-[383px] lg:h-[54px] lg:bg-transparent lg:mt-4 lg:mx-auto'>
                                <h2 className=' lg:font-normal lg:text-[13px]'>By clicking the button above, you agree to our <span className='lg:text-[#FF8600]'>Terms of Service</span> and <span className='lg:text-[#FF8600]'>Privacy Policy</span>.</h2>
                            </div>
                        </div>
                        <div className='lg:w-[220px] lg:h-[32px] lg:bg-transparent lg:flex lg:items-center lg:justify-between'>
                            <h2 className='lg:font-normal lg:text-[14px] lg:text-[#5B6871]'>
                                Already have an account?
                            </h2>
                            <Link to="/register"><h2 className='lg:font-normal lg:text-[14px] lg:text-[#FF8600]'>
                                Register
                            </h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
