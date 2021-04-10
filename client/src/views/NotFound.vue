<template>
  <div>
    No page found.
    <router-link to="/">Go home?</router-link> |
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
}
</script>
