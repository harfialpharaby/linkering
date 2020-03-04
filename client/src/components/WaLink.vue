<template>
  <div>{{ whatsappLink }}</div>
</template>

<script>
export default {
  computed: {
    whatsappLink() {
      return this.$store.state.link;
    }
  }
};
</script>
