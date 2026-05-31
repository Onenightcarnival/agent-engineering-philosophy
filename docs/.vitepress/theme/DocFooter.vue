<script setup>
import { useData } from 'vitepress'

const { lang } = useData()
</script>

<template>
  <div class="doc-footer-license">
    <p v-if="lang === 'zh-CN'">
      采用
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>
      许可协议 | Copyright &copy; 2026 Chao Li
    </p>
    <p v-else>
      Licensed under
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>
      | Copyright &copy; 2026 Chao Li
    </p>
  </div>
</template>

<style scoped>
.doc-footer-license {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 20px;
  margin-top: 16px;
  text-align: center;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.doc-footer-license a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.doc-footer-license a:hover {
  text-decoration: underline;
}
</style>
