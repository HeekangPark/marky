<script setup lang="ts">
import { Pane } from 'splitpanes';
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import 'overlayscrollbars/overlayscrollbars.css';
</script>

<template>
  <Pane class="pane">
    <OverlayScrollbarsComponent defer class="overlay-scrollbar">
      <div class="flexbox">
        <slot></slot>
      </div>
    </OverlayScrollbarsComponent>
  </Pane>
</template>

<style scoped lang="scss">
.pane {
  height: 100%;
  width: 100%;
  padding: var(--spacing--small);

  .overlay-scrollbar {
    height: 100%;
    width: 100%;

    .flexbox {

      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;

      >* {
        flex-shrink: 1;
        flex-grow: 1;
      }
    }
  }
}
</style>