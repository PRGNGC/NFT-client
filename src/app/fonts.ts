import { Inter, Archivo } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

const customFont = localFont({
	src: "../../public/fonts/Body-grotesque/body-grotesque.large-trial-bold.ttf",
	weight: "100",
	variable: "--font-custom"
});

export { inter, archivo, customFont };
