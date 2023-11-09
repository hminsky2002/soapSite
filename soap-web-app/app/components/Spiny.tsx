
'use client'
 
import { useRouter } from 'next/navigation'

export default function Spiny() {
  const router = useRouter()
  return (
    <div className="flex h-screen">
      <div className="container m-auto w-full md:w-6/12" onClick={() => router.push('/buy')}>
        <img src="/LOGO-Large.png" className="w-6/12 m-auto " alt="Logo"/>
        <img src="/spinning-magazine.gif" alt="spinning soap mag" />
      </div>
    </div>
  );
}
