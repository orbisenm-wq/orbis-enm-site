'use client'

import { ArrowRight, Menu, Users, Star, Megaphone, Radio, Globe2 } from 'lucide-react'

const business = [
  { icon: Users, num: '01', title: 'MCN MANAGEMENT', text: '크리에이터 채널 운영 및\n콘텐츠 기획, 플랫폼 성장\n전략을 지원합니다.' },
  { icon: Star, num: '02', title: 'CREATOR BRANDING', text: '크리에이터의 개성과\n영향력을 브랜드화하여\n지속 가능한 가치를 만듭니다.' },
  { icon: Megaphone, num: '03', title: 'AD & BRAND\nCOLLABORATION', text: '광고, 협찬, 캠페인, 브랜드\n제휴를 통해 다양한 비즈니스\n기회를 연결합니다.' },
  { icon: Radio, num: '04', title: 'LIVE & PLATFORM\nBUSINESS', text: '라이브 방송 및 다양한\n플랫폼 활동을 지원하여\n영역을 확장합니다.' },
  { icon: Globe2, num: '05', title: 'GLOBAL EXPANSION', text: '국내를 넘어 글로벌 플랫폼과\n해외 시장 진출, 글로벌\n팬덤 확장을 목표로 합니다.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed left-0 top-0 z-50 h-[88px] w-full border-b border-white/10 bg-black">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-9">
          <img src="/orbis-logo.png" alt="ORBIS ENM" className="w-[180px]" />

          <nav className="hidden items-center gap-16 text-[11px] font-black tracking-[0.16em] md:flex">
            <a className="relative text-[#d4b263] after:absolute after:-bottom-4 after:left-0 after:h-px after:w-full after:bg-[#d4b263]">HOME</a>
            <a>COMPANY</a>
            <a>BUSINESS</a>
            <a>CREATORS</a>
            <a>CONTACT</a>
          </nav>

          <Menu className="h-7 w-7 text-[#d4b263]" />
        </div>
      </header>

      <section className="relative h-[640px] overflow-hidden border-b border-white/10 pt-[88px]">
        <div className="absolute inset-y-[88px] right-0 w-[72%] bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,.9)_15%,rgba(0,0,0,.15)_50%,#000_100%),linear-gradient(180deg,rgba(0,0,0,.05),#000_100%),url('/stage-bg.png')] bg-cover bg-center opacity-80 grayscale" />

        <img
          src="/orbis-logo.png"
          alt="ORBIS ENM Stage Logo"
          className="absolute left-[70%] top-[38%] w-[230px] -translate-x-1/2 -translate-y-1/2 opacity-90"
        />

        <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-16">
          <div className="w-[540px]">
            <div className="mb-10 flex items-center gap-4 text-[12px] font-black tracking-[0.18em] text-[#d4b263]">
              <span className="h-px w-12 bg-[#d4b263]" /> ENTERTAINMENT & MEDIA
            </div>

            <h1 className="text-[70px] font-black uppercase leading-[1.12] tracking-[-0.055em]">
              CREATORS<br />
              TO THE <span className="text-[#d4b263]">WORLD.</span>
            </h1>

            <p className="mt-9 text-[15px] leading-8 text-white/70">
              우리는 크리에이터의 가능성을 발견하고,<br />
              성장과 수익화, 글로벌 확장까지 함께 설계하는<br />
              <span className="font-bold text-[#d4b263]">MCN & ENTERTAINMENT COMPANY</span> 입니다.
            </p>

            <div className="mt-10 flex items-center gap-5 text-[11px] font-black tracking-[0.15em] text-[#d4b263]">
              VIEW MORE <span className="h-px w-20 bg-[#d4b263]" /> <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 right-12 hidden items-center gap-5 text-[10px] font-black tracking-[0.18em] text-[#d4b263] [writing-mode:vertical-rl] lg:flex">
          SCROLL DOWN
          <span className="h-24 w-px bg-[#d4b263]" />
        </div>
      </section>

      <section className="bg-black px-16 py-[72px]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[360px_1fr] gap-16">
          <aside className="border-r border-white/10 pr-14">
            <div className="mb-7 flex items-center gap-3 text-[10px] font-black tracking-[0.16em] text-[#d4b263]">
              <span className="h-px w-10 bg-[#d4b263]" /> ABOUT ORBIS ENM
            </div>

            <h2 className="text-[34px] font-light leading-[1.25] tracking-[-0.06em]">
              콘텐츠의 궤도를 바꾸는<br />새로운 엔터테인먼트.
            </h2>

            <p className="mt-8 text-[14px] leading-8 text-white/55">
              Orbis ENM은 콘텐츠 중심의 시대에 맞춰<br />
              크리에이터와 브랜드, 그리고 팬을 연결하여<br />
              새로운 가치를 창출합니다.
            </p>

            <div className="mt-10 flex items-center gap-5 text-[11px] font-black tracking-[0.12em] text-[#d4b263]">
              MORE ABOUT US <span className="h-px w-20 bg-[#d4b263]" /> <ArrowRight className="h-4 w-4" />
            </div>
          </aside>

          <div className="grid grid-cols-5 gap-7 pt-7">
            {business.map((item) => (
              <article key={item.num} className="text-center">
                <item.icon className="mx-auto mb-8 h-12 w-12 stroke-[1.1] text-[#d4b263]" />
                <div className="mb-5 text-[20px] font-bold text-[#d4b263]">{item.num}</div>
                <h3 className="mx-auto mb-5 min-h-[52px] max-w-[155px] whitespace-pre-line text-[12px] font-black leading-[1.65] text-[#d4b263]">
                  {item.title}
                </h3>
                <p className="mx-auto max-w-[160px] whitespace-pre-line text-[12px] leading-7 text-white/55">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
