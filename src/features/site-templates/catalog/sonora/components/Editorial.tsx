import Link from 'next/link'
import {brand} from '../config/brand'
import {Reveal} from './Motion'
export function Editorial({eyebrow,title,body,image,alt,link}:{eyebrow:string;title:string;body:string;image:string;alt:string;link?:{href:string;label:string}}){return <section className="sn-container sn-editorial"><Reveal><p className="sn-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="sn-lead">{body}</p>{link&&<Link className="sn-button" href={link.href}>{link.label}</Link>}</Reveal><Reveal delay={.12}><img className="sn-editorial-image" src={brand.assetRoot+'/images/'+image+'.webp'} alt={alt}/></Reveal></section>}
export function TextSection({eyebrow,title,children}:{eyebrow:string;title:string;children:React.ReactNode}){return <section className="sn-container sn-text-section"><Reveal><p className="sn-eyebrow">{eyebrow}</p><h2>{title}</h2><div className="sn-prose">{children}</div></Reveal></section>}
