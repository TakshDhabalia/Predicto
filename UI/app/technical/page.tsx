"use client"

import type React from "react"
import { useState } from "react"
import { PlusCircle } from "lucide-react"
import ProtectedRoute from "../components/ProtectedRoute"

export default function TechnicalTool() {
  const [productId, setProductId] = useState("")
  const [customerId, setCustomerId] = useState("")
  const [relatedProducts, setRelatedProducts] = useState<string[]>([])
  const [productProbability, setProductProbability] = useState<number | null>(null)
  const [apiResponse, setApiResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [diagramImage, setDiagramImage] = useState("https://pjzcxlwwmvitfgsprjde.supabase.co/storage/v1/object/public/givingup//BMC.drawio.png") // Replace with actual image path

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setApiResponse(null)

    const payload = { customer_id: productId, keyword: customerId }

    try {
      const response = await fetch("https://ae57-65-2-0-154.ngrok-free.app/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.text()
        throw new Error(`Failed to fetch data from server: ${errorData}`)
      }

      const data = await response.json()
      setApiResponse(data)
    } catch (err) {
      console.error("Fetch error:", err)
      setError("Error fetching data. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProtectedRoute>
      <div className="space-y-8 min-h-screen bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-white">Technical Tool for ML Interaction</h1>

        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">ML Model Inputs</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                placeholder="Enter Product ID"
                className="flex-grow p-2 border rounded bg-gray-700 text-white focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter Customer ID"
                className="flex-grow p-2 border rounded bg-gray-700 text-white focus:ring-blue-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {apiResponse && (
            <div className="bg-gray-700 p-4 mt-4 rounded-md text-gray-300">
              <h3 className="font-semibold">API Response:</h3>
              <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(apiResponse, null, 2)}</pre>
            </div>
          )}
        </div>

        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">Diagram</h2>
          <div className="p-4 bg-gray-700 rounded-md flex justify-center">
            <img src={diagramImage} alt="Diagram" className="max-w-full h-auto rounded-md" />
          </div>
        </div>

        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-300">Documentation</h2>
            <button className="text-blue-400 hover:text-blue-500 transition duration-200">
              <PlusCircle className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-700 text-white rounded-md">Documentation point 1</div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
