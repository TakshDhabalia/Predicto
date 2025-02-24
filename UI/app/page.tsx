export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-blue-900">Welcome to BMC Predicto</h1>

      {/* Documentation Section */}
      <div className="bg-deepblue shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-black">Documentation</h2>
        <div className="prose max-w-none text-black">
          <h3 className="text-lg font-semibold">Introduction</h3>
          <p>
            Our product leverages Machine Learning to help the Marketing department personalize 
            company websites by predicting the probability of a customer purchasing a relevant product. 
            By analyzing past transactions, our solution enhances customer experience and drives sales 
            by recommending relevant products.
          </p>

          <h3 className="text-lg font-semibold mt-4">Problem Statement</h3>
          <p>
            The Marketing team wants to contextualize the website for customers by showcasing viable 
            products they are likely to purchase. The goal is to build an ML model that predicts the 
            likelihood of a customer buying a relevant product based on their purchase history.
          </p>

          <h3 className="text-lg font-semibold mt-4">Motivation</h3>
          <ul className="list-disc ml-6">
            <li>Increase sales conversions by targeting customers effectively.</li>
            <li>Optimize marketing campaigns through data-driven decision-making.</li>
            <li>Improve customer experience through personalized recommendations.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Key Features</h3>
          <ul className="list-disc ml-6">
            <li>Website integration</li>
            <li>Multi-level dashboard</li>
            <li>Chatbot support for non-technical staff</li>
            <li>User-friendly interface</li>
          </ul>
        </div>
      </div>

      {/* Consumer-Facing Interface Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Consumer-Facing Interface</h2>
        <p className="text-gray-600">
          This is where users can interact with our ML model.
        </p>
        <img 
    src="https://pjzcxlwwmvitfgsprjde.supabase.co/storage/v1/object/public/givingup//sequence_diag.jpg" 
    alt="ML Model Interaction" 
    className="mt-4 w-full h-auto rounded-lg"
          />
        {/* Add ML model interaction components here */}
      </div>
    </div>
  )
}
