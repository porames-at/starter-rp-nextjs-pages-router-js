"use client";
import { RPConfig } from "@pdf-viewer/react";

function AppProviders({
  children,
  ...props
}) {
  return <RPConfig {...props}>{children}</RPConfig>;
}
export default AppProviders;