
"use client"

import { userDelete } from "@/logic/delete";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export const Dashboard = () => {

        const [user, setUser] = useState();

        const router = useRouter();

        function toSetting () {

            router.push('/setting')

        }

        function logOut () {

            localStorage.clear()
    
            router.push('/login');

        }
        
        useEffect(()=> {
            
            const user = JSON.parse(localStorage.getItem("user"));

            console.log(user?.attachment)

            if ( user ) {
    
                setUser(user)

    
            } else {

                router.push('/login')

            }
            
        },[])

  return (
    <div className="flex items-center justify-center border border-1 p-5 rounded-lg">
  <div className="text-center space-y-5">
    <div>
      <Image src={user?.attachment} width={100} height={100} className="mx-auto" />
    </div>
    <div className="text-center space-y-2">
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
    <div className="flex space-x-4 justify-center">
      <button onClick={() => userDelete(user?._id, router)} className="bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white p-2">
        Delete Account
      </button>
      <button onClick={toSetting} className="bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white p-2">
        Edit
      </button>
    </div>
    <div><button onClick={logOut} className="bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white p-2">Logout</button></div>
  </div>
</div>

  )

}
