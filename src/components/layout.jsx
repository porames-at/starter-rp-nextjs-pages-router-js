"use client";
import { LazyAppProviders } from "./LazyAppProviders";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={"antialiased"}>
          <LazyAppProviders licenseKey="your-license-key">
            <main>{children}</main>
          </LazyAppProviders>
        </body>
      </html>
    </>
  );
}