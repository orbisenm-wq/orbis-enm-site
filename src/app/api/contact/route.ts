import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
export async function POST(req: NextRequest){
  const body=await req.json(); const {name,email,phone,channel,message,type}=body;
  if(!name || !email || !message) return NextResponse.json({error:'missing fields'},{status:400})
  const to=process.env.ADMIN_EMAIL || 'contact@orbis-enm.com'
  const subject= type==='creator' ? `[Orbis ENM] 크리에이터 지원 - ${name}` : `[Orbis ENM] 홈페이지 문의 - ${name}`
  const html=`<h2>${subject}</h2><p><b>이름/회사명:</b> ${name}</p><p><b>이메일:</b> ${email}</p><p><b>연락처:</b> ${phone||'-'}</p><p><b>채널:</b> ${channel||'-'}</p><pre style="white-space:pre-wrap">${message}</pre>`
  if(!process.env.RESEND_API_KEY){ console.log('CONTACT_FORM', {subject, html}); return NextResponse.json({ok:true, mode:'log'}) }
  const resend=new Resend(process.env.RESEND_API_KEY); await resend.emails.send({from:process.env.FROM_EMAIL || 'ORBIS ENM <noreply@orbis-enm.com>', to, replyTo: email, subject, html}); return NextResponse.json({ok:true})
}
