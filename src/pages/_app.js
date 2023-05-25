import "@/styles/globals.css";
import { Roboto } from "next/font/google";

const globalFont = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={globalFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
