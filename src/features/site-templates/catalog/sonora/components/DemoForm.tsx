'use client'
import {useId,useState,type FormEvent} from 'react'
import type {TemplateLocale} from '../../../types'
import {copy} from '../content/ui'
export function DemoForm({locale,compact=false}:{locale:TemplateLocale;compact?:boolean}){
 const t=copy[locale],id=useId();const [sent,setSent]=useState(false)
 function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setSent(true)}
 return <form className={compact?'sn-subscription':'sn-contact-form'} onSubmit={submit} onChange={()=>setSent(false)}>
  {compact?<label htmlFor={id}>{t.newsletter}</label>:<label>{t.name}<input autoComplete="name" required name="name" maxLength={80}/></label>}
  {compact?<div className="sn-subscribe-row"><input id={id} required name="email" type="email" autoComplete="email" placeholder={t.email} aria-label={t.email}/><button type="submit" aria-label={t.newsletter}>+</button></div>:<><label>{t.email}<input required name="email" type="email" autoComplete="email" maxLength={254}/></label><label>{t.message}<textarea required name="message" rows={5} maxLength={2000}/></label><button className="sn-button" type="submit">{t.submit}</button></>}
  <p className="sn-form-status" role="status">{sent?t.sent:t.newsletterNote}</p>
 </form>
}
