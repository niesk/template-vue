import { computed } from 'vue'

/**
 * 统一表格分页配置
 * @param listQuery 查询参数
 * @param totalRef 数据总数
 * @param [options] 分页配置对象（覆盖默认配置）
 */
export function usePagination(listQuery, totalRef, options) {
  return computed(() => ({
    current: listQuery.current,
    pageSize: listQuery.size,
    total: totalRef.value,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条`,
    ...options
  }))
}
