<script setup>
import { useData } from 'vitepress'

const { lang } = useData()
</script>

<template>
  <div v-if="lang === 'en'" class="translation-notice">
    <p>
      This is a community translation of the original Chinese text.
      The translation may contain inaccuracies.
      When in doubt, please refer to the
      <a :href="$frontmatter.originalLink || '/'" target="_blank">original Chinese version</a>.
    </p>
  </div>
</template>

<style scoped>
.translation-notice {
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 4px;
  padding: 12px 16px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
}

.translation-notice p {
  margin: 0;
}

.translation-notice a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.translation-notice a:hover {
  text-decoration: underline;
}
</style>
