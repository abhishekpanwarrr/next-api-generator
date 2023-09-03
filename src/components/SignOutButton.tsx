"use client"

import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import { toast } from "./toast";
import Button from "./ui/Button";

interface SignOutButtonProps {
    
}
 
const SignOutButton: FC<SignOutButtonProps> = () => {
    const [isLoading,setIsLoading] = useState(false)

    const signUserOut = async() =>{
        setIsLoading(true)
         try {
            await signOut

         } catch (error) {
            toast({
                title:"Error singing out",
                message:"Please try again later",
                type:"error"
            })
         }
    }

    return <Button onClick={signUserOut} isLoading={isLoading} >Sign Out</Button>
}
 
export default SignOutButton;