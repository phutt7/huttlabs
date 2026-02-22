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
<nav className="flex justify-between items-center mb-16">
  <div className="font-bold text-lg">Palmer Hutt</div>

  <div className="flex gap-8 text-sm">
    <a href="#projects" className="hover:opacity-60">Projects</a>
    <a href="#about" className="hover:opacity-60">About</a>
    <a href="#skills" className="hover:opacity-60">Skills</a>
    <a href="#contact" className="hover:opacity-60">Contact</a>
  </div>
</nav>
          {children}
        </div>
      </body>
    </html>
  );
}