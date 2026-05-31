<script setup>
import DefaultTheme from 'vitepress/theme'
import DocFooter from './DocFooter.vue'
import TranslationNotice from './TranslationNotice.vue'
import CosmicToggle from './components/CosmicToggle.vue'
import SnowCanvas from './components/SnowCanvas.vue'
import ScrollProgress from './components/ScrollProgress.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <ClientOnly>
        <SnowCanvas />
      </ClientOnly>
      <ScrollProgress />
    </template>
    <template #nav-bar-content-after>
      <CosmicToggle />
    </template>
    <template #doc-before>
      <TranslationNotice />
    </template>
    <template #doc-after>
      <DocFooter />
    </template>
  </Layout>
</template>
