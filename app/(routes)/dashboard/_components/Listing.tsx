"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import EmptyState from "./EmptyState";
import Link from "next/link";
import { db } from "@/configs/db";
import { AiGeneratedImage } from "@/configs/schema";
import { eq } from "drizzle-orm";
import axios from "axios";
import RoomDesignOutput from "./RoomDesignOutput";

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState<any>([]);

  useEffect(()=> {
    user && GetUserRoomList()
  },[user])

  const GetUserRoomList = async() => {
    const res = await axios.post('/api/getUserRooms', {
      userEmail: user?.primaryEmailAddress?.emailAddress
    })

    console.log(res.data)
    setUserRoomList(res.data)
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
        <Link href={'/dashboard/create-new'} >
          <Button>+ Redesign Room</Button>
        </Link>
        
      </div>

      {userRoomList?.length == 0 
      ? 
      <EmptyState /> : 
      <div>
        <div className="grid grid-cols-2 md:grid-col-2 lg:grid-col-3 gap-10">
          {userRoomList.map((room: any, index:any)=> (
              <RoomDesignOutput key={index} room={room}/>
          ))}
        </div>
      </div>
      }
    </div>
  );
}

export default Listing;
