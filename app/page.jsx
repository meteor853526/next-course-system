'use client';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();

  const handleLoginButtonClick = () => {
    router.push('./login');
  };
  return (
    <main >
      <h1 className='bg-slate-200'>dashboard</h1>
      <div>
        <button onClick={handleLoginButtonClick}>Go to Login</button>
      </div>
    </main>
  )
}