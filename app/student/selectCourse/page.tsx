'use client';
import { useSearchParams} from 'next/navigation';
import Courselist from '../../../components/courselist'
import Timetable from '../../../components/table'
import { useState, useEffect } from 'react';
export default  function UserSelectCourseTble  () {
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
            if(result) {
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
                {/* <Courselist></Courselist>
                <Timetable timetableData={timetableData} ></Timetable> */}
                <h1>沒東西</h1>
           </div>;
  };
