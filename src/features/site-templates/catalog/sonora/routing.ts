import type {TemplateLocale} from '../../types'
export const routePath=(basePath:string,locale:TemplateLocale,slug='')=>'/'+[basePath.replace(/^\/+|\/+$/g,''),locale==='en'?'en':'',slug].filter(Boolean).join('/')
export const navigation=[['speakers','音响','Speakers'],['sound','声音','Sound'],['design','设计','Design'],['about','关于','About'],['journal','日志','Journal']] as const

