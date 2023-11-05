'use client';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
export default function clientPage  () {
    const {data:session} = useSession({
        required:true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    });

    return <div className="gap-4 bg-slate-50 h-screen w-screen">
                
                
           </div>;
  };
