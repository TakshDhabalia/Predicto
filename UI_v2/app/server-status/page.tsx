"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Server, Database, Bot, Globe } from "lucide-react"
import ProtectedRoute from "../components/ProtectedRoute"

type StatusType = "up" | "down" | "warning"

interface ServiceStatus {
  name: string
  status: StatusType
  icon: React.ElementType
}

const statusColors = {
  up: "bg-green-500",
  down: "bg-red-500",
  warning: "bg-yellow-500",
}

export default function ServerStatus() {
  const [services, setServices] = useState<ServiceStatus[]>([
    { name: "EC2 Instance 1", status: "up", icon: Server },
    { name: "EC2 Instance 2", status: "up", icon: Server },
    { name: "Supabase DB", status: "up", icon: Database },
    { name: "Chatbot", status: "up", icon: Bot },
    { name: "Entire Application", status: "up", icon: Globe },
  ])

  // Simulating status changes
  useEffect(() => {
    const interval = setInterval(() => {
      setServices((prevServices) =>
        prevServices.map((service) => ({
          ...service,
          status: Math.random() > 0.8 ? (["down", "warning"][Math.floor(Math.random() * 2)] as StatusType) : "up",
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ProtectedRoute>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-blue-900">Server Status</h1>
        <div className="bg-black shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                <div className={`p-2 rounded-full ${statusColors[service.status]}`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-white">
                  <p className="font-semibold">{service.name}</p>
                  <p className="text-sm capitalize">{service.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Documentation and Diagram sections remain unchanged */}
      </div>
    </ProtectedRoute>
  )
}

