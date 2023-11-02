
import Link from 'next/link'
import React from 'react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';


import Image from 'next/image';
import LogoImage from "@logos/chat.png"


function Logo() {
  return <Link href='/' prefetch={false} className='overflow-hidden'>
    <div className='flex  w-72 h-14'>
      <AspectRatio
      ratio={16/9}
      className='flex items-center justify-center'>
       <Image 
         priority={false}
         src={LogoImage}
         alt="AnyChat"
         className='dark:filter dark:invert'
       
       />
      </AspectRatio>
      
    </div>
  </Link>
}

export default Logo