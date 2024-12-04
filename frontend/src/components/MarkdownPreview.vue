<script setup lang="ts">
import ScrollablePanel from "@/slots/ScrollablePanel.vue";

import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
</script>

<template>
  <ScrollablePanel class="markdown-preview-panel">
    <!-- <pre class="preview" v-text="dataStore.md_text"></pre> -->
    <div class="preview" v-html="dataStore.html_text"></div>
  </ScrollablePanel>
</template>

<style scoped lang="scss">
.markdown-preview-panel {
  color: var(--color--editor-text);
  background: var(--color--editor-background);
}
</style>