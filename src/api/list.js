import request from '@/utils/request'

/**
 * 获取列表示例
 * @param {SearchBean} data
 */
export function demoList(data) {
  return request({
    url: '/demo/paging',
    method: 'post',
    data
  })
}

/**
 * 新建数据示例
 * @param {DemoBean} data
 */
export function demoAdd(data) {
  return request({
    url: '/demo/save',
    method: 'post',
    data
  })
}

/**
 * 修改数据示例
 * @param {DemoBean} data
 */
export function demoUpdate(data) {
  return request({
    url: '/demo/update',
    method: 'post',
    data
  })
}

/**
 * 批量删除示例
 * @param {string[]} ids 数据id集合
 */
export function demoDeleteBatch(ids) {
  return request({
    url: '/demo/deleteBatch',
    method: 'post',
    data: ids
  })
}

