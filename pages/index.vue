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
// Data Carousel (Unsplash)
const items = [
  "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
]

// Data Kategori (Unsplash)
const categories = [
  { slug: "elektronik", name: "Elektronik", icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300" },
  { slug: "fashion", name: "Fashion", icon: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=300" },
  { slug: "olahraga", name: "Olahraga", icon: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=300" },
  { slug: "mainan", name: "Mainan", icon: "https://images.unsplash.com/photo-1617814079897-4f3db2a3da6d?w=300" },
  { slug: "otomotif", name: "Otomotif", icon: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300" },
  { slug: "perabot", name: "Perabot", icon: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300" },
]

// Data Produk (Unsplash)
const products = [
  {
    slug: "sepatu-1",
    name: "Sepatu Kasual Slingback Mules",
    price: 100000,
    discount: 10,
    image: "https://images.unsplash.com/photo-1528701800489-20be9c6e62a3?w=400",
  },
  {
    slug: "tas-1",
    name: "Tas Selempang Kulit Premium",
    price: 250000,
    discount: 0,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
  },
  {
    slug: "laptop-1",
    name: "Laptop Gaming XYZ",
    price: 7500000,
    discount: 5,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  },
  {
    slug: "baju-1",
    name: "Kaos Polos Premium",
    price: 80000,
    discount: 0,
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=400",
  },
  {
    slug: "bola-1",
    name: "Bola Sepak Original",
    price: 150000,
    discount: 15,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400",
  },
  {
    slug: "kamera-1",
    name: "Kamera DSLR Pro",
    price: 4500000,
    discount: 20,
    image: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=400",
  },
]
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
