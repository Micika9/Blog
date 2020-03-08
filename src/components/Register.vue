<template>
  <div class="login-wrapper">
    <el-card class="login-box">
      <div slot="header" class="clearfix">
        <span class="title">Register</span>
      </div>
      <el-form
        class="form"
        :model="form"
        label-position="top">
        <el-form-item label="Email">
          <el-input
            placeholder="Email"
            v-model="form.email" />
        </el-form-item>

        <el-form-item label="Username">
          <el-input
            placeholder="Username"
            v-model="form.username" />
        </el-form-item>

        <el-form-item label="Password">
          <el-input
            placeholder="Password"
            v-model="form.password"
            show-password />
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        @click="register()">
        Register
      </el-button>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        email: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      const loading = this.$loading()
      await axios.post('http://localhost:3000/users', this.form)
      this.$message.success('Uspesno ste se registrovali. Molimo, prijavite se.')
      this.$router.push({ name: 'Login' })
      loading.close()
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-wrapper {
    margin: 100px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box {
      width: 400px;
      .form {
        margin-bottom: 20px;
      }
    }
  }
</style>
