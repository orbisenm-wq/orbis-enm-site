import Image from 'next/image'
export default function Logo({className='w-[170px]', markOnly=false}:{className?:string, markOnly?:boolean}){ return <Image src="/orbis-logo.png" alt="Orbis ENM" width={800} height={800} priority className={`${className} h-auto object-contain`} /> }
