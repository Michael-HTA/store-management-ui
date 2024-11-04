import "./globals.css";
import Navigator from "../../components/Navigator";
export const metadata = {
  title: "Store Management",
  description: "Store Management Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-y-hidden overflow-x-auto">
      <div className="flex">
            <div className="flex-none">
               <Navigator></Navigator>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div >
      </body>
    </html >
  );
}
