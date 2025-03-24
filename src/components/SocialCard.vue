<template>
    <a :href="url" target="_blank" rel="noopener noreferrer" class="social-card">
      <div class="card-content" :class="colorClass">
        <div class="logo-container">
          <img :src="logoUrl" :alt="platform + ' logo'" class="platform-logo" />
        </div>
        <div class="card-info">
          <span class="platform-name">{{ platform }}</span>
          <span class="followers-count" v-if="followers">{{ followers }} Followers</span>
        </div>
        <div class="glow-effect"></div>
      </div>
    </a>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    platform: {
      type: String,
      required: true
    },
    followers: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      required: true
    }
  });
  
  const colorClass = computed(() => {
    switch(props.platform.toLowerCase()) {
      case 'osu!': return 'osu-card';
      case 'github': return 'github-card';
      case 'x': return 'x-card';
      case 'bilibili': return 'bilibili-card';
      case 'rednote':
      case '小红书':
      case 'xiaohongshu': return 'rednote-card';
      default: return props.color || 'default-card';
    }
  });
  
  const logoUrl = computed(() => {
    switch(props.platform.toLowerCase()) {
      case 'osu!': 
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png';
      case 'github': 
        return 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
      case 'x': 
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png';
      case 'bilibili': 
        return 'https://www.svgrepo.com/show/345504/bilibili.svg';
      case 'rednote':
      case '小红书':
      case 'xiaohongshu':
        return new URL('../assets/rednote.png', import.meta.url).href;
      default: 
        return '';
    }
  });
  </script>
  
  <style scoped>
  .social-card {
    display: block;
    text-decoration: none;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
  
  .social-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  .card-content {
    position: relative;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    height: 100px;
    overflow: hidden;
    color: white;
  }
  
  .logo-container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 8px;
  }
  
  .platform-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .card-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .platform-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .followers-count {
    font-size: 0.9rem;
    opacity: 0.8;
  }
  
  .glow-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  .social-card:hover .glow-effect {
    opacity: 1;
  }
  
  /* Platform specific styles */
  .osu-card {
    background: linear-gradient(135deg, #ff66aa 0%, #ff4d94 100%);
  }
  
  .osu-card .glow-effect {
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 102, 170, 0) 70%);
  }
  
  .github-card {
    background: linear-gradient(135deg, #24292e 0%, #1a1e22 100%);
  }
  
  .github-card .glow-effect {
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(36, 41, 46, 0) 70%);
  }
  
  .x-card {
    background: linear-gradient(135deg, #1a1e22 0%, #000000 100%);
  }
  
  .x-card .glow-effect {
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
  }
  
  .bilibili-card {
    background: linear-gradient(135deg, #fb7299 0%, #fc8bab 100%);
  }
  
  .bilibili-card .glow-effect {
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(251, 114, 153, 0) 70%);
  }
  
  .rednote-card {
    background: linear-gradient(135deg, #fe2c55 0%, #ff6c79 100%);
  }
  
  .rednote-card .glow-effect {
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(254, 44, 85, 0) 70%);
  }
  
  .default-card {
    background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
  }
  
  .default-card .glow-effect {
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(108, 92, 231, 0) 70%);
  }
  
  /* 添加卡片内部的光效 */
  .social-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(45deg);
    transition: all 0.5s ease;
    opacity: 0;
  }
  
  .social-card:hover::before {
    animation: shine 1.5s ease;
  }
  
  @keyframes shine {
    0% {
      left: -50%;
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    100% {
      left: 150%;
      opacity: 0;
    }
  }
  </style>