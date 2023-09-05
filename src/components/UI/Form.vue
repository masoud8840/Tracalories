<template>
  <form :class="`form form-${props.variant}`">
    <v-input
      v-for="(input, index) in props.inputs"
      :key="index"
      :name="input.name"
      :placeholder="input.placeholder"
    />
    <button type="submit">
      {{ props.buttonLabel }}
    </button>
  </form>
</template>

<script setup>
import VInput from "./VInput.vue";
const props = defineProps({
  buttonLabel: {
    type: String,
    default: "Add",
  },
  variant: {
    type: String,
    default: "",
  },
  inputs: {
    type: Array,
    default: [],
  },
});
</script>
