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
  const [diagrams, setDiagrams] = useState([{ id: 1, content: "Diagram 1" }])
  const [docs, setDocs] = useState([{ id: 1, content: "Documentation point 1" }])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setApiResponse(null);

    const payload = { customer_id: productId, keyword: customerId };
    console.log("Sending request to API with payload:", payload);

    try {
        const response = await fetch("https://ae57-65-2-0-154.ngrok-free.app/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            const errorData = await response.text(); // Log response text for debugging
            throw new Error(`Failed to fetch data from server: ${errorData}`);
        }

        const data = await response.json();
        console.log("Response data:", data);
        setApiResponse(data);
    } catch (err) {
        console.error("Fetch error:", err);
        setError("Error fetching data. Please try again.");
    } finally {
        setLoading(false);
    }
};

  const addDiagram = () => {
    setDiagrams([...diagrams, { id: diagrams.length + 1, content: `Diagram ${diagrams.length + 1}` }])
  }

  const addDoc = () => {
    setDocs([...docs, { id: docs.length + 1, content: `Documentation point ${docs.length + 1}` }])
  }

  return (
    <ProtectedRoute>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-blue-900">Technical Tool for ML Interaction</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">ML Model Inputs</h2>
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  placeholder="Enter Product ID"
                  className="flex-grow p-2 border rounded text-black"
                />
                <input
                  type="text"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                  placeholder="Enter Customer ID"
                  className="flex-grow p-2 border rounded text-black"
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
            {error && <p className="text-red-500">{error}</p>}
            {apiResponse && (
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-semibold">API Response:</h3>
                <pre className="text-sm text-black whitespace-pre-wrap">{JSON.stringify(apiResponse, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Diagrams</h2>
            <button onClick={addDiagram} className="text-blue-500 hover:text-blue-600 transition duration-200">
              <PlusCircle className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            {diagrams.map((diagram) => (
              <div key={diagram.id} className="p-4 bg-gray-100 rounded-md">
                {diagram.content}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Documentation</h2>
            <button onClick={addDoc} className="text-blue-500 hover:text-blue-600 transition duration-200">
              <PlusCircle className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            {docs.map((doc) => (
              <div key={doc.id} className="p-4 bg-gray-100 rounded-md">
                {doc.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
