<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="4">
      <h1 class="title">Add new Post</h1>
      <el-input class="placeholder" placeholder="Title" v-model="form.title" />
      <el-input
        type="textarea"
        :rows="5"
        placeholder="Type something..."
        v-model="form.text" />
      <el-button class="button" type="primary" @click="save()">Save</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      form: {
        title: '',
        text: ''
      }
    }
  },

  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },

  methods: {
    ...mapActions({
      createPost: 'posts/createPost'
    }),

    async save () {
      if (this.form.title && this.form.text) {
        const loading = this.$loading()
        const payload = {
          ...this.form,
          userId: this.user.id,
          date: new Date()
        }
        const post = await this.createPost(payload)
        this.$message.success('Uspesno ste postavili objavu')
        this.$router.push({ name: 'Post', params: { id: post.id } })
        loading.close()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 30px;
  margin: 50px 0 30px;
}
.placeholder {
  margin: 0 0 20px;
}
.button {
  margin: 20px 0;
  display: inline-block;
}
</style>
