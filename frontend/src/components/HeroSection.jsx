import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        // <div className='text-center'>
        //     <div className='flex flex-col gap-5 my-10'>
        //         <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
        //         <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
        //         <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
        //             <input
        //                 type="text"
        //                 placeholder='Find your dream jobs'
        //                 onChange={(e) => setQuery(e.target.value)}
        //                 className='outline-none border-none w-full'

        //             />
        //             <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
        //                 <Search className='h-5 w-5' />
        //             </Button>
        //         </div>
        //     </div>
        // </div>
        <div className='text-center'>
  <div className='flex flex-col gap-6 my-16'>
    <span className='mx-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#F83002] to-[#FF7A00] text-white font-medium'>
      No. 1 Hiring Website
    </span>
    <h1 className='text-4xl sm:text-5xl font-bold text-gray-900'>
      Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
    </h1>
    <p className='text-lg sm:text-xl text-gray-600 mt-4'>
      Find your perfect job with ease, browse through opportunities that match your skills and aspirations!
    </p>
    <div className='flex w-full sm:w-[50%] lg:w-[40%] shadow-2xl border border-gray-200 rounded-full items-center gap-4 mx-auto mt-6'>
      <input
        type="text"
        placeholder='Find your dream jobs'
        onChange={(e) => setQuery(e.target.value)}
        className='outline-none border-none w-full rounded-l-full px-4 py-3 text-gray-800'
      />
      <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] text-white p-3">
        <Search className='h-5 w-5' />
      </Button>
    </div>
  </div>
</div>

    )
}

export default HeroSection