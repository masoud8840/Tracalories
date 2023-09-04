<template>
  <form :class="`form form-${props.variant}`">
    <v-input placeholder="Enter Meal" />
    <v-input placeholder="Enter Calories" />
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
});
</script>
