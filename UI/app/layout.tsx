import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BMC ML Interface",
  description: "ML model interface for BMC",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'