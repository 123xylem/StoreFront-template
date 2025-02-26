import React from "react";

export default function Content({ children }: { children: React.ReactNode }) {
  return <div className="content-container">{children}</div>;
}
