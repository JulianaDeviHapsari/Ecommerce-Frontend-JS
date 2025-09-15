<template>
  <UModal v-model="isOpen" prevent-close>
    <UCard class="text-black/85 text-sm">
      <p class="text-xl font-normal">Nilai Produk</p>
      <ModalReviewItem
        v-for="(item, index) in order?.items"
        :key="item.uuid"
        v-model="form[index]"
        :item="item"
      />

      <div class="flex justify-end gap-2 pt-6">
        <UButton
          class="min-w-36 justify-center"
          variant="link"
          color="gray"
          :disabled="status === 'pending'"
          @click="onClose"
        >
          Nanti Saja
        </UButton>
        <UButton
          class="min-w-36 justify-center"
          :loading="status === 'pending'"
          @click="onSubmit"
        >
          Ok
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
const toast = useToast();

const isOpen = defineModel("open", {
  type: Boolean,
  default: false,
});
const order = ref({});
const form = ref([
  {
    uuid: "",
    rating: 0,
    courierRating: 0,
    description: "",
    photo: [],
    video: [],
    showUsername: false,
  },
]);
const v$ = useVuelidate({}, form, {
  $scope: "review",
});

function setDefaultData(newOrder) {
  if (newOrder && typeof newOrder === "object") {
    order.value = newOrder;

    form.value = order.value.items?.map((item) => ({
      uuid: item.uuid,
      rating: 0,
      courierRating: 0,
      description: "",
      photo: [],
      video: [],
      showUsername: false,
    }));
  }
}

function onClose() {
  form.value = [
    {
      uuid: "",
      rating: 0,
      courierRating: 0,
      description: "",
      photo: [],
      video: [],
      showUsername: false,
    },
  ];
  v$.value.$reset();
  isOpen.value = false;
}

// ✅ Dummy submit tanpa API
async function onSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    toast.add({
      color: "red",
      title: v$.value.$errors?.[0]?.$message?.replace("value", "rating"),
    });
    return;
  }

  // Simulasikan submit review (dummy)
  console.log("Review disimpan (dummy):", form.value);

  toast.add({
    color: "green",
    title: "Review berhasil disimpan (dummy)",
  });

  emit("success");
  onClose();
}

defineExpose({
  setDefaultData,
});
</script>

<style lang="scss" scoped></style>
