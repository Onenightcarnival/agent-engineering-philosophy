import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './styles/cosmic.css'

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
