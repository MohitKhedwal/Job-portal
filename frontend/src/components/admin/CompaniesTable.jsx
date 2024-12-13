import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();
    useEffect(()=>{
        const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
            if(!searchCompanyByText){
                return true
            };
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

        });
        setFilterCompany(filteredCompany);
    },[companies,searchCompanyByText])
    return (
        // <div>
        //     <Table>
        //         <TableCaption>A list of your recent registered companies</TableCaption>
        //         <TableHeader>
        //             <TableRow>
        //                 <TableHead>Logo</TableHead>
        //                 <TableHead>Name</TableHead>
        //                 <TableHead>Date</TableHead>
        //                 <TableHead className="text-right">Action</TableHead>
        //             </TableRow>
        //         </TableHeader>
        //         <TableBody>
        //             {
        //                 filterCompany?.map((company) => (
        //                     <tr>
        //                         <TableCell>
        //                             <Avatar>
        //                                 <AvatarImage src={company.logo}/>
        //                             </Avatar>
        //                         </TableCell>
        //                         <TableCell>{company.name}</TableCell>
        //                         <TableCell>{company.createdAt.split("T")[0]}</TableCell>
        //                         <TableCell className="text-right cursor-pointer">
        //                             <Popover>
        //                                 <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
        //                                 <PopoverContent className="w-32">
        //                                     <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
        //                                         <Edit2 className='w-4' />
        //                                         <span>Edit</span>
        //                                     </div>
        //                                 </PopoverContent>
        //                             </Popover>
        //                         </TableCell>
        //                     </tr>

        //                 ))
        //             }
        //         </TableBody>
        //     </Table>
        // </div>
        <div className="overflow-x-auto">
  <Table className="min-w-full bg-white rounded-lg shadow-md">
    <TableCaption className="text-lg font-semibold text-[#6A38C2]">A list of your recently registered companies</TableCaption>
    <TableHeader className="bg-[#F4F4F4]">
      <TableRow>
        <TableHead className="text-left">Logo</TableHead>
        <TableHead className="text-left">Name</TableHead>
        <TableHead className="text-left">Date</TableHead>
        <TableHead className="text-right">Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {filterCompany?.map((company) => (
        <tr key={company._id} className="hover:bg-gray-100 cursor-pointer transition-all duration-200">
          <TableCell className="p-3">
            <Avatar>
              <AvatarImage src={company.logo} className="w-10 h-10 rounded-full" />
            </Avatar>
          </TableCell>
          <TableCell className="text-sm font-medium">{company.name}</TableCell>
          <TableCell className="text-sm text-gray-500">{company.createdAt.split("T")[0]}</TableCell>
          <TableCell className="text-right">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal className="text-gray-600 hover:text-[#6A38C2] transition-colors duration-200" />
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div
                  onClick={() => navigate(`/admin/companies/${company._id}`)}
                  className="flex items-center gap-2 w-full cursor-pointer p-2 hover:bg-[#F4F4F4] rounded-md transition-colors duration-200"
                >
                  <Edit2 className="w-4 text-[#6A38C2]" />
                  <span className="text-sm text-[#6A38C2]">Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </tr>
      ))}
    </TableBody>
  </Table>
</div>

    )
}

export default CompaniesTable