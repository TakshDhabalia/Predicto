"use client"

import { useState, useEffect } from "react"
import ProtectedRoute from "../components/ProtectedRoute"

export default function InternalTool() {
  const [iframeUrl, setIframeUrl] = useState("")

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
      <div className="flex h-[calc(100vh-2rem)] space-x-4">
        <div className="flex-1 space-y-8 overflow-y-auto pr-4">
          <h1 className="text-3xl font-bold text-blue-900">Internal Tool for Non-Technical Staff</h1>
          {/* Documentation and Diagram sections remain unchanged */}
        </div>
        <div className="w-[400px] bg-white shadow-md rounded-lg overflow-hidden">
          <iframe className="w-full h-full" src={iframeUrl}></iframe>
        </div>
      </div>
    </ProtectedRoute>
  )
}

