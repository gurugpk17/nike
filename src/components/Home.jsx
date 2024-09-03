import React, { useState } from 'react'

export const Home = () => {
    const [image, setImage] = useState("./src/assets/images/2.png");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleImage = (image) => {
        setImage(image);


    }
    return (
        <>

            <div className="sticky top-0 z-20 bg-white ">
                <div className="container mx-auto py-5 px-10 md:px-16">
                    <ul className='flex justify-between items-center'>

                        <div className="">
                            <img src="./src/assets/images/nike.png" alt="Nike Logo" className='w-10' />
                        </div>


                        <div className="hidden sm:flex gap-10 font-semibold text-sm">
                        <li className='hover:text-[#f72c2c] cursor-pointer'><a href="#Home">Home</a></li>
                            <li className='hover:text-[#f72c2c] cursor-pointer'><a href="#Products">Products</a></li>
                            <li className='hover:text-[#f72c2c] cursor-pointer'><a href="#Offers">Offers</a></li>
                            <li className='hover:text-[#f72c2c] cursor-pointer'><a href="#ContactUs">Contact Us</a></li>
                        </div>

                        <div className="hidden sm:block hover:text-[#f72c2c] font-semibold text-sm cursor-pointer">
                        <a href="#signup">Sign Up / Explore now</a>
                        </div>


                        <div className="sm:hidden flex items-center">
                            <button onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#f72c2c]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </ul>

                    {isMenuOpen && (
                        <div className="sm:hidden mt-4">
                            <ul className="flex flex-col gap-4 font-semibold text-sm">
                                <li className='hover:text-[#f72c2c] cursor-pointer'><a href="#Home">Home</a></li>
                                <li className='hover:text-[#f72c2c] cursor-pointer'><a href="#Products">Products</a></li>
                                <li className='hover:text-[#f72c2c] cursor-pointer'><a href="#Offers">Offers</a></li>
                                <li className='hover:text-[#f72c2c] cursor-pointer'><a href="#ContactUs">Contact Us</a></li>
                                <li className='hover:text-[#f72c2c] cursor-pointer'><a href="#signup">Sign Up / Explore now</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-white relative " id="Home">
                <div className="container mx-auto py-5 px-10 md:px-16">
                    <div className="flex flex-wrap">
                        <div className=" w-full lg:w-1/2 ">
                            <h5 className='text-2xl  text-center lg:text-left font-bold my-5 text-red-500'>Our Summer Collections</h5>
                            <h1 className='text-5xl  text-center lg:text-left md:text-7xl  font-extrabold my-7 '>The New Arrival</h1>
                            <h1 className='text-5xl text-center lg:text-left md:text-7xl  font-extrabold my-5'><span className='text-[#f72c2c] mr-2  '>Nike</span>Shoes</h1>
                            <p className='text-md  text-center lg:text-left font-normal mt-10 mb-1'>Discover Stylish Nike arrivals</p>
                            <p className='text-md text-center lg:text-left font-normal mb-5 mt-1'>Quality, Comfort and Innovation for your active life</p>
                            <div className=" flex justify-center lg:justify-start ">
                                <button className='text-md my-5 justify-center  flex items-center text-white hover:text-[#f72c2c]  border-2 hover:bg-transparent hover:border-2 border-[#f72c2c] font-semibold bg-[#f72c2c] px-5 py-2 rounded-full  '>Shop now

                                </button>
                            </div>
                            <div className="flex gap-16 sm:gap-16 items-center justify-center lg:justify-start mt-5">
                                <div className="text-center">
                                    <h1 className='text-xl font-bold my-2 md:text-2xl text-gray-500 font-sans '>1K+</h1>
                                    <span className='text-sm font-medium md:text-md '>Shoes</span>
                                </div>
                                <div className="text-center">
                                    <h1 className='text-xl font-bold my-2 md:text-2xl text-gray-500 font-sans'>150K+</h1>
                                    <span className='text-sm font-medium md:text-md'>Customers </span>
                                </div>
                                <div className="text-center">
                                    <h1 className='text-xl font-bold my-2 md:text-2xl text-gray-500 font-sans '>100+</h1>
                                    <span className='text-sm font-medium md:text-md '>Shops</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2  ">
                            <div className="flex flex-col justify-center items-center">
                                <img src={image} alt="" className=' mt-20 lg:mt-1  relative z-10' />
                                <div className='flex justify-center gap-10 sm: my-20 relative z-10'>
                                    <img src="./src/assets/images/5.png" alt="" className='w-16 p-1 sm:w-20 md:w-28 border shadow-[0px_3px_8px_rgba(0,0,0,0.24)] ' onClick={() => handleImage("./src/assets/images/5.png")} />
                                    <img src="./src/assets/images/3.png" alt="" className='w-16 p-1 sm:w-20 md:w-28 border shadow-[0px_3px_8px_rgba(0,0,0,0.24)]' onClick={() => handleImage("./src/assets/images/3.png")} />
                                    <img src="./src/assets/images/2.png" alt="" className='w-16 p-1 sm:w-20 md:w-28 border shadow-[0px_3px_8px_rgba(0,0,0,0.24)]' onClick={() => handleImage("./src/assets/images/2.png")} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="my-20  " id="Products">
                        <div >
                            <h1 className='text-4xl font-bold my-5 '>Our <span className='text-[#f72c2c]'>Popular</span> Products</h1>
                            <p className='text-md font-normal '>Experience the top-notch quality and style with our sought-after selection. Discover a world of comfort, design and value. </p>
                        </div>
                        <div className=" justify-center justify-items-center grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-10 md:gap-20 my-10 ">
                            <div className=' p-3 '>
                                <img src="./src/assets/images/shoe4.svg" alt="" className='w-96 my-4 ' />
                                <p className='flex items-center font-medium '> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2 text-[#f72c2c] ">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>4.4</p>
                                <h3 className='font-semibold my-2 text-lg'>Nike Air Jordan-01</h3>
                                <span className='font-semibold my-2 text-md text-[#f72c2c]'>$200.20</span>
                            </div>
                            <div className=' p-3'>
                                <img src="./src/assets/images/shoe5.svg" alt="" className='w-96 my-4' />
                                <p className='flex items-center font-medium '> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2 text-[#f72c2c] ">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>4.6</p>
                                <h3 className='font-semibold my-2 text-lg'>Nike Air Jordan-11</h3>
                                <span className='font-semibold my-2 text-md text-[#f72c2c]'>$280.00</span>
                            </div>
                            <div className=' p-3'>
                                <img src="./src/assets/images/shoe6.svg" alt="" className='w-96 my-4' />
                                <p className='flex items-center font-medium '> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2 text-[#f72c2c]  ">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>4.8</p>
                                <h3 className='font-semibold my-2 text-lg'>Nike Air Jordan-22</h3>
                                <span className='font-semibold my-2 text-md text-[#f72c2c]'>$300.50</span>
                            </div>
                            <div className=' p-3'>
                                <img src="./src/assets/images/shoe7.svg" alt="" className='w-96 my-4' />
                                <p className='flex items-center font-medium '> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2 text-[#f72c2c] ">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>4.5</p>
                                <h3 className='font-semibold my-2 text-lg'>Nike Air Jordan-24</h3>
                                <span className='font-semibold my-2 text-md text-[#f72c2c]'>$220.00</span>
                            </div>


                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="  grid grid-cols-1 sm:grid-cols-2 justify-center items-center mt-20 ">
                            <div className=" text-center sm:text-left">
                                <h1 className='text-4xl font-bold mb-10 '>We Provide You <span className='text-[#f72c2c]'>Super Quality</span> Shoes</h1>
                                <p className='leading-10 text-justify '>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience. providing you with unmatched quality, innovation, and a touch of elegance
                                    Our dedication to detail and excellence ensures your satisfaction</p>
                                <div className="flex gap-5  justify-center lg:justify-start">
                                    <button className='text-md my-5 justify-center  flex items-center text-white  font-semibold bg-[#f72c2c] hover:text-[#f72c2c] border-2 hover:bg-transparent hover:border-2 border-[#f72c2c]  px-5 py-2 rounded-full '>View details</button>
                                </div>
                            </div>
                            <div className="flex justify-center sm:justify-end  ">
                                <img src="./src/assets/images/shoe8.svg" alt="" className='w-96' />
                            </div>
                        </div>
                        <div className=" justify-center justify-items-center  grid grid-cols-1  lg:grid-cols-3  my-20">
                            <div className="shadow-[0px_3px_8px_rgba(0,0,0,0.24)] w-full lg:w-72 p-5 my-6 mr-0 lg:mr-32">
                                <div className="  bg-red-500 inline-block p-2 rounded-full">
                                    <img src="./src/assets/images/fast-delivery.png" alt="" className='w-4 ' />
                                </div>
                                <h1 className="font-semibold">Free Shipping</h1>
                                <p className=" font-normal text-sm my-2 text-gray-500">Enjoy seamless shopping with our complimentary shipping service.</p>
                            </div>
                            <div className="shadow-[0px_3px_8px_rgba(0,0,0,0.24)] w-full lg:w-72  my-6 p-5 ">
                                <div className="  bg-red-500 inline-block p-2 rounded-full">
                                    <img src="./src/assets/images/secure-payment.png" alt="" className='w-4 ' />
                                </div>
                                <h1 className="font-semibold">Secure Payment</h1>
                                <p className=" font-normal text-sm my-2 text-gray-500">Experience worry-free transactions with our secure payment options.</p>
                            </div>
                            <div className="shadow-[0px_3px_8px_rgba(0,0,0,0.24)] w-full lg:w-72 p-5 ml-0 my-6 lg:ml-32">
                                <div className="  bg-red-500 inline-block p-2 rounded-full">
                                    <img src="./src/assets/images/heart.png" alt="" className='w-4 ' />
                                </div>
                                <h1 className=" font-semibold">Love to help you</h1>
                                <p className=" font-normal text-sm my-2 text-gray-500">Our dedicated team is here to assist you every step of the way.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center" id='Offers'>
                        <div className="order-2 sm:order-1">
                            <img src="./src/assets/images/offer.svg" alt="" className='w-[600px]' />
                        </div>
                        <div className="order-1 sm:order-2">
                            <div >
                                <h1 className='text-4xl font-bold my-5 '><span className='text-[#f72c2c]'>Special</span> Offer</h1>
                                <p className='leading-10 text-justify'>Embark on a shopping journey that redefines your experience with unbeatable deals From premier selections to incredible savings, we offer unparalleled value that sets us apart.
                                    Navigate a realm of possibilities designed to fulfill your unique desires. surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                            </div>
                            <div className="flex gap-5  justify-center lg:justify-start ">
                                <button className='text-md my-5 justify-center  flex items-center text-white hover:text-[#f72c2c] hover:bg-transparent hover:border-2 border-[#f72c2c] border-2  font-semibold bg-[#f72c2c] px-5 py-1 rounded-full '>Shop now</button>
                                <button className='text-md my-5 justify-center  flex items-center text-gray-400  font-semibold border-2 hover:text-white hover:bg-gray-400 hover:border-2  border-gray-400 px-5 py-1 rounded-full '>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 bg-[#eeeeee] py-5 px-10 md:px-28 w-full">
                    <div className=" max-w-7xl mx-auto text-center px-4 ">
                        <h1 className='text-4xl font-bold my-5 text-black'>What Our <span className='text-[#f72c2c]'>Customers</span> say</h1>
                        <p>Hear genuine storeis from our satisfied customers about their exceptional experiences with us.</p>
                    </div>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center my-10 px-4">
                        <div className="flex flex-col items-center text-center">
                            <img src="./src/assets/images/customer1.jpeg" alt="" className='w-32 rounded-full my-4' />
                            <p className='w-full md:w-96 leading-8 my-1'>The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p>
                            <p className='flex items-center '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2 text-[#f72c2c] ">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>4.5</p>
                            <h3 className=' font-semibold text-md my-2'>John Doe</h3>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src="./src/assets/images/customer2.svg" alt="" className='w-32 rounded-full my-4' />
                            <p className='w-full md:w-96 leading-8 my-1'>The product not only met but exceeded my expectations. I'll definitely be a returning customer!</p>
                            <p className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2 text-[#f72c2c] ">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>4.5</p>
                            <h3 className='font-semibold text-md my-2'>Lolita Jordan</h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full items-center bg-[#bcbcbc] py-20" id='signup'>
                    <div className="my-10">
                        <h1 className='font-bold text-2xl'>Sign Up for <span className='text-[#f72c2c]'>Update</span></h1>
                        <h1 className='font-bold text-2xl'>& Newsletters</h1>
                    </div>
                    <div className=" relative w-full max-w-xs my-10">
                        <input type="text" className='w-full pl-4 pr-16 py-2 border-2 border-gray-800 rounded-full bg-transparent focus:outline-none' />
                        <button className='px-3 py-1.5 bg-[#f72c2c] rounded-full absolute right-1.5 top-1.5  text-white font-semibold text-sm'>Sign Up</button>
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center w-full my-10" id='ContactUs'>
                    <div className="flex flex-col my-5 ">
                        <h1 className='text-xl text-black font-bold my-1'>NIKE</h1>
                        <p className='text-sm text-gray-700 my-1 w-36 lg:w-72'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                        <div className="flex gap-4 my-4">
                            <img src="./src/assets/icons/facebook.svg" alt="" />
                            <img src="./src/assets/icons/twitter.svg" alt="" />
                            <img src="./src/assets/icons/instagram.svg" alt="" />
                        </div>
                    </div>
                    <div className="my-5">
                        <h1 className='font-semibold text-md my-2 '>Products</h1>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>Air Force 1</p>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>Air Max 1</p>
                        <p className='text-sm text-gray-700 hover:text-black my-1' >Air Jordan 1  </p>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>Air Force 2</p>
                        <p className='text-sm text-gray-700 hover:text-black  my-1' >Nike Waffle Racer</p>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>Nike Cortez</p>
                    </div>
                    <div className="my-5">
                        <h1 className='font-semibold text-md my-2'>Help</h1>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>About us</p>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>FAQs</p>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>How it works</p>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>Privacy policy</p>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>Payment policy</p>
                    </div>
                    <div className="my-5">
                        <h1 className='font-semibold text-md my-2'>Get in touch</h1>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>customer@nike.com</p>
                        <p className='text-sm text-gray-700 hover:text-black my-1'>+92554862354</p>

                    </div>
                </div>
            </div>
        </>
    )
}
