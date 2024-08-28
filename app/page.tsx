import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNav'
import Grid from '@/components/Grid'


import React from 'react'
import { FaHome } from 'react-icons/fa'
import RecentProjects from '@/components/RecentProjects'
import Clients from '@/components/Clients'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import { navItems } from '@/data'

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
           <Hero />
           <FloatingNav navItems={navItems} />
           <Grid />
           <RecentProjects />
           <Clients />
           <Experience />
           <Footer />
      </div>
    </main>

  )
}

export default Home