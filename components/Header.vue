
<template>
  <d-column
    class="wrapper"
    gap
  >
    <d-card-title class="header-text">
      {{ site.title }}
    </d-card-title>
    <d-row justify="center">
      <d-image
        :src="themeConfig.logo.toString()"
        height="100%"
        rounded="none"
        width="30vw"
      />
    </d-row>
  </d-column>
</template>

<script lang="ts" setup>
import {useData} from "vitepress";
import {DCardTitle, DColumn, DImage, DRow} from "vuelize";

const {site} = useData()
const {themeConfig} = site.value;

</script>

<style lang="scss" scoped>
.wrapper {
    align-items: center;
    padding: 20px !important;

    .header-text {
        font-size: 16vh;
        text-transform: uppercase;
        letter-spacing: 1.5rem;
        font-weight: bold;
        text-decoration: underline overline;
        text-decoration-color: var(--color-accent);
        text-underline-offset: 30px;

        background: linear-gradient(to right, var(--color-primary), var(--color-error), var(--color-warning), var(--color-info));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
</style>
