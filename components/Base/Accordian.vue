<template>
  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <div v-show="show" ref="content">
      <slot />
    </div>
  </transition>
</template>

<script setup>
const show = ref(true)
const content = ref(null)

function enter(element) {
  const { width } = getComputedStyle(element)
  element.style.width = width
  element.style.position = 'absolute'
  element.style.visibility = 'hidden'
  element.style.height = 'auto'
  const { height } = getComputedStyle(element)
  element.style.width = null
  element.style.position = null
  element.style.visibility = null
  element.style.height = 0
  getComputedStyle(element).height
  requestAnimationFrame(() => {
    element.style.height = height
  })
}

function afterEnter(element) {
  element.style.height = 'auto'
}

function leave(element) {
  const { height } = getComputedStyle(element)
  element.style.height = height
  getComputedStyle(element).height
  requestAnimationFrame(() => {
    element.style.height = 0
  })
}
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.25s ease-in-out;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
