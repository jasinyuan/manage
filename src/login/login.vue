<template>
	<div class="login-admin">
		<div class="title">登 录</div>
		<div class="input">
			<el-input v-model="username" placeholder="账号" />
		</div>
		<div class="input">
			<el-input
				v-model="password"
				type="password"
				placeholder="密码"
				show-password
			/>
		</div>
		<div class="submin">
			<el-button type="primary" @click="goLogin">LOGIN</el-button>
			<el-button type="primary" @click="goLogin">注册</el-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import api from "../api/index";
import router from "../router";

const username = ref();

const password = ref();

const goLogin = async () => {
	const res = await api.userLogin(username.value, password.value);
	const id = res.data.id;
	const state = res.data.state;
	if (id === 1) {
		router.push({
			path: `salesman/${res.data.state}`,
		});
	} else if (id === 2) {
		router.push({
			path: "background",
		});
	} else if (id === 3) {
		if (state === 1) {
			router.push({
				path: "/sale",
			});
		} else if (state === 4) {
			router.push({
				path: "/consume",
			});
		}
	}
	username.value = "";
	password.value = "";
};
</script>

<style lang="less" scoped src="./login.less" />
