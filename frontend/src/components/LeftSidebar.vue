<script setup lang="ts">
import ScrollablePanel from "@/slots/ScrollablePanel.vue";
</script>

<template>
  <ScrollablePanel class="left-sidebar-panel">
    LeftSidebar
  </ScrollablePanel>
</template>

<style scoped lang="scss">
.left-sidebar-panel {
  color: var(--color--menu-text);
  background: var(--color--menu-background);
}
</style>