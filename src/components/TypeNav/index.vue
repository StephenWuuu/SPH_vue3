<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="showCategory" @mouseleave="hideCategory">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in store.categoryLists"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="(c2, index) in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category1Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category1Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { categoryListStore } from "@/store";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import throttle from "lodash/throttle";

const currentIndex = ref(-1);
const isShow = ref(true);
const router = useRouter();
const route = useRoute();
const store = categoryListStore();
onMounted(() => {
  isShow.value = route.path === "/home";
});
const showCategory = () => {
  if (route.path != `/${route.path.split("/")[1]}`) {
    isShow.value = true;
  }
  if (route.path == "/search") {
    isShow.value = true;
  }
};
const hideCategory = () => {
  if (
    `/${route.path.split("/")[1]}` == "/search" ||
    `/${route.path.split("/")[1]}` == "/detail"
  ) {
    currentIndex.value = -1;
    isShow.value = false;
  }
};

const changeIndex = () => {
  throttle(function (index) {
    currentIndex.value = index;
  }, 50);
};
const goSearch = (event) => {
  const { categoryname, category1id, category2id, category3id } =
    event.target.dataset;
  if (categoryname) {
    const query = { categoryName: categoryname };
    if (category1id) {
      query.category1Id = category1id;
    } else if (category2id) {
      query.category2Id = category2id;
    } else if (category3id) {
      query.category3Id = category3id;
    }
    const { path, params } = route;
    if (path.indexOf("/search") === 0) {
      router.replace({
        path: "/search",
        params,
        query,
      });
    } else {
      router.push({ path: "/search", query });
    }
  }
};
</script>
<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 27.5px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              text-decoration: none;
            }
          }
          h3:hover {
            background: #ccc;
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
