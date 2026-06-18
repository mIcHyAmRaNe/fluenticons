<template>
  <main class="flex">
    <section class="flex-grow">
      <base-hero />
      <base-navbar v-model="searchQuery" />
      <NuxtPage
        @setIcon="setIcon"
        :searchQuery="searchQuery"
        :selectedIcon="selectedIcon"
      />
    </section>
    <IconEditor :icon="selectedIcon" @login="showModal = 'login'" />
    <modal v-show="showModal == 'login'" @close="showModal = ''">
      <AuthLogin @signup="showModal = 'register'" @close="showModal = ''" />
    </modal>
    <modal v-show="showModal == 'register'" @close="showModal = ''">
      <AuthRegister @login="showModal = 'login'" />
    </modal>
  </main>
</template>

<script setup>
const route = useRoute()
const showModal = ref('')
const searchQuery = ref('')
const elementsToShow = ref(48)
const selectedIcon = ref(initialIcon())

const filledNs = 'FluentIconFilled'
const outlinedNs = 'FluentIconOutlined'
const filledSvg = '_filled.svg'
const outlinedSvg = '_regular.svg'

function initialIcon() {
  const isOutlined = route.path === '/outlined'
  return {
    name: 'Select and preview icons here',
    componentName: isOutlined ? 'FluentIconOutlinedSticker' : 'FluentIconFilledSticker',
    svgFileName: isOutlined ? 'ic_fluent_sticker_24_regular.svg' : 'ic_fluent_sticker_24_filled.svg',
  }
}

function switchVariant(icon, toVariant) {
  if (!icon?.componentName) return icon
  const isFilled = icon.componentName.startsWith(filledNs)
  if (isFilled && toVariant === 'outlined') {
    return {
      ...icon,
      componentName: icon.componentName.replace(filledNs, outlinedNs),
      svgFileName: icon.svgFileName.replace(filledSvg, outlinedSvg),
    }
  }
  if (!isFilled && toVariant === 'filled') {
    return {
      ...icon,
      componentName: icon.componentName.replace(outlinedNs, filledNs),
      svgFileName: icon.svgFileName.replace(outlinedSvg, filledSvg),
    }
  }
  return icon
}

watch(() => route.path, (path) => {
  if (path === '/outlined' && selectedIcon.value?.componentName?.startsWith(filledNs)) {
    selectedIcon.value = switchVariant(selectedIcon.value, 'outlined')
  } else if (path === '/' && selectedIcon.value?.componentName?.startsWith(outlinedNs)) {
    selectedIcon.value = switchVariant(selectedIcon.value, 'filled')
  }
})

function setIcon(payload) {
  selectedIcon.value = payload
}
</script>
