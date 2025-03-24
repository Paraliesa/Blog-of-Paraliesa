<template>
    <div class="profile-info-card">
      <div class="info-header">
        <div>
          <h2 class="name">凶脸猫猫头 @Paraliesa</h2>
          <p class="bio">College Student</p>
          <p class="bio">独立开发者(?)/个人博主(?)/osu player</p>
        </div>
      </div>
      <div class="info-footer">
        <router-link to="/about" class="about-btn">关于我 • 了解更多</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .profile-info-card {
    background-color: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .info-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .bio {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.25rem;
  }
  
  .info-footer {
    display: flex;
    justify-content: flex-end;
  }
  
  .about-btn {
    background-color: #f5f5f5;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    cursor: pointer;
    color: #333;
    text-decoration: none;
    display: inline-block;
  }
  
  .about-btn:hover {
    background-color: #e8e8e8;
  }
  </style>