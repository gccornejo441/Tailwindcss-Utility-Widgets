import React, { useState } from "react";
import Link from 'next/link'


const Index = () => {
  return (
    <>
    <ul className="px-10 py-10">
      <li className="text-yellow-100 text-3xl">
        <Link href="/checkout">
          <a>To Checkout</a>
        </Link>
      </li>
      <li className="text-yellow-100 text-3xl">
        <Link href="/settings">
          <a>To Settings</a>
        </Link>
      </li>
    </ul>
    </>
  );
}



export default Index;