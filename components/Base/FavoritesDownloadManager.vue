<template>
  <div class="border-t border-gray-300 dark:border-gray-700">
    <div>
      <div
        class="overflow-hidden grid grid-cols-4 divide-x divide-gray-300 dark:divide-gray-700"
      >
        <button
          class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          @click="downloadIcons('svg', 'svg')"
        >
          SVG
        </button>
        <button
          class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          @click="downloadIcons('png', 'png')"
        >
          PNG
        </button>
        <button
          class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          @click="downloadIcons('vue', 'vue')"
        >
          Vue
        </button>
        <button
          class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          @click="downloadIcons('react', 'js')"
        >
          React
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { downloadAsZip } from "../../utils/downloadManager";
import { getIconSnippet } from "../../utils/iconManager";
import { toast } from "vue-sonner";

const store = useFavoritesStore();

const icons = computed(() => store.favoritesList);

async function downloadIcons(type, format) {
  if (!icons.value.length) {
    toast("You have not favorited any icons yet");
    return;
  }
  toast("Downloading...");
  switch (type) {
    case "png":
      alert("Still Figuring this PNG thing");
      return;
    default:
      const results = await Promise.allSettled(
        icons.value.map(async (item) => {
          const content = await getIconSnippet(type, item.svgFileName);
          let typeSuffix = "";
          if (item.componentName.includes("Filled")) {
            typeSuffix = "_filled";
          } else if (item.componentName.includes("Outlined")) {
            typeSuffix = "_outlined";
          }
          return {
            name: `${item.name}${typeSuffix}.${format}`,
            content,
          };
        }),
      );
      const rejected = results.filter((r) => r.status === "rejected");
      if (rejected.length) {
        console.error(
          "Failed to fetch icons:",
          rejected.map((r) => r.reason),
        );
      }
      const finalIcons = results
        .filter((r) => r.status === "fulfilled")
        .map((r) => r.value)
        .filter((r) => r.content);
      if (!finalIcons.length) {
        toast("Failed to download icons");
        return;
      }
      downloadAsZip(finalIcons);
  }
}
</script>
