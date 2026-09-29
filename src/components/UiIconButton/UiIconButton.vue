<script setup lang="ts">
import { computed } from "vue";
import UiButton from "../UiButton/UiButton.vue";
import type { IconButtonProps } from "./UiIconButton.types";

const props = withDefaults(defineProps<IconButtonProps>(), {
  variant: "ghost",
});

const buttonProps = computed(() => {
  const { label, ...rest } = props;
  return rest;
});
</script>

<template>
  <UiButton
    v-bind="buttonProps"
    class="ui-icon-button"
    :loading-text="label"
    :aria-label="label"
    :title="label"
  >
    <slot />
  </UiButton>
</template>
<style>
.ui-button.ui-icon-button {
  width: var(--ui-control-height-md);
  padding: 0;
}

.ui-button.ui-icon-button.ui-button--sm {
  width: var(--ui-control-height-sm);
}

.ui-button.ui-icon-button.ui-button--lg {
  width: var(--ui-control-height-lg);
}
</style>
