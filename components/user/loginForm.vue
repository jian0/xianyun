<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input v-model="form.username" placeholder="用户名/手机"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit(form)">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        //   if (this.form.username !== '') {
        //     this.$refs.form.validateField('username');
        //   }
        if (!/^1[3-9]\d{9}$/.test(value)) {
          callback(new Error("用户名输入不合法"));
        }
        callback();
      }
    };
    return {
      // 表单数据
      form: {
        username: "",
        password: ""
      },
      // 表单规则
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit(form) {
      console.log(this.form);
      this.$refs.form.validate(async(valid) => {
          if (valid) {
            // alert('submit!');
            let res = await this.$axios({
                url:'/accounts/login',
                method:'POST',
                data:this.form
            })
            console.log(res);
            if(res.status === 200){
                this.$router.push('/')
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>