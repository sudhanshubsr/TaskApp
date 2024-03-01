'use client';

import React from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import { useSession } from 'next-auth/react'

const NavbarComponent = () => {
    const { data: session } = useSession()

  return (
    <nav className="flex flex-row items-center justify-end h-16 px-4 backdrop-filter backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-950/50">

      <div className="flex items-center space-x-4">
        {session ? <>
          <Avatar>
            <AvatarImage src={session?.user?.image}/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        </> : 
        <Button variant="outline">Get Started</Button>}
      </div>
    </nav>
  )
}

export default NavbarComponent