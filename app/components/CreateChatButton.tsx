'use client'

import { LucideMessageSquarePlus } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";



function CreateChatButton() {

    const router =useRouter();

    const createNewChat =async ()=>{

        // all the cool logics here..

        router.push(`/chat/abc`);
    }

  return (
   <Button className='text-black dark:text-white' variant={"ghost"}><LucideMessageSquarePlus/></Button>
  )
}

export default CreateChatButton;