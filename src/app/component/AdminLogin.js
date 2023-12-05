import React, { useState } from "react";

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen w-full ">
      <h3 className="font-bold text-xl">Admin Dashboard</h3>
      <form className=" flex flex-col gap-6 w-1/3 my-0 mx-auto justify-center ">
        <div className="flex flex-col justify-center">
          <input
            type="name"
            // value={name}
            onChange={(e) => {
              setName(e);
            }}
            className="border p-3"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="password"
            // value={password}
            onChange={(e) => {
              setPassword(e);
            }}
            className="border p-3"
            placeholder="password"
          />
        </div>
        <button className="bg-[#008080] text-white py-3">Sign In</button>
        <div className="text-center">
          <p className="text-[#FF3000] text-sm">Wrong Credentials!</p>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
