<script setup lang="ts">
import type { InputProps } from "./UiInput.types";

withDefaults(defineProps<InputProps>(), {
  label: "",
  placeholder: "",
  disabled: false,
  required: false,
  hint: false,
  hintText: "",
  errorMessage: false,
  errorMessageText: "",
});

const model = defineModel<string>({ default: "" });
</script>
<template>
  <div class="ui-field">
    <label class="ui-input">
      <slot />
      <input
        v-model="model"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        :required="required"
      />
      <span v-if="hint" class="hint">{{ hintText }}</span>
      <span v-if="errorMessage" class="error-text">{{ errorMessageText }}</span>
    </label>
  </div>
</template>

<style>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: var(--ui-space-1);
  font-family: var(--ui-font-sans);
}

.ui-field__label {
  font-size: var(--ui-font-size-sm);
  font-weight: var(--ui-font-weight-medium);
  color: var(--ui-color-text);
}

.ui-field__required {
  color: var(--ui-color-danger);
  margin-inline-start: 2px;
}

.ui-field__message {
  font-size: var(--ui-font-size-xs);
  color: var(--ui-color-text-muted);
  line-height: var(--ui-line-height-normal);
}

.ui-field__message--error {
  color: var(--ui-color-danger);
}

.ui-input {
  --_border: var(--ui-color-border);

  display: flex;
  align-items: center;
  gap: var(--ui-space-2);
  height: var(--ui-control-height-md);
  padding-inline: var(--ui-space-3);
  border: 1px solid var(--_border);
  border-radius: var(--ui-radius-sm);
  background: var(--ui-color-surface);
  color: var(--ui-color-text);
  transition:
    border-color var(--ui-duration-fast) var(--ui-easing-standard),
    box-shadow var(--ui-duration-fast) var(--ui-easing-standard);
}

.ui-input:hover:not(.ui-input--disabled) {
  --_border: var(--ui-color-border-strong);
}

.ui-input:focus-within {
  --_border: var(--ui-color-focus-ring);
  box-shadow: 0 0 0 3px var(--ui-color-primary-subtle);
}

.ui-input--error {
  --_border: var(--ui-color-danger);
}

.ui-input--error:focus-within {
  box-shadow: 0 0 0 3px var(--ui-color-danger-subtle);
}

.ui-input--disabled {
  background: var(--ui-color-surface-sunken);
  color: var(--ui-color-text-disabled);
  cursor: not-allowed;
}

.ui-input--sm {
  height: var(--ui-control-height-sm);
  padding-inline: var(--ui-space-2);
}

.ui-input--lg {
  height: var(--ui-control-height-lg);
  padding-inline: var(--ui-space-4);
}

.ui-input__control {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: none;
  color: inherit;
  font-family: inherit;
  font-size: var(--ui-font-size-md);
  line-height: 1;
}

.ui-input--sm .ui-input__control {
  font-size: var(--ui-font-size-sm);
}

.ui-input--lg .ui-input__control {
  font-size: var(--ui-font-size-lg);
}

.ui-input__control::placeholder {
  color: var(--ui-color-text-subtle);
}

.ui-input__control:disabled {
  cursor: not-allowed;
}

.ui-input__affix {
  display: inline-flex;
  align-items: center;
  color: var(--ui-color-text-muted);
  flex-shrink: 0;
}
</style>
