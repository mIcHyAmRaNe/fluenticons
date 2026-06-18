<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-4 lg:grid-cols-6 gap-6" v-if="icons.length">
      <LazyIconCard
        v-for="(icon, i) in icons"
        :key="i"
        :icon="icon"
        @setIcon="setIcon(icon)"
        :selected="icon.name === selectedIcon.name"
      />
    </div>
    <base-favorites-empty v-else />
  </div>
</template>

<script setup>
const props = defineProps({
  selectedIcon: { type: Object, default: null },
})

const emit = defineEmits(['setIcon'])

const store = useFavoritesStore()

const icons = computed(() => store.favoritesList)

function setIcon(payload) {
  emit('setIcon', payload)
}
</script>
