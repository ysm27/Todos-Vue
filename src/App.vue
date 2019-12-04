<template>
  <body>
    <div class="todoapp"  v-cloak>
      <the-header />
      <the-list />
      <the-footer />
    </div>
  </body>
</template>

<script>
import "@/assets/base.css";
import "@/assets/index.css";
import TheHeader from '@/components/TheHeader';
import TheList from '@/components/TheList';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    'the-header': TheHeader,
    'the-list': TheList,
    'the-footer': TheFooter
  }
}
</script>

