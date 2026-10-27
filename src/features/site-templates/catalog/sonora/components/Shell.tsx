'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useEffect,useRef,type ReactNode} from 'react'
import type {SiteTemplatePageProps} from '../../../types'
import {useSonoraHost} from '../host'
import {brand} from '../config/brand'
import {copy} from '../content/ui'
import {navigation,routePath} from '../routing'
import {DemoForm} from './DemoForm'
import '../theme.css'

export function Shell({children,locale='zh',basePath,slug=''}:SiteTemplatePageProps&{children:ReactNode;slug?:string}){
 const t=copy[locale],host=useSonoraHost(),dialog=useRef<HTMLDialogElement>(null),router=useRouter()
 const name=host.brandName?.[locale]??brand.name[locale]
 const href=(path='')=>routePath(basePath,locale,path)
 useEffect(()=>{
  const html=document.documentElement,previous=html.getAttribute('data-sonora'),oldLang=html.lang
  html.setAttribute('data-sonora','');html.lang=locale==='zh'?'zh-CN':'en'
  return()=>{if(previous===null)html.removeAttribute('data-sonora');else html.setAttribute('data-sonora',previous);html.lang=oldLang}
 },[locale])
 function closeMenu(){dialog.current?.close()}
 function switchLanguage(event:React.MouseEvent<HTMLAnchorElement>){
  // 由当前浏览器位置补齐查询参数和锚点，保持双语页面上下文。
  event.preventDefault()
  router.push(routePath(basePath,locale==='zh'?'en':'zh',slug)+window.location.search+window.location.hash)
 }
 const logo=<>{host.logo&&<img src={host.logo} width={24} height={24} alt=""/>}<span>{name}</span></>
 const nav=<>{navigation.map(([path,zh,en])=><Link key={path} href={href(path)} onClick={closeMenu} aria-current={slug===path?'page':undefined}>{locale==='zh'?zh:en}</Link>)}<Link href={href('contact')} onClick={closeMenu}>{t.contact}</Link></>
 return <div className="sonora"><header className="sn-header"><Link className="sn-logo" href={href()} aria-label={name}>{logo}</Link><nav className="sn-desktop-nav" aria-label={t.menu}>{nav}</nav><div className="sn-header-actions"><Link href={routePath(basePath,locale==='zh'?'en':'zh',slug)} onClick={switchLanguage} lang={locale==='zh'?'en':'zh'}>{t.switcher}</Link><button className="sn-menu-toggle" type="button" aria-label={t.menu} aria-haspopup="dialog" onClick={()=>dialog.current?.showModal()}><span/><span/></button></div></header>
 <dialog ref={dialog} className="sn-mobile-dialog" aria-label={t.menu}><div className="sn-dialog-heading"><span>{name}</span><button type="button" onClick={closeMenu} aria-label={locale==='zh'?'关闭菜单':'Close menu'}>×</button></div><nav aria-label={t.menu}>{nav}</nav></dialog>
 <main id="sonora-main">{children}</main><footer className="sn-footer"><div className="sn-footer-top"><div><Link className="sn-logo" href={href()}>{logo}</Link><p>{t.footer}</p></div><nav className="sn-footer-links" aria-label={locale==='zh'?'页脚导航':'Footer navigation'}>{nav}<Link href={href('faq')}>{t.faqTitle}</Link></nav><DemoForm locale={locale} compact/></div><div className="sn-footer-bottom"><span>© {brand.year} {name}</span><div><Link href={href('privacy')}>{t.privacy}</Link><Link href={href('terms')}>{t.terms}</Link></div></div>{host.filing}</footer>
 {host.marketplaceHref&&<Link className="sn-marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo&&<img src={host.lightLogo} width={24} height={24} alt=""/>}<span>{host.brandName?.[locale]}</span></Link>}
 </div>
}
