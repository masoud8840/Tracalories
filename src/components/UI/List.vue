<template>
  <ul :class="`list list-${props.variant}`" v-if="props.items.length">
    <li v-for="(item, index) in props.items" :key="index" class="group">
      <p>{{ item.title }}</p>
      <span class="flex items-center gap-2">
        <i class="fa-solid fa-utensils"></i>
        {{ item.calories }}
      </span>

      <i
        class="fas fa-close list-delete-btn group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0"
      ></i>
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
