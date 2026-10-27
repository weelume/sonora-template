import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from './Shell'
import {Editorial,TextSection} from './Editorial'
import {copy} from '../content/ui'
import {pageContent} from '../content/pages'
export function StoryPage({locale='zh',basePath,kind}:SiteTemplatePageProps&{kind:keyof typeof pageContent}){
 const t=copy[locale],data=pageContent[kind],title=kind==='sound'?t.soundTitle:kind==='design'?t.designTitle:t.aboutTitle,body=kind==='sound'?t.soundText:kind==='design'?t.designText:t.aboutText
 return <Shell locale={locale} basePath={basePath} slug={kind}><Editorial eyebrow={data.eyebrow[locale]} title={title} body={body} image={data.image} alt={data.alt[locale]}/><TextSection eyebrow={data.section[locale]} title={data.title[locale]}>{data.paragraphs[locale].map(p=><p key={p}>{p}</p>)}</TextSection></Shell>
}
