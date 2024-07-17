'use client'

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <h1 className="text-8xl h-screen flex items-center px-14 leading-snug font-bold">{`YUGO'S`}<br />{`PORTFOLIO`}</h1>
      <motion.img src="./portfolio_hexagon.png" className="absolute -z-10 -top-52 -left-52" animate={{ rotate: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
      <motion.img src="./portfolio_hexagon.png" className="absolute -z-10 w-3/6 top-96 -right-52 overflow-x-hidden" animate={{ rotate: [0, 360] }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }} />
    </main>
  );
}