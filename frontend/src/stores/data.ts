import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';

import markdownit from 'markdown-it';
const md = markdownit();


export const useDataStore = defineStore('data', () => {
  const md_text: Ref<string> = ref('');
  
  const setMDText = (text: string) => {
    md_text.value = text;
  }

  const html_text = computed(() => {
    return md.render(md_text.value);
  });

  return { md_text, setMDText, html_text };
})
