// hello-world component

<template>
  <div class="border">
    <h1 class="text-red-dark">Counter with Hot Reload.</h1>
    <br>
    <p>Current count: {{count}}</p>
    <br>
    <ul>
      <li v-for="item in list" :key="item.name">
        {{item.name}} {{item.emoji}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      list: [
        { name: "apple", emoji: "🍎" },
        { name: "banana", emoji: "🍌" },
        { name: "grapes", emoji: "🍇" },
        { name: "orange", emoji: "🍊" }
      ]
    };
  },
  mounted() {
    this.handle = setInterval(() => {
      this.count++;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.handle);
  }
};
</script>


