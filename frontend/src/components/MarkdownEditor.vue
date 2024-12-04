<script setup lang="ts">
import ScrollablePanel from "@/slots/ScrollablePanel.vue";

import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();

const onEditorInput = (event: InputEvent) => {
  // Get the editor element and the inner text
  const editor = event.target as HTMLElement;
  const md_text_raw = editor.innerText;

  // Remove all line breaks and replace them with a single line break
  const md_text = md_text_raw.replace(/\n\n/g, "\n");

  // Update the markdown text in the data store
  dataStore.setMDText(md_text);
};
</script>

<template>
  <ScrollablePanel class="markdown-editor-panel">
    <div class="editor" contenteditable @input="onEditorInput" spellcheck="false"></div>
  </ScrollablePanel>
</template>

<style scoped lang="scss">
.markdown-editor-panel {
  color: var(--color--editor-text);
  background: var(--color--editor-background);
  
  .editor {
    font-family: var(--font--code);
    font-size: 1.2em;
    line-height: 1.5;
  }
}
</style>