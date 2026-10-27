import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from './Shell'
import {stories} from '../content/stories'
import {brand} from '../config/brand'
import {routePath} from '../routing'
export function Article({locale='zh',basePath,index}:SiteTemplatePageProps&{index:number}){const story=stories[index];return <Shell locale={locale} basePath={basePath} slug={'journal/'+story.slug}><article className="sn-container sn-article"><header><p className="sn-eyebrow">{story.category[locale]}</p><h1>{story.title[locale]}</h1></header><img className="sn-article-image" src={brand.assetRoot+'/images/'+story.image+'.webp'} alt={story.title[locale]}/><div className="sn-prose">{story.paragraphs[locale].map(p=><p key={p}>{p}</p>)}<Link className="sn-text-link" href={routePath(basePath,locale,'journal')}>{locale==='zh'?'返回生活日志':'Back to the journal'}</Link></div></article></Shell>}
