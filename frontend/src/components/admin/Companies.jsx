import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setSearchCompanyByText(input));
    },[input]);
    return (
         
        <div className="min-h-screen bg-slate-50">
  <Navbar />
  <div className="max-w-6xl mx-auto my-12 px-6">
    {/* Filter and New Company Section */}
    <div className="flex items-center justify-between bg-white p-5 rounded-lg shadow-lg mb-6">
      <Input
        className="w-full md:w-1/3 lg:w-1/4 border border-gray-300 rounded-md p-2"
        placeholder="Filter by name"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        onClick={() => navigate("/admin/companies/create")}
        className="ml-5 bg-[#6A38C2] text-white hover:bg-[#4b2a8d] rounded-md py-2 px-6 transition-colors duration-300"
      >
        New Company
      </Button>
    </div>

    {/* Companies Table */}
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <CompaniesTable />
    </div>
  </div>
</div>

    )
}

export default Companies