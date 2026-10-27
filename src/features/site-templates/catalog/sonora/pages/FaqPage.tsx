import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {copy} from '../content/ui'
export default function FaqPage({locale='zh',basePath}:SiteTemplatePageProps){const t=copy[locale];return <Shell locale={locale} basePath={basePath} slug="faq"><section className="sn-container sn-text-section sn-faq"><p className="sn-eyebrow">{locale==='zh'?'帮助与支持':'HELP & SUPPORT'}</p><h1>{t.faqTitle}</h1>{t.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section></Shell>}
