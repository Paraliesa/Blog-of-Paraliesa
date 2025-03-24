<template>
    <div class="social-card">
      <div class="platform-info" :class="color">
        <span class="platform-name">{{ platform }}</span>
        <span class="followers-count">{{ followers }} Followers</span>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    platform: {
      type: String,
      required: true
    },
    followers: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'bg-gray-500'
    }
  });
  </script>
  
  <style scoped>
  .social-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  .platform-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    color: white;
  }
  
  .platform-name {
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .followers-count {
    font-size: 1rem;
  }
  
  .bg-blue-500 {
    background-color: #1890ff;
  }
  
  .bg-pink-400 {
    background-color: #fb7299;
  }
  
  .bg-black {
    background-color: #24292e;
  }
  
  .bg-red-600 {
    background-color: #c62f2f;
  }
  </style>