import "./globals.css";
import Navigator from "../../components/Navigator";

export const metadata = {
  title: "Store Management",
  description: "Store Management Application",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 left-0 h-screen">
          <Navigator></Navigator>
        </div>
        <div className="absolute top-0 left-60 bg-slate-100 h-full">
          {children}
        </div>
      </body>
    </html >
  );
}
