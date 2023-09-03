<template>
  <header>
    <nav class="navbar">
      <a href="/" class="brand">
        <i class="fa-solid fa-utensils text-4xl sm:text-5xl"></i>
        Tracalories
      </a>
      <ul class="navbar-menu">
        <li>
          <button class="menu-item" @click="openModal">Set daily limit</button>
        </li>
        <li>
          <button class="menu-item">Reset day</button>
        </li>
      </ul>
    </nav>
  </header>

  <Modal
    modal-title="Set Daily Limit"
    :is-open="isModalOpen"
    @close="closeModal"
  >
    <form class="modal-body flex flex-col gap-3" @submit.prevent="closeModal">
      <label for="calories-limit">Daily calories limit</label>
      <input id="calories-limit" type="text" placeholder="Calories" />
      <button>Save</button>
    </form>
  </Modal>
</template>

<script setup>
import Modal from "../UI/Modal.vue";
import { ref } from "vue";
const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>
