<template>
  <teleport to="#app">
    <transition
      leave-active-class="transition-all duration-500 opacity-0"
      enter-active-class="transition-all duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <dialog
        open="true"
        class="modal"
        v-if="props.isOpen"
        @click="handleClose"
      >
        <transition
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-all duration-500 opacity-0"
        >
          <section class="modal-inner" v-if="props.isOpen">
            <div class="modal-header">
              <h4 class="modal-heading">{{ props.modalTitle }}</h4>
              <i
                class="fas fa-close text-xl cursor-pointer"
                @click="handleClose"
              ></i>
            </div>
            <slot></slot>
          </section>
        </transition></dialog></transition
  ></teleport>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modalTitle: {
    type: String,
    default: "Undefined",
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["close"]);
function handleClose(e) {
  if (e.target.localName === "dialog" || e.srcElement.nodeName === "I") {
    emits("close", !props.isOpen);
  }
}
const modalDelayedOpenStatus = ref(false);
watch(props, (newVal) => {
  modalDelayedOpenStatus.value = newVal.isOpen;
});
</script>
