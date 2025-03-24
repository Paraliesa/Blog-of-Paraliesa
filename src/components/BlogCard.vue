<template>
    <div class="blog-card">
      <div class="blog-header">
        <div class="blog-info">
          <h3 class="blog-title">博客</h3>
          <p class="blog-description">记录技术/生活/随想/测评</p>
          <p class="blog-url"></p>
        </div>
      </div>
      <div class="blog-footer">
        <router-link to="/blog" class="blog-action-btn">去看看 • 历史文章</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .blog-card {
    background-color: #2d3748;
    color: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
  }
  
  .blog-header {
    margin-bottom: 1rem;
  }
  
  .blog-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .blog-description {
    font-size: 0.9rem;
    color: #cbd5e0;
    margin-bottom: 0.25rem;
  }
  
  .blog-url {
    font-size: 0.9rem;
    color: #a0aec0;
  }
  
  .blog-footer {
    display: flex;
    justify-content: flex-end;
  }
  
  .blog-action-btn {
    background-color: #1a202c;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    cursor: pointer;
    color: #e2e8f0;
    text-decoration: none;
    display: inline-block;
  }
  
  .blog-action-btn:hover {
    background-color: #2d3748;
  }
  </style>