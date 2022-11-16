<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <router-link to="/login">登录</router-link>
        </span>
      </h3>

      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="390px"
        class="content"
      >
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model.number="ruleForm.phone" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" />
          <el-button @click="getCode(phone)">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-input
            v-model="ruleForm.password2"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item required>
          <el-checkbox
            label="同意协议并注册《库里商业协议》"
            name="type"
            v-model="ruleForm.agree"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            style="width: 100%"
            @click="submitForm(ruleFormRef)"
            >完成注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs } from "vue";
import { userStore } from "@/store/user";
import { useRouter } from "vue-router";

const store = userStore();
const router = useRouter();
// 获取验证码
const getCode = async () => {
  try {
    const phone = ruleForm.phone;
    phone && (await store.getPhoneCode(phone));
    ruleForm.code = store.code;
  } catch (error) {}
};
// 注册用户

const ruleFormRef = ref(null);
const checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入手机号码"));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("请输入正确的手机号码!!"));
    } else {
      if (value < 18) {
        callback(new Error("请输入正确的手机号码!!"));
      } else {
        callback();
      }
    }
  }, 500);
};

const checkCode = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入验证码"));
  } else {
    callback();
  }
};

const checkAgree = (rule, value, callback) => {
  if (value != true) {
    return callback(new Error("请勾选同意协议!"));
  } else {
    callback();
  }
};

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入登录密码"));
  } else {
    if (ruleForm.password2 !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("password2", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== ruleForm.password) {
    callback(new Error("前后密码不一致!!"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  password: "",
  password2: "",
  phone: "",
  code: "",
  agree: true,
});

const rules = reactive({
  password: [{ validator: validatePass, trigger: "blur" }],
  password2: [{ validator: validatePass2, trigger: "blur" }],
  phone: [{ validator: checkPhone, trigger: "blur" }],
  code: [{ validator: checkCode, trigger: "blur" }],
  agree: [{ validator: checkAgree, trigger: "blur" }],
});

const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      console.log("submit!");
      const { phone, code, password } = ruleForm;
      await store.userRegister({
        phone,
        code,
        password,
      });
      console.log("000000000");
      router.push("/login");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>
<style scoped lang="less">
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    .content {
      margin-top: 80px;
      padding-right: 390px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
