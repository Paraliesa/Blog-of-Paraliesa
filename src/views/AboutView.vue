<template>
    <div class="about-container">
      <div class="about-header">
        <img src="../assets/avatar.png" alt="Paraliesa" class="about-avatar" />
        <h1 class="about-name">关于 Paraliesa</h1>
      </div>
      
      <div class="about-content">
        <section class="about-section">
          <h2 class="section-title">个人简介</h2>
          <p class="section-text">
            大家好，我是猫猫头（Paraliesa），杭州某双非计算机大三在读，目标是成为厉害的开发者、个人博主、<a href="https://osu.ppy.sh/wiki/en/Tournaments/OWC" target="_blank" class="text-link">owc</a>选手。
          </p>
          <p class="section-text">并不重度的游戏爱好者。</p>
          <p class="section-text">热爱技术、音乐、分享以及在线下狠狠面基网友。</p>  
          <p class="section-text">不爱吃鱼(某网友：这🐱怎么不吃🐟的)。</p>  
          <br>         
          <p class="section-text">
            悲观主义者，希望能够再次热爱生活。
          </p>
        </section>
        
        <section class="about-section">
          <h2 class="section-title">个人技能</h2>
          <div class="skills-grid">
            <div class="skill-card">
              <h3 class="skill-title">前端开发</h3>
              <p class="skill-description">Vue、JavaScript、HTML/CSS</p>
            </div>
            <div class="skill-card">
              <h3 class="skill-title">后端开发</h3>
              <p class="skill-description">Python、MySQL、C++</p>
            </div>
            <div class="skill-card">
              <h3 class="skill-title">osu!std</h3>
              <p class="skill-description">游戏也是我的一部分</p>
            </div>
            <div class="skill-card">
              <h3 class="skill-title">Level Up</h3>
              <p class="skill-description">未来一定要在这里加上更多东西</p>
            </div>
          </div>
        </section>
        
        <section class="about-section">
          <h2 class="section-title">关于博客</h2>
          <p class="section-text">
            我将其视为一种每天逼迫自己产出的方式。
          </p>
          <p class="section-text">
            灵感和部分样式设计来源：
          </p>
          <div class="contact-links">
            <a href="https://github.com/idealclover/Homepage" class="contact-link">https://github.com/idealclover/Homepage</a>
          </div>
        </section>
      </div>
      
      <div class="about-footer">
        <router-link to="/" class="back-button">返回首页</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 2rem;
  }
  
  .about-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }
  
  .about-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  .about-name {
    font-size: 2rem;
    font-weight: 700;
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  .about-section {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  .section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f0f0f0;
  }
  
  .section-text {
    line-height: 1.8;
    color: #333;
  }

  .text-link {
    color: #1890ff;
    text-decoration: none;
    transition: color 0.2s;
  }

  .text-link:hover {
    text-decoration: underline;
    color: #40a9ff;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
  
  @media (min-width: 640px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .skill-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 1.25rem;
  }
  
  .skill-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .skill-description {
    font-size: 0.9rem;
    color: #666;
  }
  
  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .contact-link {
    color: #1890ff;
    text-decoration: none;
  }
  
  .contact-link:hover {
    text-decoration: underline;
  }
  
  .about-footer {
    margin-top: 3rem;
    text-align: center;
  }
  
  .back-button {
    display: inline-block;
    background-color: #333;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
  }
  
  .back-button:hover {
    background-color: #555;
  }
  </style>