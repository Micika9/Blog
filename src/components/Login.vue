<template>
  <div class="login-wrapper">
    <el-card class="login-box">
      <div slot="header" class="clearfix">
        <span class="title">Login</span>
      </div>
      <el-form
        class="form"
        :model="form"
        label-position="top">
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
      <div class="pull-right">
        <el-button
          type="primary"
          @click="submit()">
          Login
        </el-button>
      </div>
      <div class="clear" />
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions({
      login: 'user/login'
    }),

    async submit () {
      const loading = this.$loading()
      const user = await this.login(this.form)
      if (user) {
        this.$message.success('Uspesno ste se prijavili')
        this.$router.push({ name: 'Home' })
      } else {
        this.$message.error('Prijava nije uspela. Pokusaj ponovo.')
      }
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
