import { useState, useEffect } from 'react';
import IsLogged from './IsLogged';
import NotLogged from './NotLogged';

export default function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  return (
    <div className='relative h-screen lg:min-w-56 lg:w-1/5 box-border block text-[#efeff1] text-[13px] font-medium flex-col bg-zinc-800 items-center md:justify-center pl-1 pr-[6px] sm:mr-2'>
      {isLoggedIn ? <IsLogged /> : <NotLogged />}
    </div>
  )
}