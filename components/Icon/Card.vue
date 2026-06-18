<template>
  <article
    class="pb-[100%] relative border dark:border-gray-700 rounded-lg overflow-hidden group"
  >
    <div
      class="absolute w-24 h-12 bg-red-500 dark:bg-red-700 top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-45 z-40"
      v-if="isAFavorite"
    ></div>
    <div class="absolute inset-0">
      <button
        @click="selectIcon"
        class="block w-full h-full focus:outline-none group relative hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 cursor-pointer transition-colors duration-200"
        :class="{ 'bg-gray-100 dark:bg-gray-700': selected }"
        :aria-label="formattedName"
      >
        <div class="absolute inset-0">
          <div class="flex flex-row justify-center items-center h-full">
            <component :is="icon.componentName" class="h-10 w-10" />
          </div>
        </div>
        <div class="p-4 absolute inset-x-0 bottom-0">
          <div class="-mx-2 -my-1 flex flex-row justify-center">
            <p
              class="subpixel-antialiased px-2 py-1 tracking-wide leading-tight text-cool-gray-600 dark:text-cool-gray-400 cursor-text select-text text-xs truncate"
            >
              {{ formattedName }}
            </p>
          </div>
        </div>
      </button>
    </div>
    <!-- Favorite/Unfavorite button -->
    <button
      @click.stop="toggleFavorite"
      class="absolute top-1 right-1 z-50 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
      :aria-label="isAFavorite ? 'Remove from favorites' : 'Add to favorites'"
    >
      <FluentIconOutlinedHeart
        class="h-3 w-3 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
        v-if="!isAFavorite"
      />
      <FluentIconFilledHeart
        class="h-3 w-3 text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200"
        v-else
      />
    </button>
  </article>
</template>

<script setup>
const props = defineProps({
  icon: { type: Object, required: true },
  selected: { type: Boolean, default: false },
});

const emit = defineEmits(["setIcon"]);

const store = useFavoritesStore();

// Memoize the formatted name to prevent unnecessary recomputations
const formattedName = computed(() => {
  return props.icon.name.replace(/([A-Z])/g, " $1");
});

// Use component name for favorite check to prevent unnecessary object comparisons
const isAFavorite = computed(() => store.isAFavorite(props.icon.componentName));

function selectIcon() {
  emit("setIcon", props.icon);
}

function toggleFavorite() {
  // Use the memoized componentName to prevent unnecessary recalculations
  const componentName = props.icon.componentName;
  if (isAFavorite.value) {
    store.unFavoriteIcon(props.icon);
  } else {
    store.favoriteIcon(props.icon);
  }
}
</script>
