<template>
  <a-card class="pageWrapper">
    <div class="search-container">
      <div class="search-container__left">
        <a-input
            class="input"
            v-model:value="listQuery.query.demoName"
            placeholder="示例名称"
            allow-clear
        ></a-input>
        <a-select
            class="input"
            v-model:value="listQuery.query.demoType"
            :options="DEMO_TYPE_OPTIONS"
            placeholder="示例类型"
            allow-clear
        ></a-select>
        <a-button @click="resetQuery()">重置</a-button>
        <a-button type="primary" @click="fetchData(true)">查询</a-button>
      </div>
      <div class="search-container__right">
        <a-button
            type="primary"
            :disabled="!selectedRowKeys.length"
        >
          选择示例
        </a-button>
        <a-button type="primary">
          <template #icon>
            <PlusOutlined/>
          </template>
          新建示例
        </a-button>
        <a-popconfirm
            placement="bottomLeft"
            :disabled="deleting || !selectedRowKeys.length"
            :title="`确定要删除已选 ${selectedRowKeys.length} 项吗？`"
            @confirm="handleDelete"
        >
          <a-button type="primary" :loading="deleting" danger :disabled="!selectedRowKeys.length">
            <template #icon>
              <DeleteOutlined/>
            </template>
            删除示例
          </a-button>
        </a-popconfirm>
      </div>
    </div>
    <a-table
        row-key="id"
        :data-source="list"
        :loading="loading"
        :columns="columns"
        :row-selection="rowSelection"
        :pagination="pagination"
        @change="tableChange"
    >
      <template #bodyCell="{ record, column, index }">
        <template v-if="column.dataIndex === 'order'"
        >{{ (listQuery.current - 1) * listQuery.size + index + 1 }}
        </template>
        <div class="tableOperate" v-if="column.dataIndex === 'operate'">
          <a-button size="small" type="link">修改</a-button>
          <a-divider type="vertical"/>
          <a-popconfirm title="确定删除吗？" @confirm="handleDelete(record.id)">
            <a-button size="small" type="link" danger>删除</a-button>
          </a-popconfirm>
        </div>
      </template>
    </a-table>
  </a-card>
</template>

<script setup>
import {DeleteOutlined, PlusOutlined} from '@ant-design/icons-vue'
import {message} from 'ant-design-vue'
import {computed, nextTick, reactive, ref} from 'vue'
import {watchDebounced} from '@vueuse/core'
import {demoDeleteBatch, demoList} from '@/api/list.js'
import {usePagination} from '@/hooks'
import {DEMO_TYPE_OPTIONS} from '@/utils/dict.js'

defineOptions({name: 'DemoList'})

const loading = ref(true)
const deleting = ref(false)
const list = ref()
const listQuery = reactive({
  current: 1,
  size: 10,
  query: {
    demoName: '',
    demoType: undefined
  }
})
const total = ref(0)
const pagination = usePagination(listQuery, total)
const columns = [
  {title: '序号', key: 'order', dataIndex: 'order', width: 80},
  {title: '示例名称', key: 'demoName', dataIndex: 'demoName'},
  {title: '示例类型', key: 'demoType', dataIndex: 'demoType'},
  {title: '创建时间', key: 'createTime', dataIndex: 'createTime'},
  {title: '修改时间', key: 'updateTime', dataIndex: 'updateTime'},
  {title: '操作', key: 'operate', dataIndex: 'operate', width: 220}
]
const selectedRowKeys = ref([])

const rowSelection = computed(() => {
  return {
    selectedRowKeys: selectedRowKeys.value,
    onChange: (rowKeys) => {
      selectedRowKeys.value = rowKeys
    }
  }
})

function fetchData(isRefresh) {
  if (isRefresh) listQuery.current = 1
  loading.value = true
  demoList(listQuery)
      .then((res) => {
        list.value = res.data.records
        total.value = res.data.total
      })
      .finally(() => {
        nextTick(() => {
          loading.value = false
        })
      })
}

function resetQuery() {
  listQuery.query.demoName = ''
  listQuery.query.demoType = undefined
  fetchData(true)
}

function tableChange(pagination) {
  listQuery.current = pagination.current
  listQuery.size = pagination.pageSize
  fetchData()
}

function handleDelete(id) {
  deleting.value = true
  loading.value = true
  demoDeleteBatch(id ? [id] : selectedRowKeys.value)
      .then(() => {
        message.success('删除成功')
        fetchData(true)
      })
      .catch(() => {
        loading.value = false
      })
      .finally(() => {
        deleting.value = false
      })
}

watchDebounced(
    () => listQuery.query.demoName,
    () => {
      fetchData(true)
    },
    {debounce: 500}
)

fetchData()
</script>

<style scoped lang="scss"></style>
