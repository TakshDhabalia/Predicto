"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [iframeUrl, setIframeUrl] = useState("");

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
        setIframeUrl(url);
      });
  }, []);

  return (
    <main className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="mt-2 text-gray-600">Your content goes here.</p>
      </div>

      {/* Iframe Section */}
      <aside className="w-[390px] h-[390px] border-l border-gray-300 shadow-lg">
        <iframe
          className="w-full h-full"
          style={{ height: "90vh" }}
          src={iframeUrl}
        ></iframe>
      </aside>
    </main>
  );
}
