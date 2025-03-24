<template>
  <div class="profile-container">
    <div class="profile-layout">
      <div class="left-column">
        <ProfileHeader />
      </div>
      <div class="right-column">
        <ProfileInfo />
        <BlogCard />
        <div class="social-links">
          <SocialCard 
            platform="osu!" 
            followers="157" 
            url="https://osu.ppy.sh/users/30595368" 
          />
          <SocialCard 
            platform="GitHub" 
            followers="2" 
            url="https://github.com/Paraliesa" 
          />
          <SocialCard 
            platform="X" 
            followers="9" 
            url="https://x.com/paraliesa" 
          />
          <SocialCard 
            platform="Bilibili" 
            followers="173" 
            url="https://space.bilibili.com/249098445" 
          />
          <SocialCard 
            platform="RedNote" 
            followers="8" 
            url="https://www.xiaohongshu.com/user/profile/6555d48e000000000802cee2" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileHeader from '../components/ProfileHeader.vue';
import ProfileInfo from '../components/ProfileInfo.vue';
import BlogCard from '../components/BlogCard.vue';
import SocialCard from '../components/SocialCard.vue';
</script>

<style scoped>
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
}

.left-column {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 992px) {
  .social-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .profile-layout {
    grid-template-columns: 1fr;
  }
  
  .left-column {
    position: relative; 
    top: 0;
  }
  
  .social-links {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>