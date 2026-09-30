<script setup lang="ts">
import { ref } from "vue";
import UiButton from "./components/UiButton/UiButton.vue";
import UiIconButton from "./components/UiIconButton/UiIconButton.vue";
import UiInput from "./components/UiInput/UiInput.vue";

const saving = ref(false);

function save() {
  saving.value = true;
  setTimeout(() => (saving.value = false), 2000);
}
</script>

<template>
  <UiButton
    variant="primary"
    size="lg"
    type="button"
    :loading="saving"
    @click="save"
  >
    Кнопка
  </UiButton>

  <UiIconButton label="Закрыть" variant="danger">
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="2" />
    </svg>
  </UiIconButton>

  <UiInput
    type="text"
    :required="true"
    :hint="true"
    hintText="hint text"
    :errorMessage="true"
    errorMessageText="error text"
  >
    тестовый текст
  </UiInput>
</template>
