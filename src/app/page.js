import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='m-4'>Please click the button below, we are under development. 
      <br />
      <Link href="/dashboard">
        <button className='bg-white text-blue-400 py-4 px-4 rounded'>Dashboard</button>
      </Link>
    </div>
  )
}

export default Home