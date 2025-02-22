"use client"
import { useChat } from "ai/react"

export default function InternalTool() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-blue-900">Internal Tool for Non-Technical Staff</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Chatbot Interface</h2>
        <div className="space-y-4 h-64 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-md">
          {messages.map((m) => (
            <div key={m.id} className={`p-2 rounded ${m.role === "user" ? "bg-blue-100" : "bg-green-100"}`}>
              {m.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            className="flex-grow p-2 border rounded"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask a question..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Documentation</h2>
        <div className="prose max-w-none">
          {/* Add your documentation text here */}
          <p>Placeholder for documentation text...</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Diagrams</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md">
          {/* Placeholder for diagram. Replace with actual diagram component or image */}
          <div className="flex items-center justify-center text-gray-500">Diagram Placeholder</div>
        </div>
      </div>
    </div>
  )
}

