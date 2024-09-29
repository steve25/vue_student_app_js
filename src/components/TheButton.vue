<template>
  <RouterLink v-if="type === 'link'" :to="to" class="button" :class="buttonColor">
    <slot />
  </RouterLink>

  <button v-else-if="type === 'button'" class="button" :class="buttonColor">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';
const { type, color, to } = defineProps(['type', 'color', 'to']);

const buttonColor = computed(() => {
  if (color) {
    return 'button-' + color;
  }

  return '';
});
</script>

<style scoped>
.button {
  display: inline-block;
  margin: 0;
  padding: 0.8rem 1.3rem;
  border: 0;
  background: #999999;
  border-radius: 6px;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background: #888888;
}
/* Button in active state */
.button:active,
.button:focus {
  background: #777777;
}

/* Green button */
.button-green {
  background: #33cc55;
}
.button-green:hover {
  background: #22bb44;
}
.button-green:active,
.button-green:focus {
  background: #22aa44;
}

/* Red button */
.button-red {
  background: #dd3333;
}
.button-red:hover {
  background: #cc2222;
}
.button-red:active,
.button-red:focus {
  background: #bb2222;
}

.button-blue {
  background-color: #619ceb;
}

.button-blue:hover {
  background: #4e8fe2;
}
.button-blue:active,
.button-blue:focus {
  background: #417bc6;
}

.button-brown {
  background-color: #d4a373;
}

.button-brown:hover {
  background: #b08968;
}
.button-brown:active,
.button-brown:focus {
  background: #9f7959;
}
</style>
