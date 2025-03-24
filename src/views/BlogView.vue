<template>
  <div class="blog-container">
    <h1 class="blog-header">博客文章</h1>
    
    <div class="blog-filters">
      <button 
        v-for="category in categories" 
        :key="category.id" 
        :class="['filter-button', { active: activeCategory === category.id }]"
        @click="activeCategory = category.id"
      >
        {{ category.name }}
      </button>
    </div>
    
    <div class="blog-list">
      <div v-for="post in filteredPosts" :key="post.id" class="blog-post-card">
        <h2 class="post-title">{{ post.title }}</h2>
        <div class="post-meta">
          <span class="post-category">{{ getCategoryName(post.category) }}</span>
          <span class="post-date">{{ post.date }}</span>
        </div>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        <router-link :to="`/blog/${post.id}`" class="read-more">阅读全文</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { blogPosts, categories, getCategoryName } from '../data/blogPosts';

const activeCategory = ref('all');


const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') {
    return blogPosts;
  }
  return blogPosts.filter(blogPosts => blogPosts.category === activeCategory.value);
});
</script>

<style scoped>
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 2rem;
}

.blog-header {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

.blog-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.filter-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  font-size: 0.9rem;
}

.filter-button.active {
  background-color: #333;
  color: white;
  border-color: #333;
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.blog-post-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.post-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
}

.post-category {
  color: #1890ff;
}

.post-date {
  color: #999;
}

.post-excerpt {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.read-more {
  display: inline-block;
  color: #1890ff;
  font-size: 0.9rem;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}
</style>