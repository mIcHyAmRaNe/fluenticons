<template>
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <linearGradient v-if="fill === 'url(#g1)'" id="g1" :gradientTransform="`rotate(${angle})`">
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient v-if="fill === 'url(#g2)'" id="g2" cx = "50%" cy = "50%" r = "50%">
      <stop :stop-color="start" offset = "0%"/>
      <stop :stop-color="end" offset = "100%"/>
    </radialGradient>
    <path :fill="fill" :fill-opacity="opacity" d="M9.113 8.8c.34-.297.744-.526 1.19-.661l.247-.065.16-.03.176-.025.18-.015.184-.005h7.5a3.25 3.25 0 0 1 3.245 3.065l.005.185v7.5a3.25 3.25 0 0 1-3.066 3.245l-.184.005h-7.5a3.25 3.25 0 0 1-3.245-3.066L8 18.75v-7.5l.017-.339.062-.377.059-.223.08-.236.087-.202.082-.162.094-.163.146-.217.094-.123.135-.156.108-.112zm6.469-4.567.052.177.694 2.588H11.25A4.25 4.25 0 0 0 7 11.249v6.434a3.25 3.25 0 0 1-2.895-2.228l-.052-.176-1.941-7.245a3.25 3.25 0 0 1 2.12-3.928l.178-.052 7.244-1.941a3.25 3.25 0 0 1 3.928 2.12" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCollectionsEmpty',
  mixins: [icon]
};
</script>
