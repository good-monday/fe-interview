<template>
  <header class="header">
    <a href="/" class="logo">book<span>shelf</span></a>
    <input type="text" placeholder="Search .." />
    <button className="cart-trigger">
      <span>Cart</span>
      <inline-svg src="/assets/icons/cart_icon.svg" />
    </button>
    <div class="cart"></div>
  </header>

  <main>
    <h1>Books</h1>
    <div class="grid">
      <div v-for="(book, index) in books" :key="index" class="grid-item">
        <div class="image-wrap">
          <button class="add-btn">
            <inline-svg src="/assets/icons/plus_icon.svg" />
          </button>
          <img class="image" :src="`/assets/images/${book.id}.jpg`" alt="" />
          <p>{{ book.price }}</p>
        </div>
        <h3>{{ book.title }}</h3>
        <p>by - {{ book.author }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import InlineSvg from "vue-inline-svg";
import books from "./data/books";

export default {
  name: "App",
  components: {
    InlineSvg,
  },
  data() {
    return {
      books,
    };
  },
};
</script>

<style src="./../src/styles/main.scss" lang="scss"></style>
