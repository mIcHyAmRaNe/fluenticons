<template>
  <aside class="editor-sidebar">
    <div class="h-[75px] border-b dark:border-gray-700 flex-between px-4">
      <div class="text-sm font-medium">
        {{ icon ? icon.name.replace(/([A-Z])/g, " $1") : "Preview" }}
      </div>
      <button
        class="focus:outline-none p-2 rounded-full focus:bg-gray-100 hover:bg-gray-100 dark:focus:bg-gray-700 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200"
        @click="favoriteToggle"
        aria-label="Favorite"
      >
        <FluentIconFilledHeart
          class="text-gray-500 h-5 w-5"
          v-if="isAFavorite"
        />
        <FluentIconOutlinedHeart class="text-gray-500 h-5 w-5" v-else />
      </button>
    </div>
    <div class="h-64">
      <div class="icon-editor-panel dots-pattern-background relative">
        <component
          :is="icon.componentName"
          class="h-32 w-32"
          :style="{ color }"
          :type="type"
          :gradient="gradient"
          ref="iconRef"
        />
        <div class="absolute bottom-2 left-2">
          <img
            src="/gradient.png"
            width="20"
            height="20"
            alt="gradient"
            class="cursor-pointer"
            @click="handleGradient"
          />
        </div>
        <div class="absolute bottom-2 right-2">
          <ClientOnly>
            <input
              type="color"
              v-model="color"
              @input="colorHasChanged = true; type = 'single'"
              class="w-5 h-5 rounded cursor-pointer border-0 p-0 appearance-none"
            />
          </ClientOnly>
        </div>
        <ClientOnly>
          <div
            class="absolute left-1/2 -translate-x-1/2 top-full z-[99] mt-2"
            v-click-outside="onClickOut"
          >
            <div
              v-if="openPicker"
              class="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg p-4 w-64"
            >
              <div class="flex gap-2 mb-3">
                <button
                  @click="setGradientType('linear')"
                  class="flex-1 px-3 py-1.5 text-xs rounded-md font-medium transition-colors duration-200 cursor-pointer"
                  :class="gradient.type === 'linear' ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'"
                >
                  Linear
                </button>
                <button
                  @click="setGradientType('radial')"
                  class="flex-1 px-3 py-1.5 text-xs rounded-md font-medium transition-colors duration-200 cursor-pointer"
                  :class="gradient.type === 'radial' ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'"
                >
                  Radial
                </button>
              </div>
              <div class="flex items-center gap-3 mb-2">
                <span class="text-xs text-gray-500 w-8">Start</span>
                <input
                  type="color"
                  :value="rgbaToHex(gradient.points[0])"
                  @input="updatePoint(0, $event.target.value)"
                  class="w-7 h-7 rounded cursor-pointer border-0 p-0 flex-shrink-0"
                />
                <div
                  class="flex-1 h-7 rounded border dark:border-gray-600"
                  :style="{ background: pointToRgba(gradient.points[0]) }"
                ></div>
              </div>
              <div class="flex items-center gap-3 mb-2">
                <span class="text-xs text-gray-500 w-8">End</span>
                <input
                  type="color"
                  :value="rgbaToHex(gradient.points[1])"
                  @input="updatePoint(1, $event.target.value)"
                  class="w-7 h-7 rounded cursor-pointer border-0 p-0 flex-shrink-0"
                />
                <div
                  class="flex-1 h-7 rounded border dark:border-gray-600"
                  :style="{ background: pointToRgba(gradient.points[1]) }"
                ></div>
              </div>
              <div v-if="gradient.type === 'linear'" class="flex items-center gap-3">
                <span class="text-xs text-gray-500 w-8">Angle</span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  :value="gradient.degree"
                  @input="updateDegree"
                  class="flex-1 accent-gray-600 dark:accent-gray-400"
                />
                <span class="text-xs text-gray-500 w-8 text-right">{{ gradient.degree }}°</span>
              </div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
    <ul
      class="divide-y border-t border-b border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700 text-sm mt-4"
    >
      <li>
        <div class="grid grid-cols-2">
          <select
            class="form-select border-0 focus:outline-none text-xs bg-transparent"
            v-model="selectedCopyType"
          >
            <option v-for="(t, i) in copyTypes" :value="t.value" :key="i">
              {{ t.name }}
            </option>
          </select>
          <button
            class="flex-between px-4 py-2 bg-gray-100 dark:bg-[#070d19] border-l border-gray-300 dark:border-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            @click="copy()"
          >
            <p>Copy</p>
            <FluentIconOutlinedCopy class="text-gray-500 h-4 w-4" />
          </button>
        </div>
      </li>
      <li>
        <div class="grid grid-cols-2">
          <select
            class="form-select border-0 focus:outline-none text-xs bg-transparent"
            v-model="selectedExportType"
          >
            <option v-for="(t, i) in exportTypes" :value="t.value" :key="i">
              {{ t.name }}
            </option>
          </select>
          <button
            class="flex-between px-4 py-2 bg-gray-100 dark:bg-[#070d19] border-l border-gray-300 dark:border-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            @click="exportIcon"
          >
            <p>Download</p>
            <FluentIconOutlinedArrowDownload class="text-gray-500 h-4 w-4" />
          </button>
        </div>
      </li>
      <li>
        <button
          class="flex-between px-4 py-2 w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          @click="showFavoritesDownloadManager = !showFavoritesDownloadManager"
        >
          <div class="flex-space-x-2">
            <FluentIconOutlinedFolder class="text-gray-500 h-4 w-4" />
            <p>Download favorites as zip</p>
          </div>
          <FluentIconOutlinedChevronDown
            class="text-gray-500 h-4 w-4 transform transition-transform"
            :class="{ '-rotate-90': !showFavoritesDownloadManager }"
          />
        </button>
        <base-accordian>
          <base-favorites-download-manager
            v-if="showFavoritesDownloadManager"
          />
        </base-accordian>
      </li>
    </ul>
    <buy-me-coffee />
  </aside>
</template>

<script setup>
import { getIconSnippet, svgToImage } from "../../utils/iconManager";
import { saveAs } from "file-saver";
import { toast } from "vue-sonner";

const props = defineProps({
  icon: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["login"]);

const colorMode = useColorMode();
const store = useFavoritesStore();
const iconRef = ref(null);
const color = ref("#212121");
const colorHasChanged = ref(false);
const openPicker = ref(false);
const type = ref("single");
const selectedCopyType = ref("svg");
const selectedExportType = ref("png");
const showFavoritesDownloadManager = ref(true);
const gradient = ref({
  type: "linear",
  degree: 0,
  points: [
    { left: 0, red: 0, green: 0, blue: 0, alpha: 1 },
    { left: 100, red: 255, green: 0, blue: 0, alpha: 1 },
  ],
});

const copyTypes = [
  { name: "SVG", value: "svg" },
  { name: "HTML Image", value: "html" },
  { name: "Vue Component", value: "vue" },
  { name: "React Component", value: "react" },
];

const exportTypes = [
  { name: "PNG", value: "png" },
  { name: "SVG", value: "svg" },
  { name: "WEBP", value: "webp" },
  { name: "Vue Component", value: "vue" },
  { name: "React Component", value: "react" },
];

const iconComponentName = computed(() => props.icon.componentName);
const isAFavorite = computed(() => store.isAFavorite(iconComponentName.value));

watch(
  () => colorMode.preference,
  (val) => {
    if (!colorHasChanged.value) {
      color.value = val === "dark" ? "#fff" : "#212121";
    }
  },
);

onMounted(() => {
  const systemDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  if (systemDarkMode) color.value = "#ffffff";
});

function handleGradient() {
  if (!openPicker.value) {
    setTimeout(() => {
      openPicker.value = true;
    }, 0);
  }
}

function onClickOut() {
  if (openPicker.value) openPicker.value = false;
}

function setGradientType(val) {
  gradient.value.type = val;
  onGradientChange();
}

function updatePoint(index, hex) {
  const rgb = hexToRgb(hex);
  gradient.value.points[index].red = rgb.red;
  gradient.value.points[index].green = rgb.green;
  gradient.value.points[index].blue = rgb.blue;
  onGradientChange();
}

function updateDegree(e) {
  gradient.value.degree = parseInt(e.target.value);
  onGradientChange();
}

function onGradientChange() {
  type.value = gradient.value.type;
  colorHasChanged.value = true;
}

function rgbaToHex(point) {
  return rgbToHex(point.red, point.green, point.blue);
}

function pointToRgba(point) {
  return `rgba(${point.red}, ${point.green}, ${point.blue}, ${point.alpha})`;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
      }
    : { red: 0, green: 0, blue: 0 };
}

function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function favoriteToggle() {
  if (isAFavorite.value) {
    store.unFavoriteIcon(props.icon);
    toast("Removed from favorites");
  } else {
    store.favoriteIcon(props.icon);
    toast("Added to favorites");
  }
}

async function copy() {
  try {
    const snippet = await getIconSnippet(
      selectedCopyType.value,
      props.icon.svgFileName,
      color.value,
    );
    toast(`Copied ${selectedCopyType.value} snippet`);
    await navigator.clipboard.writeText(snippet);
  } catch (err) {
    console.error(err);
  }
}

function iconType(componentName) {
  if (componentName.includes("Filled")) return "filled";
  if (componentName.includes("Outlined")) return "outlined";
  return "";
}

function convertToImage(type) {
  const imageDefaults = {
    svg: iconRef.value?.$el,
    mimetype: `image/${type}`,
    width: 512,
    height: 512,
    quality: 1,
    outputFormat: "base64",
  };
  return svgToImage(imageDefaults);
}

async function exportIcon() {
  if (!selectedExportType.value) return;
  const baseName = props.icon.name;
  const suffix = iconType(props.icon.componentName);
  switch (selectedExportType.value) {
    case "svg":
      downloadImage(
        `/icons/${props.icon.svgFileName}`,
        `${baseName}_${suffix}.svg`,
      );
      break;
    case "png":
      downloadImage(await convertToImage("png"), `${baseName}_${suffix}.png`);
      break;
    case "webp":
      downloadImage(await convertToImage("webp"), `${baseName}_${suffix}.webp`);
      break;
    case "vue":
      downloadComponent(suffix);
      break;
    case "react":
      downloadComponent(suffix);
      break;
  }
}

function downloadImage(url, filename) {
  const link = document.createElement("a");
  link.style.opacity = "0";
  link.download = filename;
  link.href = url;
  link.click();
  link.remove();
}

async function downloadComponent(suffix) {
  const snippet = await getIconSnippet(
    selectedExportType.value,
    props.icon.svgFileName,
    color.value,
  );
  const blob = new Blob([snippet], { type: "text/plain;charset=utf-8" });
  const ext = selectedExportType.value === "vue" ? "vue" : "js";
  saveAs(blob, `${props.icon.name}_${suffix}.${ext}`);
}
</script>
