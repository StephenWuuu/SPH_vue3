<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>无风欢迎您！</p>
          <p v-if="!userName">
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
          <p v-else>
            <a>{{ userName }}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="javascript::">我的无风</a>
          <a href="javascript::">无风会员</a>
          <a href="javascript::">企业采购</a>
          <a href="javascript::">关注无风</a>
          <a href="javascript::">合作招商</a>
          <a href="javascript::">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="无风" to="/home">
          <img
            style="width: 60px"
            src="./images/android-chrome-192x192.png"
            alt=""
          />
        </router-link>
      </h1>
      <div class="searchArea">
        <form class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keywords"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { userStore } from "@/store/user";

const router = useRouter();
const route = useRoute();
const keywords = ref("");
const store = userStore();

const goSearch = () => {
  const { path, query } = route;
  if (keywords.value) {
    if (path.indexOf("/search") === 0) {
      router.push({
        name: "search",
        params: { keywords: keywords.value || undefined },
        query,
      });
      keywords.value = "";
    } else {
      router.push(`/search/${keywords.value}`);
      keywords.value = "";
    }
  } else {
    if (path.indexOf("/search") === 0) {
      router.push({ name: "search", query });
      keywords.value = "";
    } else {
      router.push({ name: "search" });
      keywords.value = "";
    }
  }
};

const logout = () => {
  try {
    store.userLogout();
    router.push("/home");
  } catch (error) {
    alert(error.message);
  }
};

const userName = computed(() => {
  return store.userInfo.name;
});

onMounted(() => {
  store.getUserInfo();
});
</script>
<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
