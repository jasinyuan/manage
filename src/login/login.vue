<template>
	<bg />
	<div class="admin-login">
		<div class="title">登 录</div>
		<div class="name">
			<!-- <el-input v-model.trim="username" placeholder="账号" /> -->
			<el-input
				v-model="username"
				placeholder="账号"
				class="input-with-select"
			>
				<template #prepend>
					<el-select
						v-model="select"
						placeholder="账号类型"
						style="width: 105px"
					>
						<el-option label="后台" value="1" />
						<el-option label="业务员" value="2" />
						<el-option label="用户" value="3" />
					</el-select>
				</template>
			</el-input>
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
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import api from "../api/index";
import router from "../router";
import bg from "../layout/bg.vue";

const username = ref();

const password = ref();

const select = ref("");

const goLogin = async () => {
	const res: any = await loginWhat();
	window.localStorage.setItem("name", res.name);
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

const loginWhat = async () => {
	if (select.value === "") {
		alert("请选择您的登录账号类型");
	} else {
		if (select.value === "1") {
			const res = await api.mangeLogin(username.value, password.value);
			return res.data;
		} else if (select.value === "2") {
			const res = await api.salesmanLogin(username.value, password.value);
			return res.data;
		} else if (select.value === "3") {
			const res = await api.userLogin(username.value, password.value);
			return res.data;
		}
	}
};
</script>

<style lang="less" scoped src="./login.less" />
