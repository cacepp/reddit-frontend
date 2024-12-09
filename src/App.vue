<script setup lang="ts">
import { RouterView } from 'vue-router'
import RedditHeader from '@/components/RedditHeader.vue'
import RedditSidebar from '@/components/RedditSidebar.vue'


</script>

<template>
  <div class="app-container">
    <RedditHeader/>
    <div class="app-container__main-content">
      <RedditSidebar/>
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  font-family: "IBM Plex Sans Regular", sans-serif;
  color: #EEF1F3;

  &__main-content {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 57px);
    max-height: calc(100vh - 57px);
  }
}
</style>
