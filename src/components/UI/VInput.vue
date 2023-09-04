<template>
  <input
    type="text"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="handleModelValueUpdate"
  />
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "Input",
  },
  modelValue: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["update:modelValue"]);
function handleModelValueUpdate(e) {
  emits("update:modelValue", e.currentTarget.value);
}
</script>
