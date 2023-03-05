<template>
	<div class="common-layout">
		<el-header height="70px">
			<div class="header">
				<div class="header-title">后台管理系统</div>
				<div class="header-right">
					<div class="message">icon</div>
					<div class="uname">name</div>
				</div>
			</div></el-header
		>
		<el-container>
			<el-aside width="220px"
				><el-row class="tac">
					<el-col :span="24">
						<el-menu
							default-active="1"
							collapse-transition
							class="el-menu-vertical-demo"
							@open="handleOpen"
							@close="handleClose"
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
			<el-main>main</el-main>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import { Location } from "@element-plus/icons-vue";
import { ref } from "vue";
import asideclass from "../aside-class/index";
import { useRouter } from "vue-router";
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};

const list = ref();

const router = useRouter();

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
			display: flex;
			line-height: 70px;
			font-size: 18px;
			.message {
				margin-right: 76px;
			}
			.uname {
				margin-right: 33px;
			}
		}
	}
	.el-header /deep/ {
		padding: 0;
	}
}
</style>
