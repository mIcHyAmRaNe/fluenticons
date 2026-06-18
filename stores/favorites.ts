export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<Record<string, any>[]>([])

  const favoritesList = computed(() => favorites.value)

  function isAFavorite(componentName: string) {
    return favorites.value.some(ic => ic.componentName === componentName)
  }

  function favoriteIcon(payload: Record<string, any>) {
    favorites.value.push(payload)
  }

  function unFavoriteIcon(payload: Record<string, any>) {
    favorites.value = favorites.value.filter(
      item => item.componentName !== payload.componentName
    )
  }

  return {
    favorites, favoritesList, isAFavorite, favoriteIcon, unFavoriteIcon,
  }
})
