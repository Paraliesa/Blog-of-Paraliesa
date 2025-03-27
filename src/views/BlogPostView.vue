<template>
    <div class="blog-post-container">
      <div v-if="post" class="blog-post">
        <div class="post-header">
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta">
            <div class="post-info">
              <span class="post-category">{{ getCategoryName(post.category) }}</span>
              <span class="post-date">{{ post.date }}</span>
            </div>
            <router-link to="/blog" class="back-link">
              <span class="back-icon">←</span> 返回博客列表
            </router-link>
          </div>
        </div>
        
        <div class="post-content">
          <component 
            v-for="(block, index) in post.content" 
            :key="index"
            :is="getComponentForBlock(block.type)"
            :content="block.content"
            :language="block.language"
            :alt="block.alt"
            :src="block.src"
            :width="block.width"
            :align="block.align"
          />
        </div>
        
        <div class="post-footer">
          <div class="post-tags" v-if="post.tags && post.tags.length">
            <span class="tag-label">标签：</span>
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="post-tag"
            >
              {{ tag }}
            </span>
          </div>
          <div class="post-resorces" v-if="post.resorces && post.resorces.length">
            <span class="tag-label">引用：</span>
            <span 
              v-for="resorce in post.resorces" 
              :key="resorce"
              class="post-tag"
            >
              {{ resorce}}
            </span>
          </div>
          
          <div class="post-navigation">
            <router-link 
              v-if="prevPost" 
              :to="`/blog/${prevPost.id}`" 
              class="nav-link prev-link"
            >
              <span class="nav-icon">←</span> {{ prevPost.title }}
            </router-link>
            <div v-else class="nav-link disabled">
              <span class="nav-icon">←</span> 没有更早的文章
            </div>
            
            <router-link 
              v-if="nextPost" 
              :to="`/blog/${nextPost.id}`" 
              class="nav-link next-link"
            >
              {{ nextPost.title }} <span class="nav-icon">→</span>
            </router-link>
            <div v-else class="nav-link disabled">
              没有更新的文章 <span class="nav-icon">→</span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="post-not-found">
        <h2>文章未找到</h2>
        <p>抱歉，您请求的文章不存在或已被删除。</p>
        <router-link to="/blog" class="back-link">
          <span class="back-icon">←</span> 返回博客列表
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { blogPosts, getCategoryName, getPreviousPost, getNextPost } from '../data/blogPosts';
  import { getComponentForBlock } from '../components/BlogContentBlocks';
  
  const route = useRoute();
  const postId = computed(() => parseInt(route.params.id));
  
  // 获取当前文章
  const post = computed(() => {
    return blogPosts.find(p => p.id === postId.value) || null;
  });
  
  // 获取上一篇和下一篇文章
  const prevPost = computed(() => {
    if (!post.value) return null;
    return getPreviousPost(post.value.id);
  });
  
  const nextPost = computed(() => {
    if (!post.value) return null;
    return getNextPost(post.value.id);
  });
  
  // 页面加载时滚动到顶部
  onMounted(() => {
    window.scrollTo(0, 0);
  });
  </script>
  
  <style scoped>
  .blog-post-container {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 2rem;
    font-family: 'Nunito', 'Noto Sans SC', sans-serif;
  }
  
  .blog-post {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }
  
  .post-header {
    padding: 2rem 2rem 1.5rem;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .post-title {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.3;
    color: #333;
  }
  
  .post-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .post-info {
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
  }
  
  .post-category {
    color: #1890ff;
    font-weight: 600;
  }
  
  .post-date {
    color: #999;
  }
  
  .back-link {
    display: inline-flex;
    align-items: center;
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;
  }
  
  .back-link:hover {
    color: #1890ff;
  }
  
  .back-icon {
    margin-right: 0.5rem;
  }
  
  .post-content {
    padding: 2rem;
    line-height: 1.8;
    color: #333;
  }
  
  .post-footer {
    padding: 1.5rem 2rem 2rem;
    border-top: 1px solid #f0f0f0;
  }
  
  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
    align-items: center;
  }
  .post-resorces {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: -1rem;
    margin-bottom: 2rem;
    align-items: center;
  }
  
  .tag-label {
    font-size: 0.9rem;
    color: #666;
  }
  
  .post-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background-color: #f0f0f0;
    border-radius: 20px;
    font-size: 0.8rem;
    color: #666;
  }
  
  .post-navigation {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .nav-link {
    flex: 1;
    padding: 1rem;
    background-color: #f8f8f8;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    font-size: 0.9rem;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
  }
  
  .nav-link:hover {
    background-color: #f0f0f0;
  }
  
  .nav-link.prev-link {
    text-align: left;
  }
  
  .nav-link.next-link {
    text-align: right;
    justify-content: flex-end;
  }
  
  .nav-icon {
    margin: 0 0.5rem;
  }
  
  .nav-link.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .post-not-found {
    text-align: center;
    padding: 3rem;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .post-not-found h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .post-not-found p {
    color: #666;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    .blog-post-container {
      padding: 1rem;
    }
    
    .post-header {
      padding: 1.5rem 1.5rem 1rem;
    }
    
    .post-title {
      font-size: 1.8rem;
    }
    
    .post-content {
      padding: 1.5rem;
    }
    
    .post-navigation {
      flex-direction: column;
    }
  }
  </style>