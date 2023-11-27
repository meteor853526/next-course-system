"use client";

import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';
import { useSession} from 'next-auth/react'
import { options } from "../../api/auth/[...nextauth]/options"
import { useRouter ,redirect } from 'next/navigation';
import { getSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      redirect: false,
      username: formData.get('account'),
      password: formData.get('password'),
    });
    if (response.error) {
      alert('帳號密碼錯誤或使用者不存在')
    }
  };
  if (session) {
    redirect('announcement');
  }
 
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        name="account"
        className="border border-black text-black"
        type="text"
        id="enterForm"
      />
      <input
        name="password"
        className="border border-black  text-black"
        type="password"
        id="enterForm"
      />
      <button type="submit">Login</button>
    </form>
  );
}
