export const metadata = {
    title: "Counter App",
    description: "Simple counter example",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body style={{ fontFamily: "sans-serif", padding: "2rem" }}>
          {children}
        </body>
      </html>
    );
  }