<template>
  <div ref="referenceRef" @mouseenter="isOpen = true" @mouseleave="isOpen = false" class="inline-flex">
    <slot />
  </div>
  <Teleport to="body">
    <div
      v-if="isOpen"
      ref="floatingRef"
      :style="floatingStyles"
      :data-placement="placement"
      class="tooltip"
    >
      {{ content }}
      <div ref="arrowRef" class="tooltip-arrow" :style="arrowStyles" />
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  useFloating,
  offset as offsetMiddleware,
  flip,
  shift,
  arrow as arrowMiddleware,
  autoUpdate,
} from '@floating-ui/vue'

const props = defineProps({
  content: { type: String, default: '' },
  placement: { type: String, default: 'top' },
  offset: { type: Number, default: 6 },
})

const isOpen = ref(false)
const referenceRef = ref(null)
const floatingRef = ref(null)
const arrowRef = ref(null)

const { floatingStyles, middlewareData, placement } = useFloating(
  referenceRef,
  floatingRef,
  {
    placement: props.placement,
    middleware: [
      offsetMiddleware(props.offset),
      flip(),
      shift(),
      arrowMiddleware({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  },
)

const arrowStyles = computed(() => {
  const x = middlewareData.value.arrow?.x
  const y = middlewareData.value.arrow?.y
  const side = placement.value.split('-')[0]
  const staticSide = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[side]
  return {
    left: x != null ? `${x}px` : '',
    top: y != null ? `${y}px` : '',
    [staticSide]: '-4px',
  }
})
</script>
