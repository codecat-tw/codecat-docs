"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function TypeAnimate() {
  return (
    <TypeAnimation
      sequence={[
        "開源套件框架文件",
        2000,
        "CPE Guide 貢獻指南",
        2000,
        "台域戰策教學",
        2000,
        "社群組織說明",
        2000,
      ]}
      speed={50}
      repeat={Infinity}
    />
  );
}

export default function HeroSection() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 text-center px-4 dark:bg-gradient-to-br dark:from-yellow-900 dark:via-amber-900 dark:to-orange-900">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">CodeCat</h1>
      <div className="text-2xl md:text-4xl font-bold mb-4 h-12">
        <TypeAnimate />
      </div>
      <Link href="/about">
        <button className="mt-7 py-2 bg-transparent hover:bg-orange-200 text-origin-invert border border-black rounded-md transition outline-hidden cursor-pointer px-7 dark:border-slate-300">
          開始閱讀文件
        </button>
      </Link>
    </div>
  );
}
