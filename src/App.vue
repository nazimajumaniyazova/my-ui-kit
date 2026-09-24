<script setup lang="ts">
import { ref } from "vue";
import UiButton from "./components/UiButton/UiButton.vue";

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
</template>
