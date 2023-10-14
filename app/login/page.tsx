
import { getServerSession } from 'next-auth';
import { getSession ,useSession} from 'next-auth/react'
import Form from './form';
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation';

export default async function LoginPage() {

  const session = await getServerSession(options)

  if (session) {
    const userName = session.user.role;
    console.log(userName);
    redirect('/mainContent');
  }
  return <Form />;
}
