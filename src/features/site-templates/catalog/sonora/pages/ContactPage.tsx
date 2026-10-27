import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {DemoForm} from '../components/DemoForm'
import {copy} from '../content/ui'
export default function ContactPage({locale='zh',basePath}:SiteTemplatePageProps){const t=copy[locale];return <Shell locale={locale} basePath={basePath} slug="contact"><section className="sn-container sn-contact"><div><p className="sn-eyebrow">{locale==='zh'?'从一次对话开始':'START A CONVERSATION'}</p><h1>{t.contactTitle}</h1><p className="sn-lead">{t.contactText}</p></div><DemoForm locale={locale}/></section></Shell>}
