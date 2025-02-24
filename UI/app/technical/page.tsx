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
  const [diagramImage, setDiagramImage] = useState("https://pjzcxlwwmvitfgsprjde.supabase.co/storage/v1/object/public/givingup//BMC.drawio.png") 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setApiResponse(null)

    const payload = { customer_id: productId, keyword: customerId }

    try {
      const response = await fetch("https://e742-65-2-0-154.ngrok-free.app/predict", {
        method: "POST",
        mode: "no-cors", 
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
                placeholder="Enter Customer ID"
                className="flex-grow p-2 border rounded bg-gray-700 text-white focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter Keyword"
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
          <div className="p-4 bg-white rounded-md flex justify-center">
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
          <div className="p-6 bg-gray-700 text-white rounded-lg space-y-6">
  <h2 className="text-2xl font-bold">Machine Learning Models</h2>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Model 1: Product Association & Recommendation (Recommender Model)</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Uses <span className="font-semibold">TF-IDF Vectorization</span> and <span className="font-semibold">Cosine Similarity</span> to determine product relationships.</li>
      <li>Extracts product details from a JSON dataset to form a text-based representation of each product.</li>
      <li>Identifies related products frequently bought together or having strong feature-based similarities.</li>
      <li>Outputs a ranked list of related products for a given input product.</li>
    </ul>
    <p className="italic">Example: If the input product is "Office Desk," recommendations might include "Office Chair," "Table Lamp," and "Bookshelf" based on historical co-occurrences and textual similarities.</p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Model 2: Customer-Specific Purchase Probability (Predictive Model)</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Uses transaction history, product associations, and customer profiles from the structured database.</li>
      <li>Encodes textual product features using <span className="font-semibold">TF-IDF</span>.</li>
      <li>Applies <span className="font-semibold">Label Encoding</span> and <span className="font-semibold">Standard Scaling</span> for categorical features.</li>
      <li>Computes <span className="font-semibold">Cosine Similarity</span> & <span className="font-semibold">Cosine Distance</span> between purchase history and recommended products.</li>
      <li>Uses <span className="font-semibold">Random Forest</span> & <span className="font-semibold">XGBoost</span> classifiers to predict purchase probability.</li>
      <li>Outputs a probability score for each product recommendation.</li>
    </ul>
    <p className="italic">If a product has a high probability score for a customer, it is prioritized in recommendations.</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
