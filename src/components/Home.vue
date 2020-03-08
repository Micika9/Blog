<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="4">
      <one-post v-for="post in posts" :key="post.id" :post="post" />
    </el-col>
  </el-row>
</template>

<script>
import OnePost from './posts/OnePost'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    OnePost
  },

  computed: {
    ...mapState({
      posts: state => state.posts.posts
    })
  },
  methods: {
    ...mapActions({
      getPosts: 'posts/getPosts'
    })
  },

  created () {
    this.getPosts()
  }
}
</script>
