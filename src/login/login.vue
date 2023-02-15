<template>
	<div class="login-admin">
		<div>
			<el-input v-model="username" placeholder="账号" />
		</div>
		<div>
			<el-input
				v-model="password"
				type="password"
				placeholder="密码"
				show-password
			/>
		</div>
		<el-button type="primary" @click="goLogin">LOGIN</el-button>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import api from "../api/index";

const username = ref();

const password = ref();

const goLogin = async () => {
	const res = await api.mangeLogin(username.value, password.value);
	console.log(res);
};
</script>

<style lang="less" scoped src="./login.less" />
