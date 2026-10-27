import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {ProductGallery} from '../components/ProductGallery'
import {Reveal} from '../components/Motion'
import {TextSection} from '../components/Editorial'
import {routePath} from '../routing'
import {copy} from '../content/ui'
export default function ProductPage({locale='zh',basePath}:SiteTemplatePageProps){const en=locale==='en',t=copy[locale];return <Shell locale={locale} basePath={basePath} slug="speakers"><section className="sn-container sn-product"><ProductGallery locale={locale}/><Reveal><p className="sn-eyebrow">{en?'MEET ERA ONE':'认识 Era One'}</p><h1>{t.product}</h1><p className="sn-lead">{t.productText}</p><dl className="sn-specs"><div><dt>{en?'Expression':'设计语言'}</dt><dd>{en?'Soft, sculptural form':'柔和而富有雕塑感的形态'}</dd></div><div><dt>{en?'Palette':'色彩与材质'}</dt><dd>{en?'Ivory fabric / warm wood':'米白织物 / 温润木材'}</dd></div><div><dt>{en?'Purpose':'展示用途'}</dt><dd>{en?'Concept presentation':'概念展示，不提供在线购买'}</dd></div></dl><Link className="sn-button" href={routePath(basePath,locale,'contact')}>{en?'Talk about your space':'聊聊你的空间'}</Link></Reveal></section><TextSection eyebrow={en?'A QUIETER PRESENCE':'安静地陪伴'} title={en?'At home, wherever you listen':'让喜欢的声音，自然融入家'}><p>{en?'A thoughtful object should feel at ease beside books, a favourite chair or the morning light. This concept combines a rounded silhouette with materials that invite a closer look.':'一件用心设计的物品，可以与书本、喜欢的椅子和清晨的光线自然相处。这款概念产品将圆润轮廓与细腻材质结合，让声音成为日常空间的一部分。'}</p><p className="sn-note">{en?'All images are AI-generated concept imagery. They do not establish technical specifications or manufacturing claims.':'图片均为 AI 生成的概念视觉，不代表实际产品技术规格或制造承诺。'}</p></TextSection></Shell>}
