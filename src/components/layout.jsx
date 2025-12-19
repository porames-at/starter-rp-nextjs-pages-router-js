import { LazyAppProviders } from "./LazyAppProviders";

export default function RootLayout({ children }) {
  return (
    <>
      {/* <html lang="en">
        <body className={"antialiased"}>
        </body>
      </html> */}
      <LazyAppProviders licenseKey="your-license-key">
        <main>{children}</main>
      </LazyAppProviders>
    </>
  );
}
