<template>
  <h3 :class="`heading heading-${props.variant}`">
    {{ props.hTitle }}
  </h3>
</template>

<script setup>
const props = defineProps({
  hTitle: {
    type: String,
    default: "Heading Title",
  },
  variant: {
    type: String,
    default: "",
  },
});
</script>
