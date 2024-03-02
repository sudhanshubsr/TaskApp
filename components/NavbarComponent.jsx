'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSession, signIn, signOut } from 'next-auth/react';

const NavbarComponent = () => {
  const { data: session } = useSession();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    setIsPopoverOpen(false);
  }, []);

  const handlePopoverToggle = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <nav className="flex flex-row items-center justify-end h-16 px-4 backdrop-filter backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-950/50">
      <div className="flex items-center space-x-4">
        <Popover open={isPopoverOpen} onOpenChange={handlePopoverToggle}>
          <PopoverTrigger onClick={handlePopoverToggle}>
            <Avatar>
              <AvatarImage src={session?.user?.image || '/default-avatar.png'} />
              <AvatarFallback>TA</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent width="23px">
            {session ? (
              <Button variant="outline" className='bg-black text-white' onClick={() => signOut()}>Sign Out</Button>
            ) : (
              <Button variant="outline" className='bg-black text-white' onClick={() => signIn("github")}>Sign In</Button>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default NavbarComponent;
