import type { Dictionary, DictionaryResource } from '@/typings/index'
import { calcChapterCount } from '@/utils'

// 德语词典
const germanExam: DictionaryResource[] = [
  {
    "id": "lektion01",
    "name": "Daf Leicht",
    "description": "Lektion01",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion01.json",
    "length": 80,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion02",
    "name": "Daf Leicht",
    "description": "Lektion02",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion02.json",
    "length": 104,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion03",
    "name": "Daf Leicht",
    "description": "Lektion03",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion03.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion04",
    "name": "Daf Leicht",
    "description": "Lektion04",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion04.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion05",
    "name": "Daf Leicht",
    "description": "Lektion05",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion05.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion06",
    "name": "Daf Leicht",
    "description": "Lektion06",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion06.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion07",
    "name": "Daf Leicht",
    "description": "Lektion07",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion07.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion08",
    "name": "Daf Leicht",
    "description": "Lektion08",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion08.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion09",
    "name": "Daf Leicht",
    "description": "Lektion09",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion09.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion10",
    "name": "Daf Leicht",
    "description": "Lektion10",
    "category": "德语学习",
    "tags": [
      "A1"
    ],
    "url": "/dicts/Lektion10.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion11",
    "name": "Daf Leicht",
    "description": "Lektion11",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion11.json",
    "length": 100,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion12",
    "name": "Daf Leicht",
    "description": "Lektion12",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion12.json",
    "length": 107,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion13",
    "name": "Daf Leicht",
    "description": "Lektion13",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion13.json",
    "length": 86,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion14",
    "name": "Daf Leicht",
    "description": "Lektion14",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion14.json",
    "length": 99,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion15",
    "name": "Daf Leicht",
    "description": "Lektion15",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion15.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion16",
    "name": "Daf Leicht",
    "description": "Lektion16",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion16.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion17",
    "name": "Daf Leicht",
    "description": "Lektion17",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion17.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion18",
    "name": "Daf Leicht",
    "description": "Lektion18",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion18.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion19",
    "name": "Daf Leicht",
    "description": "Lektion19",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion19.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  },
  {
    "id": "lektion20",
    "name": "Daf Leicht",
    "description": "Lektion20",
    "category": "德语学习",
    "tags": [
      "A2"
    ],
    "url": "/dicts/Lektion20.json",
    "length": 0,
    "language": "de",
    "languageCategory": "de"
  }
]


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
