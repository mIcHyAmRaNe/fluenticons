<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      <LazyIconCard
        v-for="(icon, i) in filteredIcons.slice(0, elementsToShow)"
        :key="i"
        :icon="icon"
        @setIcon="setIcon(icon)"
        :selected="icon.name === selectedIcon.name"
      />
    </div>
    <div class="my-8">
      <base-not-found
        v-if="!filteredIcons.length"
        :search-query="searchQuery"
      />
      <button
        class="show-more-btn"
        @click="showMore"
        v-if="filteredIcons.length > elementsToShow"
      >
        Show More Icons
      </button>

      <div class="flex-center flex-col">
        <small class="mt-8">
          <NuxtLink
            to="/privacy-policy"
            class="hover:underline cursor-pointer transition-colors duration-200"
            >Privacy Policy</NuxtLink
          >
        </small>
      </div>
    </div>
  </div>
</template>

<script setup>
import icons from "../../assets/icons/filled.json";

const props = defineProps({
  selectedIcon: { type: Object, default: null },
  searchQuery: { type: String, default: "" },
});

const emit = defineEmits(["setIcon"]);

const elementsToShow = ref(48);

const filteredIcons = computed(() => {
  return icons.filter((icon) =>
    icon.name
      .toLowerCase()
      .includes(props.searchQuery.toLowerCase().replace(" ", "")),
  );
});

function setIcon(payload) {
  emit("setIcon", payload);
}

function showMore() {
  elementsToShow.value += 48;
}
</script>
