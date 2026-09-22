<script setup lang="ts">
import type { ButtonProps } from "./UiButton.types";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "sm",
  disabled: false,
  type: "button",
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

function handleClick(e: MouseEvent) {
  if (props.disabled || props.loading) return;
  emit("click", e);
}
</script>

<template>
  <button
    :class="['ui-button', `ui-button--${variant}`, `ui-button--${size}`]"
    :disabled="disabled || loading"
    :type="type"
    :aria-busy="loading || undefined"
    @click="handleClick"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>

<style>
.ui-button {
  --_bg: var(--ui-color-surface);
  --_bg-hover: var(--ui-color-surface-hover);
  --_color: var(--ui-color-text);
  --_border: var(--ui-color-border-strong);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ui-space-2);
  height: var(--ui-control-height-md);
  padding: 0 var(--ui-space-4);
  border: 1px solid var(--_border);
  border-radius: var(--ui-radius-sm);
  background: var(--_bg);
  color: var(--_color);
  font-family: var(--ui-font-sans);
  font-size: var(--ui-font-size-md);
  font-weight: var(--ui-font-weight-medium);
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition:
    background-color var(--ui-duration-fast) var(--ui-easing-standard),
    border-color var(--ui-duration-fast) var(--ui-easing-standard);
}

.ui-button:hover:not(:disabled) {
  background: var(--_bg-hover);
}

.ui-button:active:not(:disabled) {
  transform: translateY(1px);
}

.ui-button:focus-visible {
  outline: 2px solid var(--ui-color-focus-ring);
  outline-offset: 2px;
}

.ui-button:disabled:not([aria-busy="true"]) {
  background: var(--ui-color-surface-sunken);
  border-color: var(--ui-color-border);
  color: var(--ui-color-text-disabled);
  cursor: not-allowed;
}

.ui-button[aria-busy="true"] {
  cursor: progress;
}

.ui-button--primary {
  --_bg: var(--ui-color-primary);
  --_bg-hover: var(--ui-color-primary-hover);
  --_color: var(--ui-color-on-primary);
  --_border: transparent;
}

.ui-button--ghost {
  --_bg: transparent;
  --_bg-hover: var(--ui-color-surface-hover);
  --_border: transparent;
}

.ui-button--danger {
  --_bg: var(--ui-color-danger);
  --_bg-hover: var(--ui-color-danger-hover);
  --_color: var(--ui-color-on-danger);
  --_border: transparent;
}

.ui-button--sm {
  height: var(--ui-control-height-sm);
  padding: 0 var(--ui-space-3);
  font-size: var(--ui-font-size-sm);
}

.ui-button--lg {
  height: var(--ui-control-height-lg);
  padding: 0 var(--ui-space-5);
  font-size: var(--ui-font-size-lg);
}
</style>
