'use client'
import { Menu } from 'lucide-react'
import Logo from './Logo'
const nav=[['HOME','#home'],['COMPANY','#company'],['BUSINESS','#business'],['CREATORS','#creators'],['CONTACT','#contact']]
export default function Header(){ return <header className="fixed left-0 top-0 z-50 h-[86px] md:h-[104px] w-full border-b border-white/[.06] bg-black/95 backdrop-blur"><div className="mx-auto flex h-full max-w-[1536px] items-center justify-between px-5 md:px-10"><a href="#home"><Logo className="w-[128px] md:w-[170px]"/></a><nav className="hidden md:flex items-center gap-[70px] text-[11px] font-black tracking-[.15em]"><a className="relative text-orbis-gold after:absolute after:-bottom-[18px] after:left-0 after:h-px after:w-full after:bg-orbis-gold" href="#home">HOME</a>{nav.slice(1).map(([n,h])=><a key={n} href={h} className="hover:text-orbis-gold transition">{n}</a>)}</nav><Menu className="h-7 w-7 text-orbis-gold"/></div></header> }
