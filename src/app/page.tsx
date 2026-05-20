'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Users,
  Star,
  Megaphone,
  Radio,
  Globe2,
  ShieldCheck,
  Menu,
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
    text: '광고주 및 브랜드 캠페인을 통해 다양한 비즈니스 기회를 연결합니다.',
  },
  {
    icon: Radio,
    num: '04',
    title: 'LIVE & PLATFORM BUSINESS',
    text: '라이브 방송 및 플랫폼 활동을 통해 크리에이터 영향력을 확장합니다.',
  },
  {
    icon: Globe2,
    num: '05',
    title: 'GLOBAL EXPANSION',
    text: '글로벌 시장 진출 및 해외 네트워크 구축을 지원합니다.',
  },
]

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-[#1a1a1a] bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-6">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/orbis-logo-horizontal.png"
              alt="ORBIS ENM"
              className="h-[82px] w-auto object-contain brightness-125 contrast-125"
            />
          </div>

          {/* NAV */}
          <nav className="hidden md:flex gap-16 text-[16px] font-semibold tracking-[3px]">
            <a href="#home" className="text-[#caa85d] transition hover:text-white">
              HOME
            </a>
            <a href="#company" className="transition hover:text-[#caa85d]">
              COMPANY
            </a>
            <a href="#business" className="transition hover:text-[#caa85d]">
              BUSINESS
            </a>
            <a href="#creators" className="transition hover:text-[#caa85d]">
              CREATORS
            </a>
            <a href="#contact" className="transition hover:text-[#caa85d]">
              CONTACT
            </a>
          </nav>

          {/* MENU */}
          <button className="text-[#caa85d]">
            <Menu size={30} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden border-b border-[#1a1a1a]"
      >

        {/* BG IMAGE */}
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
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-between px-20 pt-32">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[650px]"
          >

            <div className="mb-10 flex items-center gap-6">
              <div className="h-[1px] w-[130px] bg-[#caa85d]" />
              <span className="text-[18px] tracking-[7px] text-[#caa85d]">
                ENTERTAINMENT & MEDIA
              </span>
            </div>

            <h1 className="leading-[0.95] font-black tracking-[-4px]">
              <div className="text-[110px]">CREATORS</div>

              <div className="flex items-end gap-5">
                <span className="text-[110px] text-white">
                  TO THE
                </span>

                <span className="text-[92px] text-[#caa85d]">
                  WORLD
                </span>
              </div>
            </h1>

            <div className="mt-14 space-y-5 text-[24px] leading-[1.9] text-gray-100">
              <p>우리는 크리에이터의 가능성을 발견하고,</p>
              <p>성장과 수익, 글로벌 확장까지 함께 설계하는</p>

              <p className="font-semibold text-[#caa85d]">
                MCN & ENTERTAINMENT COMPANY입니다.
              </p>
            </div>

            <button className="group mt-16 flex items-center gap-7 text-[18px] font-semibold tracking-[4px] text-[#caa85d]">
              VIEW MORE

              <div className="h-[1px] w-[160px] bg-[#caa85d] transition-all duration-300 group-hover:w-[220px]" />

              <ArrowRight
                size={28}
                className="transition group-hover:translate-x-2"
              />
            </button>
          </motion.div>

          {/* RIGHT SCROLL */}
          <div className="hidden xl:flex flex-col items-center gap-8 pr-6">
            <div className="rotate-90 text-[12px] tracking-[8px] text-[#caa85d]">
              SCROLL
            </div>

            <div className="h-[120px] w-[1px] bg-[#caa85d]/50" />
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section
        id="company"
        className="border-b border-[#1a1a1a] bg-[#050505] px-8 py-36"
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-24">
            <div className="text-[14px] tracking-[5px] text-[#caa85d]">
              COMPANY
            </div>

            <h2 className="mt-5 text-[72px] font-black tracking-[-3px]">
              ORBIS ENM
            </h2>
          </div>

          <div className="grid gap-14 md:grid-cols-2">

            <div>
              <p className="text-[32px] leading-[1.7] text-gray-200">
                우리는 크리에이터의 잠재력을 콘텐츠와 비즈니스로 연결하며,
                브랜드와 글로벌 시장을 이어주는 엔터테인먼트 그룹입니다.
              </p>
            </div>

            <div className="space-y-8 text-[18px] leading-[2] text-gray-400">
              <p>
                ORBIS ENM은 MCN, 브랜드 광고, 콘텐츠 제작,
                라이브 비즈니스, 글로벌 네트워크까지
                크리에이터 기반 사업을 전문적으로 운영합니다.
              </p>

              <p>
                단순 매니지먼트를 넘어,
                크리에이터가 하나의 브랜드가 될 수 있도록
                전략적 성장을 설계합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section
        id="business"
        className="bg-black px-8 py-36"
      >
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-24">
            <div className="text-[14px] tracking-[5px] text-[#caa85d]">
              BUSINESS
            </div>

            <h2 className="mt-5 text-[72px] font-black tracking-[-3px]">
              WHAT WE DO
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {business.map((item, idx) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group border border-[#1a1a1a] p-10 transition hover:border-[#caa85d]"
                >
                  <Icon
                    size={42}
                    className="text-[#caa85d] transition group-hover:scale-110"
                  />

                  <div className="mt-10 text-[42px] font-bold text-[#caa85d]">
                    {item.num}
                  </div>

                  <h3 className="mt-5 text-[18px] font-bold tracking-[2px]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[16px] leading-[1.9] text-gray-400">
                    {item.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-[#1a1a1a] bg-[#050505] px-8 py-32"
      >
        <div className="mx-auto max-w-[1100px] text-center">

          <div className="text-[14px] tracking-[5px] text-[#caa85d]">
            CONTACT
          </div>

          <h2 className="mt-6 text-[70px] font-black tracking-[-3px]">
            LET’S WORK TOGETHER
          </h2>

          <p className="mx-auto mt-10 max-w-[700px] text-[20px] leading-[2] text-gray-400">
            브랜드와 크리에이터의 새로운 가능성을 함께 만듭니다.
            ORBIS ENM과 협업을 시작해보세요.
          </p>

          <div className="mt-16 flex flex-col items-center gap-5 text-[20px] text-white">
            <div>coingallery.corp@gmail.com</div>

            <div className="flex items-center gap-3 text-[#caa85d]">
              <ShieldCheck size={22} />
              Verified Business
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
