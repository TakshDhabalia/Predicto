"use client"

import { useState, useEffect } from "react"
import ProtectedRoute from "../components/ProtectedRoute"

export default function InternalTool() {
  const [iframeUrl, setIframeUrl] = useState(null)

  useEffect(() => {
    fetch("/api/ayd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(({ url }) => {
        setIframeUrl(url)
      })
  }, [])

  return (
    <ProtectedRoute>
      <div className="flex h-[calc(100vh-2rem)] space-x-6">
        {/* Left Section - Documentation & Images */}
        <div className="flex-1 space-y-8 overflow-y-auto pr-4">
          <h1 className="text-3xl font-bold text-blue-900">Internal Tool for Non-Technical Staff</h1>

          {/* Documentation and Diagram sections remain unchanged */}

          {/* Image Grid */}
          <div className="flex flex-col space-y-4">
  <img 
    src="https://pjzcxlwwmvitfgsprjde.supabase.co/storage/v1/object/public/givingup//best_selling_products.png" 
    alt="Best Selling Products" 
    className="rounded-lg shadow-md w-full h-[300px] object-cover" 
  />
  
  <img 
    src="https://pjzcxlwwmvitfgsprjde.supabase.co/storage/v1/object/public/givingup//discount_vs_profit.png" 
    alt="Discount vs Profit 1" 
    className="rounded-lg shadow-md w-full h-[300px] object-cover" 
  />
  
  <img 
    src="https://pjzcxlwwmvitfgsprjde.supabase.co/storage/v1/object/public/givingup//Frequnt_words_art.png" 
    alt="Discount vs Profit 2" 
    className="rounded-lg shadow-md w-full h-[300px] object-cover" 
  />
</div>

        </div>

        {/* Right Section - Iframe */}
        <div className="w-[400px] bg-white shadow-md rounded-lg overflow-hidden">
          {iframeUrl ? (
            <iframe className="w-full h-full" src={iframeUrl}></iframe>
          ) : (
            <p className="text-center p-4">Loading...</p>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
