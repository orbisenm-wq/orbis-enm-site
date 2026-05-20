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
    text: '브랜드와 크리에이터를 연결하여 다양한 비즈니스 기회를 제공합니다.',
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
              className="h-[118px] w-auto object-contain brightness-125 contrast-125"
            />
          </div>

          {/* MENU */}
          <nav className="hidden gap-16 text-[15px] font-semibold tracking-[3px] md:flex">
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
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 overflow-hidden opacity-80">
          <img
            src="/stage-bg.png"
            alt="ORBIS ENM Stage"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-between px-10 pt-40">
          
          {/* LEFT TEXT */}
          <div className="max-w-[700px]">
            <div className="mb-10 flex items-center gap-5">
              <div className="h-[1px] w-24 bg-[#caa85d]" />
              <span className="text-[18px] tracking-[6px] text-[#caa85d]">
                ENTERTAINMENT & MEDIA
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="leading-[0.95] font-black tracking-[-4px]"
            >
              <div className="text-[110px] text-white">
                CREATORS
              </div>

              <div className="text-[110px] text-white">
                TO THE{' '}
                <span className="text-[#caa85d]">
                  WORLD
                </span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-12 text-[22px] leading-[2] text-gray-200"
            >
              우리는 크리에이터의 가능성을 발견하고,
              <br />
              성장과 수익, 글로벌 확장까지 함께 설계하는
              <br />
              <span className="font-bold text-[#caa85d]">
                MCN & ENTERTAINMENT COMPANY
              </span>
              입니다.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex items-center gap-6"
            >
              <button className="group flex items-center gap-5 text-[20px] font-semibold tracking-[4px] text-[#caa85d] transition hover:text-white">
                VIEW MORE

                <div className="h-[1px] w-28 bg-[#caa85d]" />

                <ArrowRight className="transition group-hover:translate-x-2" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SCROLL */}
        <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 xl:flex">
          <span className="rotate-90 text-[11px] tracking-[6px] text-[#8f7440]">
            SCROLL
          </span>
        </div>
      </section>

      {/* COMPANY */}
      <section
        id="company"
        className="border-b border-[#1a1a1a] bg-[#050505] py-36"
      >
        <div className="mx-auto max-w-[1400px] px-10">
          <div className="mb-24">
            <p className="text-[15px] tracking-[5px] text-[#caa85d]">
              COMPANY
            </p>

            <h2 className="mt-6 text-[72px] font-black leading-none tracking-[-3px]">
              ORBIS ENM
            </h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[26px] leading-[2] text-gray-300">
                ORBIS ENM은 콘텐츠와 크리에이터를 중심으로
                새로운 엔터테인먼트 비즈니스를 구축합니다.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l border-[#caa85d] pl-8">
                <h3 className="text-[20px] font-bold tracking-[2px]">
                  ENTERTAINMENT
                </h3>

                <p className="mt-4 text-[17px] leading-[1.9] text-gray-400">
                  크리에이터 매니지먼트 및 브랜드 전략을 통해
                  지속 가능한 성장 구조를 만듭니다.
                </p>
              </div>

              <div className="border-l border-[#caa85d] pl-8">
                <h3 className="text-[20px] font-bold tracking-[2px]">
                  MEDIA
                </h3>

                <p className="mt-4 text-[17px] leading-[1.9] text-gray-400">
                  글로벌 플랫폼과 콘텐츠 네트워크를 연결하여
                  영향력을 확장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section
        id="business"
        className="bg-black py-36"
      >
        <div className="mx-auto max-w-[1500px] px-10">
          <div className="mb-24">
            <p className="text-[15px] tracking-[5px] text-[#caa85d]">
              BUSINESS
            </p>

            <h2 className="mt-6 text-[72px] font-black tracking-[-3px]">
              WHAT WE DO
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
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
                    size={46}
                    className="text-[#caa85d] transition group-hover:scale-110"
                  />

                  <div className="mt-8 text-[42px] font-black text-[#caa85d]">
                    {item.num}
                  </div>

                  <h3 className="mt-4 text-[18px] font-bold tracking-[2px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[16px] leading-[1.9] text-gray-400">
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
        className="border-t border-[#1a1a1a] bg-[#050505] py-36"
      >
        <div className="mx-auto max-w-[1200px] px-10 text-center">
          <p className="text-[15px] tracking-[5px] text-[#caa85d]">
            CONTACT
          </p>

          <h2 className="mt-6 text-[72px] font-black tracking-[-3px]">
            LET’S WORK TOGETHER
          </h2>

          <p className="mx-auto mt-10 max-w-[800px] text-[22px] leading-[2] text-gray-400">
            브랜드와 크리에이터를 연결하고,
            글로벌 엔터테인먼트 비즈니스를 함께 만들어갑니다.
          </p>

          <div className="mt-16 flex justify-center">
            <a
              href="mailto:contact@orbis-enm.com"
              className="border border-[#caa85d] px-12 py-5 text-[18px] tracking-[3px] text-[#caa85d] transition hover:bg-[#caa85d] hover:text-black"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
