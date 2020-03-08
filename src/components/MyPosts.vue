<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="4">
      <one-post />
    </el-col>
  </el-row>
</template>

<script>
import OnePost from './posts/OnePost'
export default {
  components: {
    OnePost
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 80px;
  font-size: 10px;
  text-transform: uppercase;
  color: #606266;
}
.text {
  background-color: #fff;
  border-radius: 5px;
  p {
    margin: 0;
    font-size: 17px;
    line-height: 25px;
    padding: 40px 20px;
    color: #303133;
  }
  .avatar {
    margin: 20px 20px 0;
    display: inline-table;
  }
}
.comment {
  border-top: 2px solid #C0C4CC;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 20px;
  box-shadow: 4px 4px #DCDFE6;
  span {
    color: #409EFF;
  }
}
</style>
