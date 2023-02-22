<template>
	<div class="box">
		<div class="sidebar">
			<div class="title">后台管理</div>
			<div class="list">
				<listCard class="card" />
			</div>
		</div>
		<div class="content">
			<div class="head">头部</div>
			<div class="operate">操作</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import listCard from "./components/list-card.vue";
</script>

<style scoped src="./backgound.less" />
