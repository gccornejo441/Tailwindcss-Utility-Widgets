import React, { useState } from "react";
import Navbar from "../components/Settings/Navbar";

const Settings = () => {

  return (
    <div class="my-24">
      <div className="border border-gray-200 bg-gray-50 flex flex-col md:flex md:flex-row max-w-screen-xl mx-auto">
        <Navbar/>
      </div>
    </div>
  );
}



export default Settings;