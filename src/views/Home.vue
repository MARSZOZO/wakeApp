<template>
  	<div>
		<div class="new-item card-block shadow d-flex align-items-end justify-content-between mb-5">
			<div class="new-item_form">
				<label>Имя</label>
				<input type="text" placeholder="Введите имя" class="form-control" v-model="userData.first_name" />
			</div>
			<div class="new-item_form">
				<label>Фамилия</label>
				<input type="text" placeholder="Введите фамилию" class="form-control" v-model="userData.last_name" />
			</div>
			<div class="new-item_form">
				<label>Почта</label>
				<input type="email" placeholder="Введите почту" class="form-control" v-model="userData.email" />
			</div>
			<div>
				<button class="btn btn-info" @click="addNewUser()">
				Добавить пользователя
				</button>
			</div>
    	</div>

		<div class="row mb-3">
			<div class="col">
   				<b-button :pressed.sync="sortAbc" variant="primary"><i :class="`fas fa-sort-numeric-${sortAbc ? 'up' : 'down'}`"></i></b-button>
			</div>
		</div>

		<div class="row px-3">			
			<template v-if="userList == ''">
				<div v-for="skeletonItem in 6" class="p-0">
					<b-skeleton type="input" animation="throb" class="mb-4"></b-skeleton>
				</div>
			</template>
			<template v-else>
			<div class="item card-block shadow d-flex justify-content-center align-items-center mb-4" v-for="(item, index) in userList" :key="index">
				<div>
					<span class="mr-4">#{{item.id}}</span>
					<b-avatar :src="item.avatar"></b-avatar>
				</div>
				<div class="item_info">
					<span class="font-weight-bold">{{ item.first_name }} {{ item.last_name }}</span>
				</div>
				<div class="item_info">
					<span>{{ item.email }}</span>
				</div>
				<div class="item_action">
					<router-link :to="`/users/${item.id}`">
						<button class="btn btn-primary mr-3">Посмотреть</button>
					</router-link>
					<button class="btn btn-danger" @click="deleteItem(index)">
					Удалить
					</button>
				</div>
			</div>
			</template>
		</div>
  	</div>
</template>

<script>
const initialUserDataItem = () => ({
  first_name: "",
  last_name: "",
  email: "",
});

export default {
	data() {
		return {
			userData: {},
			sortAbc: false
		};
	},
	watch: {
		sortAbc() {
			console.log('сортировка')
			this.$store.dispatch('SORT_USER_LIST')
		}
	},
	computed: {
		userList() {
			return this.$store.getters.ITEMS;
		},
	},
	mounted() {
		this.userData = initialUserDataItem();
	},
	methods: {
		addNewUser() {
			this.$store.dispatch("ADD_NEW_ITEM", this.userData);
			this.userData = initialUserDataItem();
		},
		deleteItem(index) {
			this.$store.dispatch("DELETE_PUBLISH_API_LIST", index);
		},
	},
};
</script>

<style scoped lang="scss">
.btn-info {
	color: #ffffff;
	text-transform: uppercase;
	background-color: #4f719d;
	border-color: #4f719d;
	&:hover {
		color: #ffffff;
		background-color: #446187;
		border-color: #446187;
	}
	&:focus {
		color: #ffffff;
		background-color: #446187;
		border-color: #446187;
	}
}
.btn-primary {
    color: #fff;
    background-color: #FB8A2E;
    border-color: #FB8A2E;
	&:hover {
		color: #ffffff;
		background-color: #dd7b2a;
		border-color: #dd7b2a;
	}
	&:focus {
		color: #ffffff;
		background-color: #dd7b2a;
		border-color: #dd7b2a;
	}
	&.active {
		color: #fff;
		background-color: #FB8A2E;
		border-color: #FB8A2E;
	}
}
.card-block {
  padding: 10px 20px;
  border-radius: 10px;
}
.new-item .new-item_form {
  flex: 1;
  margin-right: 20px;
  & label {
    color: #aaaaaa;
    font-size: 13px;
  }
}
.item .item_info {
	flex: 1;
	margin-left: 20px;
}
.item .item_action {
	& a {
		margin-right: 15px;
	}
}
.shadow {
  box-shadow: 0px 0px 1px rgba(13, 35, 67, 0.35),
    0px 8px 17px -8px rgba(13, 35, 67, 0.15) !important;
}
.b-skeleton-input {
    height: 60px;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    border: #ced4da solid 1px;
    border-radius: 0.25rem;
}
</style>

