<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <h1 class="title">Add new Post</h1>
      <el-input placeholder="Title..." v-model="form.title" />
      <el-input
        type="textarea"
        :rows="5"
        placeholder="Text..."
        v-model="form.text" />
      <el-button class="margin" type="primary">Save</el-button>
      <el-button  type="primary">View</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: '',
        text: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.margin {
  margin: 20px 0;
  display: inline-block;
  justify-content: space-between;
}
</style>
