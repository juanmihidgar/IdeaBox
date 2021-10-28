<template>
  <div class="w-full flex justify-center fixed top-40">
    <article class="w-3/4 p-4 bg-gray-400 shadow-2xl">
      <p class="text-center text-xl">Remove {{ name }}?</p>
      <section class="flex justify-end">
        <button
          @click="$emit('remove-ok')"
          class="p-3 m-1 bg-green-500 text-white"
        >
          Ok
        </button>
        <button
          @click="$emit('remove-cancel')"
          class="p-3 m-1 bg-red-500 text-white"
        >
          Cancel
        </button>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "RemoveIdea",
  emits: ["remove-ok", "remove-cancel"],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
