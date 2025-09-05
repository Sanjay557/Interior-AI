"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "./_context/UserDetailContext";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    user && createNewUser();
  }, [user]);

  const createNewUser = async () => {
    const result = await axios.post("/api/user");
    setUserDetail(result.data);
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
