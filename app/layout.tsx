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
          {children}
        </div>
      </body>
    </html>
  );
}