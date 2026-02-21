import type { ReactNode } from "react";

export const metadata = {
  title: "Palmer Hutt | Embedded & Systems Engineer",
  description: "Embedded & Systems Engineer delivering customer-facing technical solutions.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#0f172a",
          color: "#e2e8f0",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>Palmer Hutt</div>
            <div>
              <a href="/" style={{ marginRight: "20px", color: "#e2e8f0" }}>
                Home
              </a>
              <a href="/projects" style={{ marginRight: "20px", color: "#e2e8f0" }}>
                Projects
              </a>
              <a href="/about" style={{ marginRight: "20px", color: "#e2e8f0" }}>
                About
              </a>
              <a href="/contact" style={{ color: "#e2e8f0" }}>
                Contact
              </a>
            </div>
          </nav>

          {children}
        </div>
      </body>
    </html>
  );
}