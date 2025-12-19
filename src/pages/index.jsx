"use client";
import { LazyAppPdfViewer } from "@/components/LazyAppPdfViewer";
import {useState , useEffect} from "react";
export default function Home() {
  const [ready, setReady] = useState(false);

useEffect(() => {
  const id = setTimeout(() => setReady(true), 2000);
  return () => clearTimeout(id);
}, []);
  return (
    <div className="w-[1028px] h-[700px] mx-auto">
      <h1>RP Starter Toolkit: Nextjs + Pages Router + Javascript</h1>
      <br />
      <h2>Default Toolbar</h2>
      {ready && <LazyAppPdfViewer />}
      <h2>Without Toolbar</h2>
      {ready && <LazyAppPdfViewer showToolbar={false} />}
      <h2>Mobile</h2>
      {ready && <LazyAppPdfViewer defaultLayoutProps={{ style: { width: "500px" } }} />}
    </div>
  )
}