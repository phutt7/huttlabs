import "./globals.css";

export const metadata = {
  title: "Palmer Hutt",
  description: "Embedded & Systems Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">

          {/* NAVIGATION */}
          <nav className="flex justify-between items-center mb-16">
            <div className="font-bold text-lg">
              Palmer Hutt
            </div>

            <div className="flex items-center gap-8 text-sm">
              <a href="#projects" className="hover:opacity-60">
                Projects
              </a>
              <a href="#about" className="hover:opacity-60">
                About
              </a>
              <a href="#skills" className="hover:opacity-60">
                Skills
              </a>
              <a href="#contact" className="hover:opacity-60">
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