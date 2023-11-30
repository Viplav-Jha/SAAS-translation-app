"use client";

import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session) return;
    // push a document into firestore db

    setLoading(true);
      
    const docref = await addDoc(collection(db,'customers',session.user.id),{
       price:"price_10098",
       sucess_url:window.location.origin,
       cancle_url:window.location.origin,
    })
   

    // .. strip extension on firebase will create a checkout session

    // redirect user to checkout page
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* If subscribed show me the user is subscribed  */}

      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center font-semibold leading-6
   text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer
  disabled:opacity-80 disabled:cursor-default"
      >
        Sign Up
      </button>
    </div>
  );
}

export default CheckoutButton;
