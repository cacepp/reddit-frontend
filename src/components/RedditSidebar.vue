<script setup lang="ts">

</script>

<template>
  <aside class="aside">
    <nav class="aside__navbar">
      <RouterLink to="/" class="aside__navbar-link">
        <svg fill="#FFFFFF" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19.724 6.765-9.08-6.11A1.115 1.115 0 0 0 9.368.647L.276 6.765a.623.623 0 0 0 .35 1.141h.444v10.001c.001.278.113.544.31.74.196.195.462.304.739.303h5.16a.704.704 0 0 0 .706-.707v-4.507c0-.76 1.138-1.475 2.02-1.475.882 0 2.02.715 2.02 1.475v4.507a.71.71 0 0 0 .707.707h5.16c.274-.001.538-.112.732-.307.195-.195.305-.46.306-.736v-10h.445a.618.618 0 0 0 .598-.44.625.625 0 0 0-.25-.702Z"></path></svg>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/" class="aside__navbar-link">
        <svg fill="#FFFFFF" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm0 18.75a8.7 8.7 0 0 1-5.721-2.145l8.471-8.471v4.148H14V6.638A.647.647 0 0 0 13.362 6H7.718v1.25h4.148L3.4 15.721A8.739 8.739 0 1 1 10 18.75Z"></path></svg>
        <span>Popular</span>
      </RouterLink>
      <RouterLink to="/" class="aside__navbar-link">
        <svg fill="#FFFFFF" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18.937 19.672-2.27-2.23A9.917 9.917 0 0 1 10 20a10.032 10.032 0 0 1-7.419-3.297 1.976 1.976 0 0 1-.475-1.418 3.455 3.455 0 0 1 2.173-3.207c.426-.17.881-.255 1.34-.248h2.49a3.569 3.569 0 0 1 3.616 3.504v1.57h-1.25v-1.565a2.313 2.313 0 0 0-2.366-2.256h-2.49a2.243 2.243 0 0 0-2.098 1.388c-.113.275-.17.57-.167.868a.784.784 0 0 0 .143.52A8.778 8.778 0 0 0 10 18.752a8.694 8.694 0 0 0 6.234-2.607l.084-.085v-.72a2.235 2.235 0 0 0-2.218-2.256h-2.361v-1.248H14.1a3.492 3.492 0 0 1 3.464 3.504v1.237l2.245 2.206-.872.89ZM4.63 8.53a2.443 2.443 0 0 1 1.511-2.259A2.45 2.45 0 0 1 9.48 8.053a2.443 2.443 0 0 1-2.401 2.923A2.451 2.451 0 0 1 4.63 8.53Zm1.25 0a1.198 1.198 0 0 0 1.434 1.176 1.2 1.2 0 0 0 .875-1.634 1.2 1.2 0 0 0-2.309.458Zm4.794 0a2.443 2.443 0 0 1 1.511-2.259 2.45 2.45 0 0 1 3.338 1.782 2.443 2.443 0 0 1-2.401 2.923 2.451 2.451 0 0 1-2.448-2.446Zm1.25 0a1.197 1.197 0 0 0 1.434 1.176 1.2 1.2 0 0 0 .875-1.634 1.2 1.2 0 0 0-2.309.458ZM1.25 10.01A8.733 8.733 0 0 1 4.361 3.3a8.753 8.753 0 0 1 10.654-.48 8.745 8.745 0 0 1 3.702 6.406 8.732 8.732 0 0 1-.498 3.756l.714 1.498a9.98 9.98 0 0 0-2.62-12.237A10.005 10.005 0 0 0 .992 5.652a9.98 9.98 0 0 0-.103 8.454l.729-1.598a8.723 8.723 0 0 1-.368-2.497Z"></path></svg>
        <span>Explore</span>
      </RouterLink>
      <RouterLink to="/" class="aside__navbar-link">
        <svg fill="#FFFFFF" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm5 17.171V6h-1.25v11.894a8.66 8.66 0 0 1-2.75.794V10H9.75v8.737A8.684 8.684 0 0 1 6.47 18H7v-4H5.75v3.642a8.753 8.753 0 1 1 9.25-.471Z"></path></svg>
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