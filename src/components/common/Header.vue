<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="4">
      <el-menu mode="horizontal">
        <el-menu-item><router-link :to="{ name: 'Home' }">Home</router-link></el-menu-item>
        <template v-if="user">
          <el-menu-item><router-link :to="{ name: 'MyPosts' }">My Post</router-link></el-menu-item>
          <el-menu-item><router-link :to="{ name: 'CreatePost' }">Create Post</router-link></el-menu-item>
          <el-menu-item class="user right">
            <el-dropdown trigger="click" @command="handleClick">
              <span class="el-dropdown-link">
                {{ user.username }} <el-avatar  class="avatar" icon="el-icon-user-solid" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-if="false" command="profile">Profile</el-dropdown-item>
                <el-dropdown-item command="logout">Logout</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
        </template>
        <template v-else>
          <el-menu-item class="right"><router-link :to="{ name: 'Register' }">Register</router-link></el-menu-item>
          <el-menu-item class="right"><router-link :to="{ name: 'Login' }">Login</router-link></el-menu-item>
        </template>
        </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },

  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),

    handleClick (command) {
      if (command === 'profile') {

      } else {
        this.logout()
        this.$message.success('Uspesno ste se odjavili')
        if (this.$route.name !== 'Home') {
          this.$router.push({ name: 'Home' })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.right {
  float: right !important;
}
.user {
  .avatar {
    margin-left: 10px;
    /deep/ i {
      margin: 0;
    }
  }
}
</style>
