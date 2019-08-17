<template>
  <div class="login-container">
    <div class="login-container-wapper">
      <el-row class="login-container-form">
        <el-col
          :xs="22"
          :sm="5"
          :offset="17"
        >
          <el-card>
            <div slot="header">
              <span class="header">欢迎登录</span>
            </div>
            <el-form
              ref="loginForm"
              :model="loginForm"
              :rules="rules"
            >
              <el-form-item prop="account">
                <el-input
                  v-model="loginForm.account"
                  prefix-icon="el-icon-user"
                  size="medium"
                  placeholder="请输入用户名"
                  clearable
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="loginForm.password"
                  prefix-icon="el-icon-lock"
                  size="medium"
                  placeholder="请输入登录密码"
                  show-password
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  style="width:100%"
                  size="small"
                  @click.native.prevent="handleLogin"
                  :loading="loading"
                >
                  {{ loading?'正在登录中...':'登录' }}
                </el-button>
              </el-form-item>
              <p style="font-size: 12px;text-align: center;color: #999;">
                输入任意用户名密码登录
              </p>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
      },
      rules: {
        account: [{
          required: 'true',
          message: '请输入用户名',
          trigger: 'blur',
        }],
        password: [{
          required: 'true',
          message: '请输入登录密码',
          trigger: 'blur',
        }],
      },
      loading: false,
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          console.log('success submit!');
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .login-container {
    &-wapper {
      height: 100vh;
      background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80') no-repeat center center;
      background-size: cover;
    }

    &-form {
      top: 55%;
      transform: translateY(-60%);
    }
  }
</style>
