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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 px-4 text-center dark:bg-gradient-to-br dark:from-yellow-900 dark:via-amber-900 dark:to-orange-900">
      <h1 className="mb-6 text-5xl font-extrabold md:text-7xl">CodeCat</h1>
      <div className="mb-4 h-12 text-2xl font-bold md:text-4xl">
        <TypeAnimate />
      </div>
      <Link href="/about">
        <button className="text-origin-invert mt-7 cursor-pointer rounded-md border border-black bg-transparent px-7 py-2 outline-hidden transition hover:bg-orange-200 dark:border-slate-300">
          開始閱讀文件
        </button>
      </Link>
    </div>
  );
}
