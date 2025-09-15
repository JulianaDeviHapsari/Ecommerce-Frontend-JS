<template>
  <div>
    <h3>Learning: Data Fetching (Dummy)</h3>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <UButton color="white" @click="getData">GET DATA</UButton>
        <UButton @click="refresh">Refresh DATA</UButton>
        <p v-if="loading">Loading...</p>
        <pre>{{ data }}</pre>
      </div>
      <div>
        <UInput v-model="productName" />
        <UButton @click="handleAddProduct">Add</UButton>
        <p>{{ statusAdd }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const productName = ref("");
const data = ref([]);
const loading = ref(false);
const statusAdd = ref("");

// ✅ Dummy data awal
const dummyProducts = [
  { id: 1, title: "Produk A" },
  { id: 2, title: "Produk B" },
];

function getData() {
  loading.value = true;
  setTimeout(() => {
    data.value = dummyProducts;
    loading.value = false;
  }, 500); // simulasi delay
}

function refresh() {
  getData();
}

function handleAddProduct() {
  if (!productName.value) return;
  const newProduct = {
    id: dummyProducts.length + 1,
    title: productName.value,
  };
  dummyProducts.push(newProduct);
  data.value = [...dummyProducts];
  statusAdd.value = "Produk berhasil ditambahkan (dummy)";
  productName.value = "";
}
</script>

<style lang="scss" scoped></style>
