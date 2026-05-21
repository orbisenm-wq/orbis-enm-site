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
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-10 py-[1px]">
          
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/orbis-logo-horizontal.png"
              alt="ORBIS ENM"
              className="h-[170px] w-auto object-contain -my-8"
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
            <h1 className="mt-10 leading-[0.9] font-black uppercase tracking-[-4px]">
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
  className="bg-black px-10 py-40"
>
  <div className="mx-auto max-w-[1400px]">
    <h2 className="text-[44px] font-black leading-[1.35] tracking-[-2px] text-white md:text-[58px]">
      <span className="text-[#caa85d]">크리에이터, 에이전트, 비즈니스 관련 업무 등</span>
      <br />
      문의를 원하시면 이곳에 글을 남겨주세요.
    </h2>

    <p className="mt-10 text-[20px] leading-[1.8] text-gray-300">
      신청 양식에 맞춰 문의 주시면 담당자가 빠른 시일 내에 연락 드리도록 하겠습니다.
    </p>

    <div className="mt-20">
      <p className="mb-5 text-[15px] font-bold text-white">
        문의 유형 <span className="text-[#caa85d]">*</span>
      </p>

      <div className="flex flex-wrap gap-3">
        {["크리에이터", "에이전트", "비즈니스"].map((type, idx) => (
          <button
            key={idx}
            className={`rounded-full border px-10 py-3 text-[14px] font-bold transition ${
              idx === 0
                ? "border-white bg-white text-black"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>

    <form className="mt-12 grid gap-10 md:grid-cols-2">
      <div>
        <label className="text-[16px] font-bold text-white">
          이름 <span className="text-[#caa85d]">*</span>
        </label>
        <input
          type="text"
          placeholder="내용을 입력해 주세요."
          className="mt-5 w-full border-b border-gray-700 bg-transparent pb-4 text-white outline-none placeholder:text-gray-500 focus:border-[#caa85d]"
        />
      </div>

      <div>
        <label className="text-[16px] font-bold text-white">
          연락처 <span className="text-[#caa85d]">*</span>
        </label>
        <input
          type="text"
          placeholder="내용을 입력해 주세요."
          className="mt-5 w-full border-b border-gray-700 bg-transparent pb-4 text-white outline-none placeholder:text-gray-500 focus:border-[#caa85d]"
        />
      </div>

      <div>
        <label className="text-[16px] font-bold text-white">
          생년월일 <span className="text-[#caa85d]">*</span>
        </label>
        <input
          type="text"
          placeholder="내용을 입력해 주세요."
          className="mt-5 w-full border-b border-gray-700 bg-transparent pb-4 text-white outline-none placeholder:text-gray-500 focus:border-[#caa85d]"
        />
      </div>

      <div>
        <label className="text-[16px] font-bold text-white">
          인스타, 틱톡 등 개인 SNS <span className="text-[#caa85d]">*</span>
        </label>
        <input
          type="text"
          placeholder="내용을 입력해 주세요."
          className="mt-5 w-full border-b border-gray-700 bg-transparent pb-4 text-white outline-none placeholder:text-gray-500 focus:border-[#caa85d]"
        />
      </div>

      <div className="md:col-span-2">
        <label className="text-[16px] font-bold text-white">
          문의 내용 <span className="text-[#caa85d]">*</span>
        </label>
        <textarea
          placeholder="내용을 입력해 주세요."
          rows={4}
          className="mt-5 w-full resize-none border-b border-gray-700 bg-transparent pb-4 text-white outline-none placeholder:text-gray-500 focus:border-[#caa85d]"
        />
      </div>

      <div className="md:col-span-2">
        <label className="flex items-center gap-3 text-[14px] font-bold text-white">
          <input type="checkbox" className="h-4 w-4" />
          개인정보 수집 및 이용에 동의합니다.
        </label>
      </div>

      <div className="flex justify-center md:col-span-2">
        <button
          type="button"
          className="mt-8 flex h-[130px] w-[130px] items-center justify-center rounded-full border border-white text-[15px] font-bold text-white transition hover:border-[#caa85d] hover:bg-[#caa85d] hover:text-black"
        >
          문의보내기
        </button>
      </div>
    </form>

    <div className="mt-28 grid gap-10 border-t border-[#1a1a1a] pt-12 md:grid-cols-2">
      <div>
        <h3 className="text-[20px] font-bold text-white">
          ADDRESS
        </h3>
        <p className="mt-5 text-[16px] leading-[1.8] text-gray-400">
          서울특별시 강남구 청담동 28-18 , 101호
        </p>
      </div>

      <div>
        <h3 className="text-[20px] font-bold text-white">
          E-MAIL
        </h3>
        <p className="mt-5 text-[16px] leading-[1.8] text-gray-400">
          orbis.enm@gmail.com
        </p>
      </div>
    </div>

    <div className="mt-16 border-t border-[#1a1a1a] pt-10 text-[15px] leading-[2.2] text-gray-500">
      <p className="font-semibold text-gray-300">
        (주) ORBIS ENM
      </p>
      <p>이메일 l orbis.enm@gmail.com</p>
      <p>주소 l 서울특별시 강남구 청담동 28-18 , 101호</p>
    </div>
  </div>
</section>
    </main>
  )
}
