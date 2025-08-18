---
layout: doc
---

<script setup>
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

const router = useRouter()

function detectLang() {
  const langs = navigator.languages || [navigator.language]

  for (const l of langs) {
    const lang = l.toLowerCase()
    if (lang.startsWith('zh-cn')) return 'zh-cn'
    if (lang.startsWith('zh-hk') || lang.startsWith('zh-yue') || lang.startsWith('zh-tw')) return 'zh-yue'
    if (lang.startsWith('en')) return 'en-us'
  }
  return 'en-us'
}

onMounted(() => {
  const targetLang = detectLang()
  router.go(`/${targetLang}/`)
})
</script>

<div style="text-align:center;padding-top:5rem;font-size:1.2rem;">
  
</div>
