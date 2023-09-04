<template>
  <ul :class="`list list-${props.variant}`" v-if="props.items.length">
    <li v-for="(item, index) in props.items" :key="index">
      <p>{{ item.title }}</p>
      <span>{{ item.calories }}</span>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
  variant: {
    type: String,
    default: "",
  },
});
</script>
