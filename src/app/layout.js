import "./globals.css";
import Navigator from "../../components/Navigator";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata = {
  title: "Store Management",
  description: "Store Management Application",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <div className="fixed top-0 left-0 h-screen">
          <Navigator></Navigator>
        </div>
        <div className="ml-60 grow h-screen bg-slate-100 overflow-auto">
          {children}
        </div>
      </body>
    </html >
  );
}
