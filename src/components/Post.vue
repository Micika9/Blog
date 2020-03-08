<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="4">
      <one-post />

      <div class="comment">
        <span>comments(2)</span>
      </div>

      <div class="comments">
        <el-input
          class="textarea"
          type="textarea"
          :rows=5
          placeholder="Comment"
          v-model="form.textarea">
        </el-input>
        <el-button class="btn" type="success">Send</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import OnePost from './posts/OnePost'

export default {
  components: {
    OnePost
  },

  data () {
    return {
      form: {
        title: 'LOREM IPSUM DELOR SIT AMET',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur laborum voluptates, quidem quaerat doloremque vero saepe alias debitis delectus! Explicabo, blanditiis. Ab quo perferendis eum veniam commodi dolorum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur laborum voluptates, quidem quaerat doloremque vero saepe alias debitis delectus! Explicabo, blanditiis. Ab quo perferendis eum veniam commodi dolorum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur laborum voluptates, quidem quaerat doloremque vero saepe alias debitis delectus! Explicabo, blanditiis. Ab quo perferendis eum veniam commodi dolorum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur laborum voluptates, quidem quaerat doloremque vero saepe alias debitis delectus! Explicabo, blanditiis. Ab quo perferendis eum veniam commodi dolorum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur laborum voluptates, quidem quaerat doloremque vero saepe alias debitis delectus! Explicabo, blanditiis. Ab quo perferendis eum veniam commodi dolorum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur laborum voluptates, quidem quaerat doloremque vero saepe alias debitis delectus! Explicabo, blanditiis. Ab quo perferendis eum veniam commodi dolorum dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur laborum voluptates, quidem quaerat doloremque vero saepe alias debitis delectus! Explicabo, blanditiis. Ab quo perferendis eum veniam commodi dolorum dolores!',
        textarea: ''
      },
      user: {
        username: 'Micika9'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  margin-top: 80px;
  background-color: #fff;
  border-radius: 5px;
  h1 {
    padding: 30px 20px;
    font-size: 15px;
    text-transform: uppercase;
    color: #606266;
  }
  p {
    margin: 0;
    font-size: 17px;
    line-height: 25px;
    padding: 10px 20px;
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
.comments {
  margin-top: 6px;
  background-color: #fff;
  border-radius: 5px;
  .textarea {
    padding: 20px 20px;
    box-sizing: border-box;
  }
  .btn {
    margin: 0 20px 20px;
  }
}
</style>
