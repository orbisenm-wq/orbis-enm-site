"use client"

import { motion } from "framer-motion"

const services = [
  {
    num: "01",
    title: "CREATOR MANAGEMENT",
    text: "크리에이터의 성장과 브랜딩을 체계적으로 지원합니다.",
  },
  {
    num: "02",
    title: "CONTENT PRODUCTION",
    text: "트렌디한 콘텐츠 기획 및 제작 시스템을 제공합니다.",
  },
  {
    num: "03",
    title: "BRAND COLLABORATION",
    text: "브랜드와 크리에이터 간 최적의 협업을 연결합니다.",
  },
  {
    num: "04",
    title: "LIVE & PLATFORM BUSINESS",
    text: "라이브 방송 및 플랫폼 활동을 통해 크리에이터의 영향력을 확장합니다.",
  },
  {
    num: "05",
    title: "GLOBAL EXPANSION",
    text: "글로벌 시장 진출 및 해외 네트워크 구축을 지원합니다.",
  },
]

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-[#1a1a1a] bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-10 py-5">
          
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/orbis-logo-horizontal.png"
              alt="ORBIS ENM"
              className="h-[72px] w-auto object-contain"
            />
          </div>

          {/* MENU */}
          <nav className="hidden gap-16 text-[17px] font-semibold tracking-[3px] md:flex">
            <a href="#home" className="text-[#caa85d]">
              HOME
            </a>
            <a href="#company">COMPANY</a>
            <a href="#business">BUSINESS</a>
            <a href="#creators">CREATORS</a>
            <a href="#contact">CONTACT</a>
          </nav>

          {/* MENU ICON */}
          <div className="text-[#caa85d] text-4xl">≡</div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden border-b border-[#1a1a1a]"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden opacity-80">
          <img
            src="/stage-bg.png"
            alt="ORBIS ENM Stage"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-between px-20 pt-28">
          
          {/* LEFT TEXT */}
          <div className="max-w-[700px]">
            <div className="mb-8 flex items-center gap-6">
              <div className="h-[1px] w-24 bg-[#caa85d]" />
              <span className="text-[18px] tracking-[6px] text-[#caa85d]">
                ENTERTAINMENT & MEDIA
              </span>
            </div>

            {/* TITLE */}
            <h1 className="hero-title mt-10 leading-[0.9] uppercase tracking-[-4px]">
              <span className="block text-white text-[88px]">
                CREATORS
              </span>

              <span className="block text-[88px] whitespace-nowrap">
                <span className="text-white">TO THE </span>
                <span className="text-[#caa85d]">WORLD</span>
              </span>
            </h1>

            {/* DESCRIPTION */}
            <div className="mt-12 space-y-5 text-[22px] leading-[1.8] text-white">
              <p>우리는 크리에이터의 가능성을 발견하고,</p>
              <p>성장과 수익, 글로벌 확장까지 함께 설계하는</p>

              <p>
                <span className="font-bold text-[#caa85d]">
                  MCN & ENTERTAINMENT COMPANY
                </span>
                입니다.
              </p>
            </div>

            {/* BUTTON */}
            <div className="mt-16 flex items-center gap-6">
              <span className="text-[18px] font-semibold tracking-[4px] text-[#caa85d]">
                VIEW MORE
              </span>

              <div className="h-[1px] w-40 bg-[#caa85d]" />

              <span className="text-5xl text-[#caa85d]">→</span>
            </div>
          </div>

          {/* RIGHT SCROLL */}
          <div className="hidden h-[400px] flex-col items-center justify-center gap-6 lg:flex">
            <span className="rotate-90 text-[13px] tracking-[8px] text-[#caa85d]">
              SCROLL
            </span>

            <div className="h-32 w-[1px] bg-[#caa85d]" />
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section
        id="company"
        className="border-b border-[#1a1a1a] bg-black px-10 py-40"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-[70px] font-black tracking-[-2px]">
            COMPANY
          </h2>

          <p className="mt-10 max-w-[900px] text-[22px] leading-[2] text-gray-300">
            ORBIS ENM은 크리에이터 중심의 엔터테인먼트 & 미디어 기업으로,
            콘텐츠 제작부터 브랜딩, 수익화, 글로벌 진출까지 함께하는
            차세대 MCN입니다.
          </p>
        </div>
      </section>

      {/* BUSINESS */}
      <section
        id="business"
        className="border-b border-[#1a1a1a] bg-black px-10 py-40"
      >
        <div className="mx-auto max-w-[1600px]">
          <h2 className="mb-24 text-[70px] font-black tracking-[-2px]">
            BUSINESS
          </h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group border border-[#1a1a1a] p-10 transition hover:border-[#caa85d]"
              >
                <div className="text-[42px] font-black text-[#caa85d]">
                  {item.num}
                </div>

                <h3 className="mt-5 text-[24px] font-bold tracking-[2px]">
                  {item.title}
                </h3>

                <p className="mt-6 text-[17px] leading-[1.9] text-gray-400">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-black px-10 py-40 text-center"
      >
        <h2 className="text-[70px] font-black tracking-[-2px]">
          CONTACT
        </h2>

        <p className="mt-10 text-[24px] text-gray-300">
          orbis.enm@gmail.com
        </p>
      </section>
    </main>
  )
}
