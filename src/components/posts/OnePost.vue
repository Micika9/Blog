<template>
  <div class="post">
    <div class="header">
      <h1>{{ post.title}}</h1>
      <div class="created-by">
        <el-avatar
          class="avatar"
          :size="20"
          fit="fit"
          :src="post.user.avatar" />
          {{ post.user.username }}
      </div>
    </div>
    <div class="text">
      {{ post.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-top: 80px;
  background-color: #fff;
  border-radius: 5px;
  .header {
    padding: 20px 20px 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    h1 {
      font-size: 22px;
      text-transform: uppercase;
      color: #606266;
      margin: 0;
      line-height: 1;
    }
    .created-by {
      margin-top: 10px;
      line-height: 20px;
      color: #606266;
      .avatar {
        display: inline-table;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
  .text {
    margin: 0;
    padding: 20px;
    padding-top: 10px;
    font-size: 17px;
    line-height: 25px;
    color: #303133;
  }
}
</style>
