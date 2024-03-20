import "./globals.css";
import Headers from "./components/Headers";


export const metadata = {
  title: "Bloggie",
  description: "This is a blog app created by me (Roshan Khatri)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Headers />
        {children}</body>
    </html>
  )
}