<template>
	<div class="common-layout">
		<el-header height="70px">
			<div class="header">
				<div class="header-title">后台管理系统</div>
				<div class="header-right">
					<div class="message">icon</div>
					<div class="uname">
						<el-popover
							:width="300"
							popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 15px;"
						>
							<template #reference>
								<div>{{ name }}</div>
							</template>
							<template #default>
								<el-link
									:underline="false"
									@click="signout"
									type="primary"
									>退出登录</el-link
								>
							</template>
						</el-popover>
					</div>
				</div>
			</div></el-header
		>
		<el-container class="content_wrap">
			<el-aside width="220px"
				><el-row class="tac">
					<el-col :span="24">
						<el-menu
							default-active="4"
							collapse-transition
							class="el-menu-vertical-demo"
							v-for="(item, i) in list"
							:key="i"
						>
							<el-sub-menu :index="item.index">
								<template #title>
									<el-icon><location /></el-icon>
									<span>{{ item.name }}</span>
								</template>
								<el-menu-item
									:index="i.index"
									v-for="(i, t) in item.children"
								>
									{{ i.name }}
								</el-menu-item>
							</el-sub-menu>
						</el-menu>
					</el-col>
				</el-row></el-aside
			>
			<el-main class="main_wrap">main</el-main>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import { Location } from "@element-plus/icons-vue";
import { ref } from "vue";
import asideclass from "../aside-class/index";
import { useRouter } from "vue-router";

const list = ref();

const router = useRouter();

const name = ref(window.localStorage.getItem("name"));

const setList = (i: string) => {
	if (i === "background") {
		list.value = asideclass.bg;
	} else if (i === "consume") {
		list.value = asideclass.consume;
	} else if (i === "sale") {
		list.value = asideclass.sale;
	} else if (i === "salesman") {
		list.value = asideclass.salesman;
	} else {
		alert("获取数据失败，请重新尝试");
	}
};
setList(router.currentRoute._rawValue.name);

const signout = async () => {
	window.localStorage.setItem("name", "");
	router.push({
		path: "/",
	});
};
</script>

<style lang="less" scoped>
.common-layout {
	margin: 0;
	.header {
		display: flex;
		justify-content: space-between;
		background-color: #ffffff;
		padding: 0;
		font-weight: bold;
		color: #4d8bff;
		border-bottom: 1px solid rgba(128, 128, 128, 0.1);
		position: relative;
		z-index: 1;
		.header-title {
			line-height: 70px;
			margin-left: 33px;
			font-size: 25px;
		}
		.header-right {
			margin-right: 66px;
			margin-top: 25px;
			display: flex;
			font-size: 18px;
			.message {
				margin-right: 76px;
			}
		}
	}
	.el-header /deep/ {
		padding: 0;
	}
	.content_wrap {
		height: calc(100vh - 70px);
		.main_wrap {
			background-color: #f7f7f7;
		}
	}
}
</style>
