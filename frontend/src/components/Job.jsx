import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Job = ({job}) => {
    // const saveForLater = async (jobId) => {
    //     try {
    //         const response = await axios.post('/api/save-job', { userId: 'USER_ID', jobId });
    //         alert(response.data.message);
    //     } catch (error) {
    //         console.error(error);
    //         alert('Failed to save the job.');
    //     }
    // };
    const navigate = useNavigate();
   

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    
    return (
       

<div className='p-6 rounded-2xl shadow-lg bg-slate-200 hover:scale-105 transform transition-all'>
  <div className='flex items-center justify-between'>
    <p className='text-sm text-gray-600 opacity-80'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
  </div>

  <div className='flex items-center gap-6 my-4'>
    <Button className="p-2" variant="outline" size="icon">
      <Avatar>
        <AvatarImage className="rounded-full border-4 border-white" src={job?.company?.logo} />
      </Avatar>
    </Button>
    <div className="text-gray-800">
      <h1 className='font-bold text-2xl'>{job?.company?.name}</h1>
      <p className='text-sm text-gray-500 opacity-90'>India</p>
    </div>
  </div>

  <div>
    <h1 className='font-semibold text-2xl my-3 text-gray-900'>{job?.title}</h1>
    <p className='text-sm text-gray-700'>{job?.description}</p>
  </div>

  <div className='flex items-center gap-4 mt-4'>
    <Badge className={'text-blue-700 font-medium bg-white p-2 rounded-full shadow-md'} variant="ghost">{job?.position} Positions</Badge>
    <Badge className={'text-[#F83002] font-medium bg-white p-2 rounded-full shadow-md'} variant="ghost">{job?.jobType}</Badge>
    <Badge className={'text-[#7209b7] font-medium bg-white p-2 rounded-full shadow-md'} variant="ghost">{job?.salary} LPA</Badge>
  </div>

  <div className='flex items-center gap-6 mt-6'>
    <Button 
      onClick={() => navigate(`/description/${job?._id}`)} 
      className="bg-[#6A38C2] text-white hover:bg-[#4b2a8d] hover:scale-105 transform transition-all duration-200 rounded-xl px-8 py-3 shadow-xl">
      View Details
    </Button>
    {/* <Button onClick={() => saveForLater(job?._id)} >Save For Later</Button> */}
  </div>
</div>


    )
}

export default Job