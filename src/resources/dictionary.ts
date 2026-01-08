import type { Dictionary, DictionaryResource } from '@/typings/index'
import { calcChapterCount } from '@/utils'

// 德语词典
import { germanExam } from './german-config'
/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaryResources: DictionaryResource[] = [
  ...germanExam,

  // {
  //   id: 'zhtest',
  //   name: '中文测试',
  //   description: '中文测试词库',
  //   category: '测试',
  //   url: '/dicts/chinese_test.json',
  //   length: 27,
  //   language: 'zh',
  // },
  // {
  //   id: 'jptest',
  //   name: '日文测试',
  //   description: '日文测试词库',
  //   category: '测试',
  //   url: '/dicts/japanese_test.json',
  //   length: 20,
  //   language: 'ja',
  // },
]

export const dictionaries: Dictionary[] = dictionaryResources.map((resource) => ({
  ...resource,
  chapterCount: calcChapterCount(resource.length),
}))

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, Dictionary> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
