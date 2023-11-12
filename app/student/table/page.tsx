'use client';
import { getServerSession } from 'next-auth';
import { options } from "../../api/auth/[...nextauth]/options"
import { useSearchParams,usePathname   } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Table from '../../../components/table'
import { useState, useEffect } from 'react';
export default  function usertable  ({}) {
    const [timetableData, setTimetableData] = useState({});
    const [dataFetched, setDataFetched] = useState(false);
    const user = useSearchParams().get('user')

    

    useEffect(() => {
        async function getstudentCourse(){
            const apiResponse = await fetch('/api/student/course',{
                method: 'POST',
                body: JSON.stringify({account:user})
            })
            const result = await apiResponse.json()
            if(result){
                setDataFetched(true);
                setTimetableData(result);
            }
        }
        if (!dataFetched) {
            getstudentCourse();
        }
        console.log('i fire once');
    }, [dataFetched, user]);



    return <div className="">
                
                <h1>usertable</h1>
                <Table timetableData={timetableData}></Table>
           </div>;
  };
