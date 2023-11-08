"use client";
import { getServerSession } from 'next-auth';
import { getSession ,useSession} from 'next-auth/react'
import Form from './form';
import { options } from "../../api/auth/[...nextauth]/options"
import { useRouter ,redirect } from 'next/navigation';

export default  function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    redirect('announcement');
  }
  return <Form />;
}
