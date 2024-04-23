<script setup>
import 'dayjs/locale/zh-cn';

import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import {RouterView} from 'vue-router'

dayjs.locale('zh-cn');
</script>

<template>
  <a-config-provider :locale="zhCN" :theme="{
    token: {
      colorPrimary: '#697DFF',
      colorError: '#FF6969',
      colorInfo: '#697DFF'
    }
  }">
    <RouterView/>
  </a-config-provider>
</template>
