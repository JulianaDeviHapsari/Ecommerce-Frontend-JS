<template>
  <div class="flex flex-col gap-6 pb-6">
    <!-- Carousel -->
    <section class="banner-section">
      <UContainer>
        <BaseCarousel
          width="796px"
          height="235px"
          aspect-ratio="3.39/1"
          :items="items"
          class="mx-auto"
        />
      </UContainer>
    </section>

    <!-- Kategori -->
    <section class="category-section">
      <UContainer>
        <div class="category-section-card">
          <div class="category-section-header">
            <h2>Kategori</h2>
          </div>
          <div class="category-section-content">
            <FeatureHomepageCategoryItem
              v-for="cat in categories"
              :key="`cat-${cat.slug}`"
              :title="cat.name"
              :image="cat.icon"
              :slug="cat.slug"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Produk -->
    <section class="product-section">
      <UContainer>
        <div class="product-section-header">
          <h2>Rekomendasi</h2>
        </div>
        <div class="product-section-content">
          <BaseProductCard
            v-for="product in products"
            :key="`product-${product.slug}`"
            :title="product.name"
            :price="product.price"
            :image="product.image"
            :slug="product.slug"
            :discount="product.discount"
          />
        </div>
      </UContainer>
    </section>

    <!-- Tombol -->
    <UContainer>
      <UButton color="white" class="font-normal px-28" to="/login">
        Login untuk Lihat Lainnya
      </UButton>
    </UContainer>
  </div>
</template>

<script setup>
// Data manual Carousel
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
];

// Data manual Kategori
const categories = [
  { slug: "elektronik", name: "Elektronik", icon: "https://picsum.photos/200/200?random=5" },
  { slug: "fashion", name: "Fashion", icon: "https://picsum.photos/200/200?random=12" },
  { slug: "olahraga", name: "Olahraga", icon: "https://picsum.photos/200/200?random=13" },
  { slug: "mainan", name: "Mainan", icon: "https://picsum.photos/200/200?random=14" },
  { slug: "otomotif", name: "Otomotif", icon: "https://picsum.photos/200/200?random=15" },
  { slug: "perabot", name: "Perabot", icon: "https://picsum.photos/200/200?random=16" },
];

// Data manual Produk
const products = [
  {
    slug: "sepatu-1",
    name: "Sepatu Kasual Slingback Mules",
    price: 100000,
    discount: 10,
    image: "https://picsum.photos/400/400?random=21",
  },
  {
    slug: "tas-1",
    name: "Tas Selempang Kulit Premium",
    price: 250000,
    discount: 0,
    image: "https://picsum.photos/400/400?random=22",
  },
  {
    slug: "laptop-1",
    name: "Laptop Gaming XYZ",
    price: 7500000,
    discount: 5,
    image: "https://picsum.photos/400/400?random=23",
  },
  {
    slug: "baju-1",
    name: "Kaos Polos Premium",
    price: 80000,
    discount: 0,
    image: "https://picsum.photos/400/400?random=24",
  },
  {
    slug: "bola-1",
    name: "Bola Sepak Original",
    price: 150000,
    discount: 15,
    image: "https://picsum.photos/400/400?random=25",
  },
  {
    slug: "bola-1",
    name: "Bola Sepak Original",
    price: 150000,
    discount: 15,
    image: "https://picsum.photos/400/400?random=26",
  },
];
</script>

<style scoped>
.banner-section {
  @apply bg-white py-7;
}

.category-section-card {
  @apply bg-white;
}
.category-section-header {
  @apply p-5 border-b border-black/5;
}
.category-section-header h2 {
  @apply text-base text-black/55 font-medium uppercase;
}

.category-section-content {
  @apply grid grid-cols-6 gap-3;
}

.product-section-header {
  @apply bg-white border-b-4 border-primary p-5;
}
.product-section-header h2 {
  @apply text-base text-primary font-medium text-center uppercase;
}

.product-section-content {
  @apply grid grid-cols-6 gap-3 mt-3;
}
</style>
