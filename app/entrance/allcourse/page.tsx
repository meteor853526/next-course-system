'use client';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
export default function AllCoursePage  () {
    // const {data:session} = useSession({
    //     required:true,
    //     onUnauthenticated() {
    //         redirect('/api/auth/signin?callbackUrl=/client')
    //     }
    // });
    // console.log(session)
    return <div className="">
                
                <h1>coursepage</h1>
           </div>;
  };
