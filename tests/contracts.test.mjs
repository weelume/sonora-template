import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {createHash} from 'node:crypto'
import {routePath} from '../src/features/site-templates/catalog/sonora/routing.ts'
import {copy} from '../src/features/site-templates/catalog/sonora/content/ui.ts'
import {stories} from '../src/features/site-templates/catalog/sonora/content/stories.ts'
test('同一页面在独立与嵌套挂载点下均生成正确双语路由',()=>{
 assert.equal(routePath('','zh'),'/')
 assert.equal(routePath('','en','journal/slow-listening'),'/en/journal/slow-listening')
 assert.equal(routePath('/mount/site/','en','design'),'/mount/site/en/design')
 assert.equal(routePath('/mount/site','zh','contact'),'/mount/site/contact')
})
test('两种语言的界面字段与文章数量、正文完整',()=>{
 assert.deepEqual(Object.keys(copy.zh).sort(),Object.keys(copy.en).sort())
 assert.equal(new Set(stories.map(story=>story.slug)).size,stories.length)
 for(const story of stories)for(const locale of ['zh','en']){assert.ok(story.title[locale]);assert.ok(story.paragraphs[locale].length>=3)}
})
test('交付素材摘要与实际文件一致',async()=>{
 const manifest=JSON.parse(await readFile(new URL('../.tpl/asset-sources.json',import.meta.url),'utf8'))
 assert.ok(manifest.files.length>5)
 for(const file of manifest.files){const bytes=await readFile(new URL('../'+file.path,import.meta.url));assert.equal(createHash('sha256').update(bytes).digest('hex'),file.sha256,file.path)}
})
