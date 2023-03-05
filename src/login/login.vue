<template>
	<bg />
	<div class="admin-login">
		<div class="title">登 录 账 号</div>
		<div class="name">
			<el-input v-model.trim="username" placeholder="账号" />
		</div>
		<div class="password">
			<el-input
				v-model.trim="password"
				type="password"
				placeholder="密码"
				show-password
			/>
		</div>
		<el-button @click="goLogin" type="primary" size="large" class="submit"
			>LOGIN</el-button
		>
		<div class="change-login">
			<el-button link type="primary" @click="changeLogin('1')"
				>后台登录</el-button
			>
			<el-button link type="primary" @click="changeLogin('2')"
				>业务员登录</el-button
			>
			<el-button link type="primary" @click="changeLogin('3')"
				>用户登录</el-button
			>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import api from "../api/index";
import router from "../router";
import bg from "../layout/bg.vue";

const username = ref();

const password = ref();

const loginType = ref("1");

const goLogin = async () => {
	const res = await loginWhat();
	window.localStorage.setItem("name", res?.name);
	if (res?.state === 0) {
		alert("账号密码错误或登录类型错误");
	}
	const id = res!.id;
	const state = res!.state;
	if (id === 1) {
		router.push({
			path: "/salesman",
		});
	} else if (id === 2) {
		router.push({
			path: "/background",
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

const changeLogin = (i: string) => {
	if (i !== loginType.value) {
		loginType.value = i;
	}
};

const loginWhat = async () => {
	if (loginType.value === "1") {
		const res = await api.mangeLogin(username.value, password.value);
		return res.data;
	} else if (loginType.value === "2") {
		const res = await api.salesmanLogin(username.value, password.value);
		return res.data;
	} else if (loginType.value === "3") {
		const res = await api.userLogin(username.value, password.value);
		return res.data;
	}
};
</script>

<style lang="less" scoped src="./login.less" />
