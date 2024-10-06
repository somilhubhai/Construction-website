import { Radio_Canada } from "@next/font/google";
import Home from "./components/Home";

const font = Radio_Canada({
  subsets: ["vietnamese"],
  weight: ["400", "700"],
});

export default function App() {
  return (
    <div
      style={{ fontFamily: font.style.fontFamily }}
      className="overflow-x-hidden px-2 bg-clip-border bg-gradient-to-bl from-black to-slate-800 text-white min-h-screen"
    >
      <Home />
    </div>
  );
}
