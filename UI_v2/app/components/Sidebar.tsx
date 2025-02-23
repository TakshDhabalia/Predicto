"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Cog, Server, LogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Internal Tool", href: "/internal", icon: Users },
  { name: "Technical Tool", href: "/technical", icon: Cog },
  { name: "Server Status", href: "/server-status", icon: Server },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { isAuthenticated, logout } = useAuth()

  return (
    <div className="bg-gradient-to-b from-blue-800 to-indigo-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <span
              className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                pathname === item.href ? "bg-blue-700 shadow-lg" : "hover:bg-blue-700 hover:shadow-md"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </span>
          </Link>
        ))}
      </nav>
      {isAuthenticated && (
        <button
          onClick={logout}
          className="flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:shadow-md w-full mt-auto"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      )}
    </div>
  )
}

