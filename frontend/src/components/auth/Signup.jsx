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
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const {loading,user} = useSelector(store=>store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally{
            dispatch(setLoading(false));
        }
    }

    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])
    return (
       
        <div>
  <Navbar />
  <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
    <form
      onSubmit={submitHandler}
      className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 border border-gray-300"
    >
      <h1 className="font-bold text-2xl text-gray-800 mb-6">Sign Up</h1>
      <div className="my-4">
        <Label className="block text-sm font-medium text-gray-700">Full Name</Label>
        <Input
          type="text"
          value={input.fullname}
          name="fullname"
          onChange={changeEventHandler}
          placeholder="John Doe"
          className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="my-4">
        <Label className="block text-sm font-medium text-gray-700">Email</Label>
        <Input
          type="email"
          value={input.email}
          name="email"
          onChange={changeEventHandler}
          placeholder="john.doe@example.com"
          className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="my-4">
        <Label className="block text-sm font-medium text-gray-700">Phone Number</Label>
        <Input
          type="text"
          value={input.phoneNumber}
          name="phoneNumber"
          onChange={changeEventHandler}
          placeholder="(123) 456-7890"
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
          placeholder="Enter your password"
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
      <div className="flex items-center gap-4 my-5">
        <Label className="text-sm font-medium text-gray-700">Profile Picture</Label>
        <Input
          accept="image/*"
          type="file"
          onChange={changeFileHandler}
          className="cursor-pointer border border-gray-300 rounded-lg py-2 px-3"
        />
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
          Sign Up
        </Button>
      )}
      <div className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </div>
    </form>
  </div>
</div>

    )
}

export default Signup