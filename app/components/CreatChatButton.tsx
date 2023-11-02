'use client'

import { LucideMessageSquarePlus } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";



function CreatChatButton() {

    const router =useRouter();

    const createNewChat =async ()=>{

        // all the cool logics here..

        router.push(`/chat/abc`);
    }

  return (
   <Button variant={"ghost"}><LucideMessageSquarePlus/></Button>
  )
}

export default CreatChatButton;