'use client'
import {useState} from 'react'
import type {TemplateLocale} from '../../../types'
import {brand} from '../config/brand'
const images=['living','hero','detail','sound']
export function ProductGallery({locale}:{locale:TemplateLocale}){
 const [selected,setSelected]=useState(0),en=locale==='en'
 const labels=en?['At home','Product view','Material detail','Audio detail']:['家居陈设','产品视角','材料细节','声音结构']
 return <div className="sn-product-gallery"><div className="sn-gallery-stage"><img key={images[selected]} src={brand.assetRoot+'/images/'+images[selected]+'.webp'} alt={labels[selected]}/><span className="sn-gallery-caption" aria-live="polite">{labels[selected]}</span></div><div className="sn-gallery-thumbnails" role="group" aria-label={en?'Product images':'产品图片'}>{images.map((image,i)=><button key={image} type="button" onClick={()=>setSelected(i)} aria-pressed={selected===i} aria-label={labels[i]}><img src={brand.assetRoot+'/images/'+image+'.webp'} alt=""/></button>)}</div></div>
}
