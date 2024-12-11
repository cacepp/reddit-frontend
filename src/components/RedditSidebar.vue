<script setup lang="ts">

import IconHome from '@/components/UI/icons/IconHome.vue'
import IconPopular from '@/components/UI/icons/IconPopular.vue'
import IconExplore from '@/components/UI/icons/IconExplore.vue'
import IconAll from '@/components/UI/icons/IconAll.vue'
</script>

<template>
  <aside class="aside">
    <nav class="aside__navbar">
      <RouterLink to="/" class="aside__navbar-link">
        <IconHome/>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/" class="aside__navbar-link">
        <IconPopular/>
        <span>Popular</span>
      </RouterLink>
      <RouterLink to="/" class="aside__navbar-link">
        <IconExplore/>
        <span>Explore</span>
      </RouterLink>
      <RouterLink to="/" class="aside__navbar-link">
        <IconAll/>
        <span>All</span>
      </RouterLink>
      <div style="width: 200px; height: 200px"></div>
      <div style="width: 200px; height: 200px"></div>
      <div style="width: 200px; height: 200px"></div>
      <div style="width: 200px; height: 200px"></div>
      <div style="width: 200px; height: 200px"></div>
      <div style="width: 200px; height: 200px"></div>
      <div style="width: 200px; height: 200px"></div>
      <div style="width: 200px; height: 200px"></div>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  width: 270px;
  height: 100%;
  align-self: flex-start;
  border-right: 1px #3d4143 solid;
  padding: 0 16px;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #2a3235;
    border-radius: 20px;
    border: 2px #0d1113 solid;
  }

  &__navbar {
    padding-top: 16px;
    display: flex;
    flex-direction: column;

    &-link {
      min-height: 40px;
      border-radius: 10px;
      padding: 4px 16px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      user-select: none;

      &:hover {
        background-color: rgba(51, 61, 66, 0.4);
      }

      & svg {
        max-width: 20px;
        min-width: 20px;
        width: 20px;
        max-height: 20px;
        min-height: 20px;
        height: 20px;
      }

      & span {
        margin-left: 10px;
      }
    }
  }
}
</style>