/* eslint-disable no-undef */
import generateApi from '@cqfe/generate-api'
import { resolve } from 'node:path'

generateApi.default({
  // swagger json文件路径（可以是http(s)://xxx）
  url: 'https://pub-1252165219.cos.ap-chongqing.myqcloud.com/v2.json',
  // 输出api js文件路径
  outPut: resolve(process.cwd(), 'src/api/demo-api.js'),
  // 基础service路径，用作string写入模板
  servicePath: '@/utils/request'
})
