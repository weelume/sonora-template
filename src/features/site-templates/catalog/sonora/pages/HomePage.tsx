import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {HeroEntrance,Reveal} from '../components/Motion'
import {copy} from '../content/ui'
import {brand} from '../config/brand'
import {routePath} from '../routing'
export default function HomePage({locale='zh',basePath}:SiteTemplatePageProps){
 const t=copy[locale],en=locale==='en',href=(slug:string)=>routePath(basePath,locale,slug)
 const cards=[['speakers','living'],['sound','sound'],['design','detail'],['journal','morning']]
 return <Shell locale={locale} basePath={basePath}><section className="sn-hero"><img className="sn-hero-image" src={brand.assetRoot+'/images/hero.webp'} alt={en?'Ivory woven speaker on a sunlit travertine console':'日光下摆放在洞石边柜上的米白织物音响'} fetchPriority="high"/><div className="sn-hero-content"><HeroEntrance><p className="sn-eyebrow">{t.eyebrow}</p><h1>{t.hero}</h1><p className="sn-hero-sub">{t.sub}</p><Link className="sn-button" href={href('speakers')}>{t.explore}</Link></HeroEntrance></div><span className="sn-hero-caption">{en?'NATURAL FORM. EVERYDAY SOUND.':'自然形态 · 日常之声'}</span></section>
 <section className="sn-container sn-stories"><Reveal><div className="sn-section-heading"><div><p className="sn-eyebrow">{en?'A CONSIDERED APPROACH':'声音与生活'}</p><h2>{t.stories}</h2></div><p>{t.intro}</p></div></Reveal><div className="sn-cards">{cards.map(([slug,image],i)=><Reveal delay={i*.07} key={slug}><Link className="sn-story-card" href={href(slug)}><div className="sn-card-image"><img src={brand.assetRoot+'/images/'+image+'.webp'} alt={t.cards[i]} loading="lazy"/></div><div className="sn-card-copy"><p className="sn-eyebrow">{en?['SIGNATURE PRODUCT','CRAFTED FOR CLARITY','DESIGNED TO BELONG','EVERYDAY MOMENTS'][i]:['代表产品','声音设计','材质美学','日常片刻'][i]}</p><h3>{t.cards[i]}</h3><p>{t.descriptions[i]}</p><span className="sn-text-link">{t.links[i]}</span></div></Link></Reveal>)}</div></section>
 <section className="sn-manifesto"><Reveal><p className="sn-eyebrow">{en?'SOUND, IN ITS ELEMENT':'让声音回归生活'}</p><h2>{en?'Less noise. More life.':'少一点喧嚣\n多一点生活'}</h2><p>{t.intro}</p><Link className="sn-light-button" href={href('about')}>{en?'Our story':'了解我们的故事'}</Link></Reveal></section>
 <section className="sn-container sn-features" aria-label={en?'Design principles':'设计理念'}>{(en?['Considered sound','Natural textures','Made for your space','Everyday simplicity']:['用心调校的声音','自然材质触感','融入你的空间','从容简单的日常']).map((label,i)=><div key={label}><span className={'sn-feature-icon sn-icon-'+i} aria-hidden="true"/><span>{label}</span></div>)}</section></Shell>
}
