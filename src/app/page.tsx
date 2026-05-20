'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Users,
  Star,
  Megaphone,
  Radio,
  Globe2
} from 'lucide-react'

const business = [
  {
    icon: Users,
    num: '01',
    title: 'MCN MANAGEMENT',
    text: '크리에이터 채널 운영 및 콘텐츠 기획, 광고 및 브랜딩 전략을 지원합니다.',
  },
  {
    icon: Star,
    num: '02',
    title: 'CREATOR BRANDING',
    text: '크리에이터의 개성과 영향력을 브랜드화하여 지속 가능한 성장을 만듭니다.',
  },
  {
    icon: Megaphone,
    num: '03',
    title: 'AD & BRAND COLLABORATION',
    text: '광고, 협찬, 캠페인, 브랜드 제휴를 통해 다양한 비즈니스 기회를 연결합니다.',
  },
  {
    icon: Radio,
    num: '04',
    title: 'LIVE & PLATFORM BUSINESS',
    text: '라이브 방송 및 플랫폼 활동을 통해 크리에이터의 영향력을 확장합니다.',
  },
  {
    icon: Globe2,
    num: '05',
    title: 'GLOBAL EXPANSION',
    text: '글로벌 시장 진출 및 해외 네트워크 구축을 지원합니다.',
  }
]

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-[#1a1a1a] bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/orbis-logo-horizontal.png"
              alt="ORBIS ENM"
              className="h-[42px] w-auto object-contain"
            />
          </div>

          {/* MENU */}
          <nav className="hidden gap-14 text-[13px] font-semibold tracking-[2px] md:flex">
            <a href="#home" className="text-[#caa85d]">HOME</a>
            <a href="#company">COMPANY</a>
            <a href="#business">BUSINESS</a>
            <a href="#creators">CREATORS</a>
            <a href="#contact">CONTACT</a>
          </nav>

          {/* MENU ICON */}
          <div className="text-[#caa85d] text-3xl">Ξ</div>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden border-b border-[#1a1a1a]"
      >

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 overflow-hidden opacity-90">
          <img
            src="/stage-bg.png"
            alt="ORBIS ENM Stage"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-16 px-8 pt-[140px] pb-[100px] lg:grid-cols-2">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >

            <div className="mb-8 flex items-center gap-4">
              <div className="h-[1px] w-16 bg-[#caa85d]" />
              <span className="text-[13px] tracking-[3px] text-[#caa85d]">
                ENTERTAINMENT & MEDIA
              </span>
            </div>

            <h1 className="text-[60px] font-black leading-[1.05] md:text-[92px]">
              CREATORS
              <br />
              TO THE <span className="text-[#caa85d]">WORLD.</span>
            </h1>

            <p className="mt-12 max-w-[540px] text-[17px] leading-[2] text-gray-300">
              우리는 크리에이터의 가능성을 발견하고,
              <br />
              성장과 수익, 글로벌 확장까지 함께 설계하는
              <br />
              <span className="font-bold text-[#caa85d]">
                MCN & ENTERTAINMENT COMPANY
              </span>
              입니다.
            </p>

            <div className="mt-16 flex items-center gap-8">
              <button className="group flex items-center gap-5 text-[13px] font-bold tracking-[2px] text-[#caa85d]">
                VIEW MORE
                <div className="h-[1px] w-20 bg-[#caa85d]" />
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-2"
                />
              </button>
            </div>

          </motion.div>

        </div>

        {/* SCROLL */}
        <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 rotate-90 items-center gap-6 text-[11px] tracking-[4px] text-[#caa85d] lg:flex">
          SCROLL DOWN
          <div className="h-[1px] w-24 bg-[#caa85d]" />
        </div>

      </section>

      {/* ABOUT */}
      <section
        id="company"
        className="border-b border-[#1a1a1a] bg-black px-8 py-28"
      >

        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-20 lg:grid-cols-[450px_1fr]">

          {/* LEFT */}
          <div>

            <div className="mb-8 flex items-center gap-4">
              <div className="h-[1px] w-16 bg-[#caa85d]" />
              <span className="text-[12px] tracking-[3px] text-[#caa85d]">
                ABOUT ORBIS ENM
              </span>
            </div>

            <h2 className="text-[52px] font-black leading-[1.25]">
              콘텐츠의 궤도를 바꾸는
              <br />
              새로운 엔터테인먼트.
            </h2>

            <p className="mt-10 text-[15px] leading-[2] text-gray-400">
              Orbis ENM은 콘텐츠 중심의 시대에 맞춰
              <br />
              크리에이터와 브랜드, 그리고 팬을 연결하며
              <br />
              새로운 가치를 창출합니다.
            </p>

          </div>

          {/* RIGHT */}
          <div
            id="business"
            className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-5"
          >

            {business.map((item, idx) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group border-l border-[#1a1a1a] pl-8"
                >

                  <Icon
                    size={42}
                    className="text-[#caa85d] transition group-hover:scale-110"
                  />

                  <div className="mt-8 text-[38px] font-bold text-[#caa85d]">
                    {item.num}
                  </div>

                  <h3 className="mt-4 text-[15px] font-bold tracking-[2px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[14px] leading-[1.9] text-gray-400">
                    {item.text}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </div>

      </section>

    </main>
  )
}
