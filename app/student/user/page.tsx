'use client';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { options } from "../../api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation';

interface user{
    role: string,
    account: string
}
export default  function userPage  () {
    const { data: session } = useSession();

    if(!session)return 
    const getUserData = async () => {
        await fetch('/api/student',{
            method: 'POST',
            body: JSON.stringify({account:session?.user?.account})
        })
    }
 
    console.log(session?.user?.account)
    return <div className="gap-4 bg-slate-50 h-screen w-screen"> 
                <h1>userpage:{session?.user?.account}</h1>
                <button onClick={getUserData}>make call</button>
            </div>;
    

  };
