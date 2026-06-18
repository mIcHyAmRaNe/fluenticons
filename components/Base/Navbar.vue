<template>
  <div
    class="h-[75px] border-t border-b sticky top-0 z-50 dark:border-gray-700 flex items-center justify-between px-8 flex-wrap navbar-frosted"
  >
    <p>
      <span class="text-lg font-medium">{{ page.title }} Icons</span>
      <span class="text-gray-600" v-if="page.subtitle"
        >({{ page.subtitle }})</span
      >
    </p>
    <div class="flex-space-x-4">
      <div
        class="relative flex items-center overflow-hidden rounded-full bg-gray-50 dark:bg-gray-700 focus-within:bg-gray-100 dark:focus-within:bg-gray-800"
      >
        <input
          type="text"
          class="focus:outline-none bg-transparent z-10 h-full rounded-l-full px-6 text-sm"
          placeholder="Search (Press / to focus)"
          ref="searchRef"
          @input="search"
          autocomplete="new-password"
        />
        <button
          class="h-10 w-10 flex-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 z-20 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 cursor-pointer transition-colors duration-200"
          @click="searchRef?.focus()"
          aria-label="Search"
        >
          <FluentIconFilledSearch class="text-gray-500 h-5 w-5" />
        </button>
      </div>
      <div class="flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
        <NuxtLink
          to="/outlined"
          class="tab-btn"
          :class="{ 'tab-btn-active': route.path === '/outlined' }"
        >
          Outlined
        </NuxtLink>
        <NuxtLink
          to="/"
          class="tab-btn"
          :class="{ 'tab-btn-active': route.path === '/' }"
        >
          Filled
        </NuxtLink>
        <NuxtLink
          to="/favorites"
          class="tab-btn"
          :class="{ 'tab-btn-active': route.path === '/favorites' }"
        >
          Favorites
        </NuxtLink>
      </div>
      <ClientOnly>
        <button
          @click="toggleDarkMode"
          class="navbar-btn cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Dark Mode"
        >
          <FluentIconOutlinedWeatherSunny
            v-if="colorMode.value === 'dark'"
            class="h-5 w-5"
          />
          <FluentIconOutlinedWeatherMoon v-else class="h-5 w-5" />
          <p class="text-sm">
            {{ colorMode.value === "dark" ? "Light" : "Dark" }} Mode
          </p>
        </button>
      </ClientOnly>
    </div>
    <base-search-focus @keyup="focusSearch" />
  </div>
</template>

<script setup>
const route = useRoute();
const colorMode = useColorMode();
const props = defineProps({ modelValue: { type: String, default: "" } });
const emit = defineEmits(["update:modelValue"]);

const searchRef = ref(null);
let debounce = null;

const page = computed(() => {
  switch (route.path) {
    case "/outlined":
      return { title: "Outlined", subtitle: "2 px stroked" };
    case "/favorites":
      return { title: "Favorites" };
    default:
      return { title: "Filled", subtitle: "2 px filled" };
  }
});

function search(e) {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    emit("update:modelValue", e.target.value);
  }, 600);
}

function focusSearch(e) {
  if (e.key === "/") {
    searchRef.value?.focus();
  }
}

function toggleDarkMode() {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
}
</script>
