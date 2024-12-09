<script setup lang="ts">

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
        <svg aria-hidden="true" fill="rgb(219, 228, 233)" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z"></path>
        </svg>
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
    <button class="header__menu-button">
      <svg fill="rgb(219, 228, 233)" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.61 19.872a10.013 10.013 0 0 0 6.51-4.035A9.999 9.999 0 0 0 12.275.264c-1.28-.3-2.606-.345-3.903-.132a10.05 10.05 0 0 0-8.25 8.311 9.877 9.877 0 0 0 1.202 6.491l-1.24 4.078a.727.727 0 0 0 .178.721.72.72 0 0 0 .72.19l4.17-1.193A9.87 9.87 0 0 0 9.998 20c.54 0 1.079-.043 1.612-.128ZM1.558 18.458l1.118-3.69-.145-.24A8.647 8.647 0 0 1 1.36 8.634a8.778 8.778 0 0 1 7.21-7.27 8.765 8.765 0 0 1 8.916 3.995 8.748 8.748 0 0 1-2.849 12.09 8.763 8.763 0 0 1-3.22 1.188 8.68 8.68 0 0 1-5.862-1.118l-.232-.138-3.764 1.076ZM6.006 9a1.001 1.001 0 0 0-.708 1.707A1 1 0 1 0 6.006 9Zm4.002 0a1.001 1.001 0 0 0-.195 1.981 1 1 0 1 0 .195-1.98Zm4.003 0a1.001 1.001 0 1 0 0 2.003 1.001 1.001 0 0 0 0-2.003Z"></path>
      </svg>
    </button>
    <RouterLink to="/" class="header__menu-button header__menu-button--create">
      <svg fill="rgb(219, 228, 233)" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>
      </svg>
      <span>Create</span>
    </RouterLink>
    <button class="header__menu-button">
      <svg fill="rgb(219, 228, 233)" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 18h1a2 2 0 0 1-4 0h3Zm8-3.792v.673A1.12 1.12 0 0 1 17.883 16H2.117A1.12 1.12 0 0 1 1 14.881v-.673a3.947 3.947 0 0 1 1.738-3.277A2.706 2.706 0 0 0 3.926 8.7V7.087a6.07 6.07 0 0 1 12.138 0l.01 1.613a2.7 2.7 0 0 0 1.189 2.235A3.949 3.949 0 0 1 19 14.208Zm-1.25 0a2.7 2.7 0 0 0-1.188-2.242A3.956 3.956 0 0 1 14.824 8.7V7.088a4.819 4.819 0 1 0-9.638 0v1.615a3.956 3.956 0 0 1-1.738 3.266 2.7 2.7 0 0 0-1.198 2.239v.542h15.5v-.542Z"></path>
      </svg>
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