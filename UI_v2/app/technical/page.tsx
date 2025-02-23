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
  const [diagrams, setDiagrams] = useState([{ id: 1, content: "Diagram 1" }])
  const [docs, setDocs] = useState([{ id: 1, content: "Documentation point 1" }])

  const handleProductIdSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulating API call
    setRelatedProducts(["Product A", "Product B", "Product C"])
  }

  const handleCustomerIdSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulating API call
    setProductProbability(Math.random())
  }

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
            <form onSubmit={handleProductIdSubmit} className="flex space-x-2">
              <input
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                placeholder="Enter Product ID"
                className="flex-grow p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Get Related Products
              </button>
            </form>
            {relatedProducts.length > 0 && (
              <div>
                <h3 className="font-semibold">Related Products:</h3>
                <ul className="list-disc list-inside">
                  {relatedProducts.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </div>
            )}
            <form onSubmit={handleCustomerIdSubmit} className="flex space-x-2">
              <input
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter Customer ID"
                className="flex-grow p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Get Product Probability
              </button>
            </form>
            {productProbability !== null && (
              <div>
                <h3 className="font-semibold">Product Probability:</h3>
                <p>{(productProbability * 100).toFixed(2)}%</p>
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

