<template>
  <UCarousel
    v-slot="{ item }"
    ref="carouselRef"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="base-carousel"
    indicators
  >
    <!-- <img :src="item" draggable="false" /> -->
    <!-- <NuxtImg
      :src="item"
      :width="width"
      :height="height"
      :placeholder="[width, height, 75, 20]"
      densities="x1"
      format="webp"
    /> -->
    <img
  :src="item"
  class="w-full h-full object-cover"
  draggable="false"
/>

    <!-- <img src="https://picsum.photos/1920/1080?random=1" class="w-full object-cover" draggable="false" /> -->
  </UCarousel>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [
      'https://picsum.photos/1920/1080?random=1', 
      'https://picsum.photos/1920/1080?random=2', 
      'https://picsum.photos/1920/1080?random=3'
    ],
  },
  width: {
    type: String,
    default: "unset",
  },
  height: {
    type: String,
    default: "unset",
  },
  aspectRatio: {
    type: String,
    default: "1/1",
  },
});

const { width, height, aspectRatio } = toRefs(props);

const carouselRef = ref();
let interval;
onMounted(() => {
  interval = setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.base-carousel {
  @apply rounded-sm overflow-hidden;
  max-width: v-bind(width);
  max-height: v-bind(height);
  aspect-ratio: v-bind(aspectRatio);
}

.base-carousel img {
  @apply object-cover;
  aspect-ratio: v-bind(aspectRatio);
}
</style>
