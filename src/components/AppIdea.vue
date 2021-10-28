<template>
  <article class="p-3 mb-4 rounded-lg sm:flex sm:items-center">
    <!-- Info -->
    <section class="text-center sm:flex-1 sm:text-left sm:mr-2">
      <h2 class="text-xl sm:text-2xl">
        {{ idea.name }}
      </h2>
      <small>{{ idea.userName }}</small>
    </section>
    <!-- End of Info -->

    <!-- Vote -->
    <section
      class="
        pt-3
        border-t-2
        mt-6
        border-black
        sm:pt-0
        sm:pl-3
        sm:border-t-0
        sm:border-l-2
        sm:mt-0
        sm:flex
        sm:items-center
      "
    >
      <h3 class="text-3xl font-bold text-center sm:mr-1">{{ idea.votes }}</h3>
      <nav v-if="user && !userVoted" class="flex justify-center sm:block">
        <img
          class="w-10 cursor-pointer"
          src="@/assets/img/arrow.svg"
          alt="Vote up"
          @click="voteIdea(true)"
        />
        <img
          class="w-10 cursor-pointer transform rotate-180"
          src="@/assets/img/arrow.svg"
          alt="Vote down"
          @click="voteIdea(false)"
        />
      </nav>
    </section>

    <!-- End of Vote -->
  </article>
</template>

<script>
import { computed } from "vue";

export default {
  name: "AppIdea",
  emits: ["vote-idea"],
  props: {
    idea: {
      type: Object,
      required: true,
    },
    user: {
      type: [Object, null],
    },
  },
  setup(props, { emit }) {
    const voteIdea = (type) => emit("vote-idea", { type, id: props.idea.id });

    const userVoted = computed(() => {
      let result;
      if (props.user.votes) {
        result = props.user.votes.find((item) => item === props.idea.id);
      }
      return result;
    });

    return { voteIdea, userVoted };
  },
};
</script>
