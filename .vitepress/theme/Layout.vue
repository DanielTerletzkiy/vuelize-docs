<script lang="ts" setup>
import {author, repository} from "../../package.json"
import {computed, onMounted, ref} from "vue";
import {Content, useData, useRoute} from 'vitepress'
import {
  DAccordion,
  DButton,
  DCard,
  DCardSubtitle,
  DCardTitle,
  DColumn,
  DDivider,
  DIcon,
  DImage,
  DImageDiffuse,
  DList,
  DListItem,
  DNavigationBar,
  DRoot,
  DRow,
  DSpacer,
  DToolbar,
  Rounded,
  ThemeColorProperty,
  ThemeSheetProperty
} from "vuelize";

// https://vitepress.dev/reference/runtime-api#usedata
const {site, page} = useData()
const {themeConfig} = site.value;
const {sidebar} = themeConfig;

const route = useRoute();

const repo = computed(() => repository)
const creator = computed(() => author)
//const versionText = computed(() => version)

const accordionMap = ref<Map<string, boolean>>(new Map())

onMounted(() => {
  sidebar.forEach((group) => accordionMap.value.set(group.text, !group.collapsed))
})

</script>

<template>
  <d-root>
    <template v-slot:toolbar>
      <d-toolbar>
        <d-row :wrap="false" align="center" class="pl-2" glow height="50px" link="/vuelize/"
               width="max-content"
        >
          <d-image :src="themeConfig.logo.toString()" class="logo" height="calc(100% - 10px)"
                   rounded="none"
          />
          <d-column :wrap="false" height="50px">
            <d-card-title class="font-size-medium pt-0">{{ site.title }}</d-card-title>
            <d-card-subtitle class="pb-0">{{ site.description }}</d-card-subtitle>
          </d-column>
        </d-row>
        <d-divider class="mx-2" height="50%" vertical/>
        <d-spacer/>
        <d-divider class="mx-2" height="50%" vertical/>
        <d-button :color="ThemeColorProperty.warning" :link="repo.url" glow target="_blank">
          <template v-slot:prefix>
            <d-icon name="line-md:github-loop"/>
          </template>
          Github
        </d-button>
      </d-toolbar>
    </template>
    <template v-slot:navbar>
      <d-navigation-bar permanent>
        <d-accordion v-for="group in sidebar" :model-value="accordionMap.get(group.text)"
                     remove-padding @update:model-value="(value)=>accordionMap.set(group.text,value)"
        >
          <template v-slot:header>
            <d-card-subtitle style="user-select: none;" width="100%">
              {{ group.text }}
              <d-divider block/>
            </d-card-subtitle>
          </template>
          <d-list v-model="route.path" :color="ThemeColorProperty.primary" class="pa-0" mandatory>
            <d-list-item v-for="item in group.items" :key="`/vuelize${item.link}`"
                         :link="`/vuelize${item.link}`"
            >
              {{ item.text }}
            </d-list-item>
          </d-list>
        </d-accordion>
      </d-navigation-bar>
    </template>
    <d-column class="vp-doc pa-8">
      <Content/>
    </d-column>
    <template v-slot:footer>
      <d-card :rounded="Rounded.none" block elevation="n6" height="400px">
        <d-row align="center" height="100%" justify="space-evenly">
          <d-column :wrap="false" class="banner" elevation="n3" gap glow height="300px" no-padding
                    width="250px"
          >
            <d-spacer/>
            <d-image-diffuse :rounded="Rounded.xl" :src="themeConfig.logo.toString()"
                             blur-amount="100px"
                             width="100%"
            />
            <d-spacer/>
            <d-row class="mb-10" justify="center">
              <d-column :wrap="false" height="50px">
                <d-card-title class="font-size-large pt-0">{{ site.title }}</d-card-title>
                <d-card-subtitle class="pb-0">{{ site.description }}</d-card-subtitle>
              </d-column>
            </d-row>
          </d-column>
          <d-row gap width="max-content" align="start">
            <d-column :rounded="Rounded.xl" outlined no-padding width="max-content">
              <d-card-title class="font-size-medium font-weight-bold" elevation="n1">
                Author
              </d-card-title>
              <d-row class="pa-4" justify="start">
                <d-divider :color="{
                map: [
                    {
                      color: ThemeColorProperty.accent,
                      property: ThemeSheetProperty.card
                    }
                ]
              }" block size="4px" vertical
                />
                <d-column>
                  <d-card-title class="font-size-medium">
                    {{ creator.name }}
                  </d-card-title>
                  <d-card-subtitle>
                    Name
                  </d-card-subtitle>
                  <d-card-title
                      class="font-size-medium"
                      :link="`mailto:${creator.email}?subject=${site.title} Feedback&body=Message`"
                      no-padding
                  >
                    {{ creator.email }}
                  </d-card-title>
                  <d-card-subtitle>
                    E-Mail
                  </d-card-subtitle>
                  <d-card-title :link="creator.url" class="font-size-medium">
                    {{ creator.url }}
                  </d-card-title>
                  <d-card-subtitle>
                    URL
                  </d-card-subtitle>
                </d-column>
              </d-row>
            </d-column>
            <d-column :rounded="Rounded.xl" outlined no-padding width="max-content">
              <d-card-title class="font-size-medium font-weight-bold" elevation="n1">
                Made with
              </d-card-title>
              <d-row class="pa-4" justify="starts">
                <d-divider :color="{
                map: [
                    {
                      color: ThemeColorProperty.secondary,
                      property: ThemeSheetProperty.card
                    }
                ]
              }" block size="4px" vertical
                />
                <d-column no-padding>
                  <d-card-title class="font-size-medium">
                    VitePress
                  </d-card-title>
                  <d-card-subtitle>
                    Docs
                  </d-card-subtitle>
                  <d-card-title class="font-size-medium">
                    Vite
                  </d-card-title>
                  <d-card-subtitle>
                    Engine
                  </d-card-subtitle>
                </d-column>
              </d-row>
            </d-column>
          </d-row>
        </d-row>
      </d-card>
    </template>
  </d-root>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
}

.banner {
  overflow: hidden;
}
</style>
