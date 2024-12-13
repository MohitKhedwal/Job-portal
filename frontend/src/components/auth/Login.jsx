import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading,user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])
    return (
        // <div>
        //     <Navbar />
        //     <div className='flex items-center justify-center max-w-7xl mx-auto'>
        //         <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
        //             <h1 className='font-bold text-xl mb-5'>Login</h1>
        //             <div className='my-2'>
        //                 <Label>Email</Label>
        //                 <Input
        //                     type="email"
        //                     value={input.email}
        //                     name="email"
        //                     onChange={changeEventHandler}
        //                     placeholder="patel@gmail.com"
        //                 />
        //             </div>

        //             <div className='my-2'>
        //                 <Label>Password</Label>
        //                 <Input
        //                     type="password"
        //                     value={input.password}
        //                     name="password"
        //                     onChange={changeEventHandler}
        //                     placeholder="patel@gmail.com"
        //                 />
        //             </div>
        //             <div className='flex items-center justify-between'>
        //                 <RadioGroup className="flex items-center gap-4 my-5">
        //                     <div className="flex items-center space-x-2">
        //                         <Input
        //                             type="radio"
        //                             name="role"
        //                             value="student"
        //                             checked={input.role === 'student'}
        //                             onChange={changeEventHandler}
        //                             className="cursor-pointer"
        //                         />
        //                         <Label htmlFor="r1">Student</Label>
        //                     </div>
        //                     <div className="flex items-center space-x-2">
        //                         <Input
        //                             type="radio"
        //                             name="role"
        //                             value="recruiter"
        //                             checked={input.role === 'recruiter'}
        //                             onChange={changeEventHandler}
        //                             className="cursor-pointer"
        //                         />
        //                         <Label htmlFor="r2">Recruiter</Label>
        //                     </div>
        //                 </RadioGroup>
        //             </div>
        //             {
        //                 loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Login</Button>
        //             }
        //             <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
        //         </form>
        //     </div>
        // </div>
        <div>
  <Navbar />
  <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
    <form
      onSubmit={submitHandler}
      className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 border border-gray-300"
    >
      <h1 className="font-bold text-2xl text-gray-800 mb-5">Login</h1>
      <div className="my-4">
        <Label className="block text-sm font-medium text-gray-700">Email</Label>
        <Input
          type="email"
          value={input.email}
          name="email"
          onChange={changeEventHandler}
          placeholder="patel@gmail.com"
          className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="my-4">
        <Label className="block text-sm font-medium text-gray-700">Password</Label>
        <Input
          type="password"
          value={input.password}
          name="password"
          onChange={changeEventHandler}
          placeholder="Your password"
          className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="my-6">
        <RadioGroup className="flex items-center gap-6">
          <div className="flex items-center">
            <Input
              type="radio"
              name="role"
              value="student"
              checked={input.role === 'student'}
              onChange={changeEventHandler}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <Label className="ml-2 text-sm font-medium text-gray-700">Student</Label>
          </div>
          <div className="flex items-center">
            <Input
              type="radio"
              name="role"
              value="recruiter"
              checked={input.role === 'recruiter'}
              onChange={changeEventHandler}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <Label className="ml-2 text-sm font-medium text-gray-700">Recruiter</Label>
          </div>
        </RadioGroup>
      </div>
      {loading ? (
        <Button className="w-full flex justify-center items-center bg-blue-500 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </Button>
      )}
      <div className="mt-4 text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Signup
        </Link>
      </div>
    </form>
  </div>
</div>

    )
}

export default Login