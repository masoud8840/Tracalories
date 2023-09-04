<template>
  <section :class="`card card-${props.type}`">
    <h3>{{ props.cardTitle }}</h3>
    <p>{{ props.cardCaption }}</p>
  </section>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "flat",
  },
  cardTitle: {
    type: Number,
    default: "Card Title",
  },
  cardCaption: {
    type: String,
    default: "Card Caption",
  },
});
</script>
