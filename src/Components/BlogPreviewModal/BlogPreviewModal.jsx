import React from 'react'
import Header from '../../Components/Header/Header'
import AIImg from "../../assets/Images/Rectangle 200.png"
import dp from "../../assets/Images/Ellipse 26.png"

const BlogPreviewModal = ({ genre, title, authorName, dateOfPublish, contentOne ,finalImage }) => {
  return (
    <>
   <div className='min-h-screen '>
    <Header />
    <div className='hidden md:block md:min-h-screen  md:mx-28 lg:min-h-screen md:py-4 lg:mx-48 xl:mx-64 lg:py-4 xl:py-10'>
     <div className='xl:min-h-[10rem] lg:min-h-[7rem] flex flex-col items-center justify-center'>
        <p className='text-krutNeon font-bold md:text-sm lg:text-xl'>{genre}</p>
        <h1 className='text-white md:text-[28px] lg:text-[36px] xl:text-[46px] 2xl:text-[56px] font-bold mt-2'>{title}</h1>
     </div>

    <div className=' lg:min-h-[25rem]  xl:mt-12 md:py-8 lg:py-10  flex items-center justify-center'>
        <div className='w-[77%]'>
            <img className='w-full' src={AIImg} alt="" />
        </div>
        <div className='w-[23%] flex flex-col mx-4'>
            <div className=' border-krutNeon  border border-opacity-30 md:min-h-[3rem] lg:min-h-[4rem] xl:min-h-[6rem] 2xl:min-h-[8rem] md:rounded-xl lg:rounded-3xl flex items-center justify-center'>
                <div>
                    <img className='rounded-full md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 2xl:w-24 2xl:h-24  xl:h-16' src={finalImage ? finalImage:dp} alt="" /> 
                </div>
                <div className='text-center text-white md:text-[8px] lg:text-[10px] xl:text-xs 2xl:text-lg font-medium mx-2'>
                     <h1>{authorName}</h1>
                     <p>{dateOfPublish}</p>
                </div>
            </div>
            <div className='border border-krutNeon border-opacity-30 md:min-h-[6rem] lg:min-h-[8rem] xl:min-h-[12rem] mt-4 md:rounded-xl lg:rounded-3xl flex flex-col justify-center items-center'>
                <div>
                   <h1 className='text-white text-center md:text-[10px] lg:text-[10px] xl:text-[16px] 2xl:text-lg'>Share this Article</h1>
                   <div>
                   <div className="flex justify-center items-center mt-2">
                        <div className="flex xl:space-x-6  md:space-x-2">
                            <a href="http://discord.com" target="_blank">
                                <img className='md:h-2 lg:h-4' src="/icons/discord.png" alt="discord" />
                            </a>
                            <a href="http://linkedin.com" target="_blank">
                                <img className='md:h-2 lg:h-4' src="/icons/linkedIn.png" alt="linkedIn" />
                            </a>
                            <a href="http://instagram.com" target="_blank">
                                <img className='md:h-2 lg:h-4' src="/icons/instagram.png" alt="instagram" />
                            </a>
                            <a href="http://x.com" target="_blank">
                                <img className='md:h-2 lg:h-4' src="/icons/x.png" alt="x" />
                            </a>
                        </div>
                    </div>

                   </div>
                </div>
                <div className='text-white text-xs lg:text-sm 2xl:text-xl md:mt-2 lg:mt-4 2xl:mt-5 text-center'>
                    <h1 className='text-xs md:text-[10px] lg:text-sm'>Get Started For Free</h1>
                    <button className='rounded-full px-4 mt-2 2xl:mt-3 md:text-xs lg:text-sm text-black font-semibold' style={{ background: 'linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)' }} >Try Krut AI</button>
                </div>
            </div>
        </div>
    </div>

    <div className=' min-h-[25rem] mt-4 xl:mt-16'>
       <h2 className='text-white font-light md:text-[14px] lg:text-[18px] xl:text-lg 2xl:text-2xl'>
       {contentOne}
       </h2>
    </div>

</div>
</div>
    </>
  )
}

export default BlogPreviewModal