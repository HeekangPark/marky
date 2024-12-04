<script setup lang="ts">
import { Splitpanes } from 'splitpanes';
import LeftSidebar from '@/components/LeftSidebar.vue';
import MarkdownEditor from '@/components/MarkdownEditor.vue';
import MarkdownPreview from '@/components/MarkdownPreview.vue';
</script>

<template>
  <div class="app">
    <div class="header">header</div>
    <Splitpanes class="body vscode-theme" :dbl-click-splitter="false" :push-other-panes="false">
      <LeftSidebar></LeftSidebar>
      <MarkdownEditor></MarkdownEditor>
      <MarkdownPreview></MarkdownPreview>
    </Splitpanes>
    <div class="footer">footer</div>
  </div>
</template>

<style lang="scss" src="@/styles/variables.scss"></style>
<style lang="scss" src="@/styles/fonts.scss"></style>
<style lang="scss" src="@/styles/reset.scss"></style>
<style lang="scss" src="@/styles/splitpanes.scss"></style>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .header {
    flex-shrink: 0;
    flex-grow: 0;

    color: var(--color--menu-text);
    background: var(--color--menu-background);

    padding: var(--spacing--small);

    border: {
      bottom: 1px solid var(--color--border-line);
    }
  }

  .body {
    flex-shrink: 1;
    flex-grow: 1;
    overflow: hidden;
  }

  .footer {
    flex-shrink: 0;
    flex-grow: 0;

    color: var(--color--menu-text);
    background: var(--color--menu-background);

    padding: var(--spacing--small);

    border: {
      top: 1px solid var(--color--border-line);
    }
  }
}
</style>