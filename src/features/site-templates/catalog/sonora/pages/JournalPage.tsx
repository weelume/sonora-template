import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Reveal} from '../components/Motion'
import {stories} from '../content/stories'
import {copy} from '../content/ui'
import {brand} from '../config/brand'
import {routePath} from '../routing'
export default function JournalPage({locale='zh',basePath}:SiteTemplatePageProps){const t=copy[locale];return <Shell locale={locale} basePath={basePath} slug="journal"><section className="sn-container sn-journal"><Reveal><p className="sn-eyebrow">{locale==='en'?'THE EVERYDAY JOURNAL':'日常生活日志'}</p><h1>{t.journalTitle}</h1><p className="sn-lead">{t.journalText}</p></Reveal><div className="sn-journal-grid">{stories.map((story,i)=><Reveal key={story.slug} delay={i*.07}><Link className="sn-story-card" href={routePath(basePath,locale,'journal/'+story.slug)}><div className="sn-card-image"><img loading="lazy" src={brand.assetRoot+'/images/'+story.image+'.webp'} alt={story.title[locale]}/></div><div className="sn-card-copy"><p className="sn-eyebrow">{story.category[locale]}</p><h2>{story.title[locale]}</h2><span className="sn-text-link">{t.read}</span></div></Link></Reveal>)}</div></section></Shell>}
