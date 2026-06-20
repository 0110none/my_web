<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <section class="resume-viewer" aria-label="程嘉骏PDF简历预览">
    <figure class="resume-page">
      <img :src="withBase('/resume-pages/page-1.png')" alt="程嘉骏个人简历第一页" loading="eager" />
    </figure>
  </section>
</template>
