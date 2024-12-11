<script setup lang="ts">

import IconSearch from '@/components/UI/icons/IconSearch.vue'
import IconCreate from '@/components/UI/icons/IconCreate.vue'
import IconNotification from '@/components/UI/icons/IconNotification.vue'
</script>

<template>
<header class="header">
  <RouterLink to="/" class="header__logo">
    <img src="/RedditLogo.svg" alt="logo" class="header__logo-image" draggable="false" select-none="none"/>
    <img src="/RedditLogo-Word.svg" alt="logo-word" class="header__logo-word" draggable="false" select-none="none"/>
  </RouterLink>

  <search class="header__search">
    <label for="header-search-input">
      <span class="leadingIcon">
        <IconSearch/>
      </span>
      <input
        type="text"
        placeholder="Search Reddit"
        id="header-search-input"
        autocomplete="off"
      />
    </label>
  </search>

  <div class="header__menu">
    <RouterLink to="/" class="header__menu-button header__menu-button--create">
      <IconCreate/>
      <span>Create</span>
    </RouterLink>
    <button class="header__menu-button">
      <IconNotification/>
    </button>
    <button class="header__menu-button header__menu-button--user">
      <span>
        <img src="https://styles.redditmedia.com/t5_5fa65t/styles/profileIcon_snoo368db969-1924-4a2f-93cc-8526c6cc297d-headshot.png?width=128&amp;height=128&amp;frame=1&amp;auto=webp&amp;crop=128:128,smart&amp;s=85a4d5c5ca969a32c824e00686ddfa2f7f34c633" alt="User Avatar" height="32px" width="32px">
      </span>
    </button>
  </div>
</header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 57px;
  background-color: #0d1113;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px #3d4143 solid;

  &__logo {
    width: 116px;
    min-width: 116px;
    max-width: 116px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-image {
      width: 32px;
      height: 32px;
    }

    &-word {
      width: 76px;
      height: 22px;
    }
  }

  &__search {
    height: 40px;
    max-width: 560px;
    min-width: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #2a3235;
    border-radius: 20px;
    margin: 0 16px;

    & label {
      width: 100%;
      height: 100%;
      padding: 0 16px;
      display: flex;
      align-items: center;
      cursor: default;
    }

    & input {
      width: 100%;
      font-size: 14px;
      font-family: "Segoe UI", sans-serif;
      font-weight: 400;
      color: #EEF1F3;

      &::placeholder {
        color: #8BA2AD;
      }
    }

    & .leadingIcon {
      margin-right: 8px;
      width: 16px;
      height: 16px;

      & svg {
        max-width: 16px;
        min-width: 16px;
        width: 16px;
        max-height: 16px;
        min-height: 16px;
        height: 16px;
      }
    }

    &:hover {
      background-color: #333D42;
    }
  }

  &__menu {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 24px;

    & svg {
      width: 20px;
      max-width: 20px;
      min-width: 20px;
      height: 20px;
      max-height: 20px;
      min-height: 20px;
    }

    & img {
      border-radius: 20px;
    }

    &-button {
      min-width: 40px;
      min-height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;

      &:hover {
        background-color: #333D42;
      }

      &--create {
        display: flex;
        justify-content: space-between;
        width: 95px;
        padding: 0 14px 0 10px;

        & span {
          font-size: 14px;
          font-family: "Segoe UI", sans-serif;
          color: #EEF1F3;
        }
      }

      &--user {
        margin-left: 8px;

        & span {
          background: linear-gradient(0deg, rgba(162,162,162,1) 0%, rgb(83, 13, 255) 70%);
          border-radius: 20px;
        }
      }
    }
  }
}
</style>