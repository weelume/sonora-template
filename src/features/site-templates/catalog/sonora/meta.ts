import type {SiteTemplate} from '../../types'
export const sonoraTemplate:SiteTemplate={...{
  "id": "sonora",
  "name": "Sonora · 自然家居音响",
  "localizedNames": {
    "zh": "Sonora · 自然家居音响",
    "en": "Sonora · Considered home audio"
  },
  "sceneId": "corporate-site",
  "listed": false,
  "tags": [
    "家居音响",
    "自然材质",
    "暖色极简",
    "产品图库",
    "中英文",
    "PC / iPad / H5"
  ],
  "summary": "自然材质与柔和日光构成的双语音响品牌模板，包含产品图库、声音与设计介绍、生活日志、FAQ 与本地演示表单。",
  "accentColor": "#93826b",
  "cover": "/templates/sonora/screenshots/desktop-home.webp",
  "screenshots": [
    {
      "src": "/templates/sonora/screenshots/desktop-home.webp",
      "alt": "Sonora desktop home",
      "device": "desktop",
      "width": 1037,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/desktop-sound.webp",
      "alt": "Sonora desktop sound",
      "device": "desktop",
      "width": 1037,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/desktop-journal.webp",
      "alt": "Sonora desktop journal",
      "device": "desktop",
      "width": 1037,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/desktop-contact.webp",
      "alt": "Sonora desktop contact",
      "device": "desktop",
      "width": 1037,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/tablet-home.webp",
      "alt": "Sonora tablet home",
      "device": "tablet",
      "width": 509,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/tablet-sound.webp",
      "alt": "Sonora tablet sound",
      "device": "tablet",
      "width": 509,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/tablet-journal.webp",
      "alt": "Sonora tablet journal",
      "device": "tablet",
      "width": 509,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/tablet-contact.webp",
      "alt": "Sonora tablet contact",
      "device": "tablet",
      "width": 509,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/mobile-home.webp",
      "alt": "Sonora mobile home",
      "device": "mobile",
      "width": 333,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/mobile-sound.webp",
      "alt": "Sonora mobile sound",
      "device": "mobile",
      "width": 333,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/mobile-journal.webp",
      "alt": "Sonora mobile journal",
      "device": "mobile",
      "width": 333,
      "height": 720
    },
    {
      "src": "/templates/sonora/screenshots/mobile-contact.webp",
      "alt": "Sonora mobile contact",
      "device": "mobile",
      "width": 333,
      "height": 720
    }
  ]
},surfaces:[{id:'site',name:'音响品牌官网',platform:'pc',locales:['zh','en'],pages:[{slug:"",title:"首页",localizedTitles:{en:"Home"},load:()=>import('./pages/HomePage')},
{slug:"speakers",title:"音响",localizedTitles:{en:"Speakers"},load:()=>import('./pages/ProductPage')},
{slug:"sound",title:"声音",localizedTitles:{en:"Sound"},load:()=>import('./pages/SoundPage')},
{slug:"design",title:"设计",localizedTitles:{en:"Design"},load:()=>import('./pages/DesignPage')},
{slug:"about",title:"关于",localizedTitles:{en:"About"},load:()=>import('./pages/AboutPage')},
{slug:"journal",title:"日志",localizedTitles:{en:"Journal"},load:()=>import('./pages/JournalPage')},
{slug:"journal/slow-listening",title:"安静聆听",localizedTitles:{en:"Quiet listening"},load:()=>import('./pages/ListeningPage')},
{slug:"journal/natural-materials",title:"自然材质",localizedTitles:{en:"Natural materials"},load:()=>import('./pages/MaterialsPage')},
{slug:"journal/a-place-for-sound",title:"空间里的声音",localizedTitles:{en:"A place for sound"},load:()=>import('./pages/PlacementPage')},
{slug:"contact",title:"联系",localizedTitles:{en:"Contact"},load:()=>import('./pages/ContactPage')},
{slug:"faq",title:"常见问题",localizedTitles:{en:"FAQ"},load:()=>import('./pages/FaqPage')},
{slug:"privacy",title:"隐私说明",localizedTitles:{en:"Privacy"},load:()=>import('./pages/PrivacyPage')},
{slug:"terms",title:"使用条款",localizedTitles:{en:"Terms"},load:()=>import('./pages/TermsPage')}]}]}
