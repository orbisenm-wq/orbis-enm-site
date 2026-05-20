'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Users,
  Star,
  Megaphone,
  Radio,
  Globe2,
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
      <header className="fixed top-0 left-0 z-50 w-full border-b border-[#1a1a1a] bg-black/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-10 py-4">
          <div className="flex items-center">
            <img
              src="/orbis-logo-horizontal.png"
              alt="ORBIS ENM"
              className="h-[82px] w-auto object-contain brightness-125 contrast-125"
            />
          </div>

          <nav className="hidden gap-16 text-[15px] font-semibold tracking-[3px] md:flex">
            <a href="#home" className="text-[#caa85d]">HOME</a>
            <a href="#company">COMPANY</a>
            <a href="#business">BUSINESS</a>
            <a href="#creators">CREATORS</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <div className="text-[#caa85d] text-4xl">≡</div>
        </div>
      </header>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden border-b border-[#1a1a1a]"
      >
        <div className="absolute inset-0 overflow-hidden opacity-80">
          <img
            src="/stage-bg.png"
            alt="ORBIS ENM Stage"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-16 px-10 pt-[140px] pb-[100px] lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-10 flex items-center gap-6">
              <div className="h-[1px] w-24 bg-[#caa85d]" />
              <span className="text-[16px] tracking-[4px] text-[#caa85d]">
                ENTERTAINMENT & MEDIA
              </span>
            </div>

            <h1 className="text-[92px] font-black leading-[0.95] tracking-[-4px]">
              CREATORS
              <br />
              TO THE <span className="text-[#caa85d]">WORLD</span>
            </h1>

            <div className="mt-12 max-w-[560px] space-y-3 text-[20px] leading-[1.9] text-gray-200">
              <p>우리는 크리에이터의 가능성을 발견하고,</p>
              <p>성장과 수익, 글로벌 확장까지 함께 설계하는</p>

              <p className="font-semibold text-[#caa85d]">
                MCN & ENTERTAINMENT COMPANY
                <span className="text-white font-normal">입니다.</span>
              </p>
            </div>

            <button className="group mt-16 flex items-center gap-6 text-[15px] font-semibold tracking-[3px] text-[#caa85d] transition hover:text-white">
              VIEW MORE
              <div className="h-[1px] w-24 bg-[#caa85d] transition group-hover:w-32" />
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 xl:flex">
          <span className="rotate-90 text-[11px] tracking-[6px] text-[#8f7440]">
            SCROLL
          </span>
        </div>
      </section>

      <section
        id="business"
        className="border-b border-[#1a1a1a] bg-black py-32"
      >
        <div className="mx-auto max-w-[1600px] px-10">
          <div className="mb-24 grid gap-16 xl:grid-cols-2">
            <div>
              <div className="mb-8 flex items-center gap-6">
                <div className="h-[1px] w-20 bg-[#caa85d]" />
                <span className="text-[13px] tracking-[4px] text-[#caa85d]">
                  ABOUT ORBIS ENM
                </span>
              </div>

              <h2 className="text-[64px] font-black leading-[1.15] tracking-[-3px]">
                콘텐츠의 궤도를 바꾸는
                <br />
                새로운 엔터테인먼트.
              </h2>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
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
