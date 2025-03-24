<template>
    <div class="profile-header">
      <div class="avatar-container">
        <img src="../assets/avatar.png" alt="Paraliesa" class="avatar" />
      </div>
      <h1 class="username">Paraliesa</h1>
      <p class="tagline">Just a Beginner.</p>
    </div>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: 'Nunito', sans-serif;
  }
  
  .avatar-container {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  
  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .username {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .tagline {
    font-size: 1rem;
    color: #666;
  }
  </style>