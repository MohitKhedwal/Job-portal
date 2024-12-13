import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        // <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        //     <div>
                
        //         <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        //         <p className='text-sm text-gray-500'>India</p>
        //     </div>
        //     <div>
        //         <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        //         <p className='text-sm text-gray-600'>{job?.description}</p>
        //     </div>
        //     <div className='flex items-center gap-2 mt-4'>
        //         <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
        //         <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
        //         <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
                
        //     </div>

        // </div>
        <div
        onClick={() => navigate(`/description/${job._id}`)}
        className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#f7fafc] via-[#e4e9f2] to-[#ffffff] border border-gray-200 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div className="mb-4">
          <h1 className="font-medium text-xl text-gray-800">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
  
        <div className="my-4">
          <h1 className="font-bold text-2xl text-gray-900">{job?.title}</h1>
          <p className="text-sm text-gray-700 mt-2">{job?.description}</p>
        </div>
  
        <div className="flex items-center gap-3 mt-4">
          <Badge className="text-blue-700 font-bold px-4 py-2 rounded-full" variant="ghost">
            {job?.position} Positions
          </Badge>
          <Badge className="text-[#F83002] font-bold px-4 py-2 rounded-full" variant="ghost">
            {job?.jobType}
          </Badge>
          <Badge className="text-[#7209b7] font-bold px-4 py-2 rounded-full" variant="ghost">
            {job?.salary} LPA
          </Badge>
        </div>
      </div>
    )
}

export default LatestJobCards