<template>
    <div class="row justify-content-center">
        <div class="col-3">
            <div class="card shadow mb-3">
                <div class="card-body">
                    <div class="mb-3">
                        <b-avatar :src="user.avatar" size="12rem"></b-avatar>
                    </div>
                    <div class="mb-3">
                        <template v-if="editMode">
                            <div class="input-group">
                                <input 
                                type="text" 
                                placeholder="Имя" 
                                class="form-control"
                                v-model="user.first_name"
                                >
                                <input 
                                type="text" 
                                placeholder="Фамилия" 
                                class="form-control"
                                v-model="user.last_name"
                                >
                            </div>
                        </template>
                        <template v-else>
                            <span class="font-weight-bold">{{user.first_name}} {{user.last_name}}</span>
                        </template>
                    </div>
                    <div>
                        <template v-if="editMode">
                            <input 
                            type="email" 
                            placeholder="Почта" 
                            class="form-control"
                            v-model="user.email"
                            >
                        </template>
                        <template v-else>
                            <span>{{user.email}}</span>
                        </template>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div>
                    <button
                    v-if="editMode"
                    class="btn btn-primary"
                    @click="editAndSaveUserDetail('save')"
                    >
                        Сохранить
                    </button>
                </div>
                <div>
                    <template v-if="editMode">
                        <button
                        class="btn btn-secondary"
                        @click="editAndSaveUserDetail('cancel')"
                        >
                            Отменить
                        </button>
                    </template>
                    <template v-else>
                        <button
                        class="btn btn-secondary"
                        @click="editAndSaveUserDetail()"
                        >
                            Редактировать
                        </button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {},
                editMode: false
            }
        },
        mounted () {
            this.getUserDetail()
        },
        methods: {
            editAndSaveUserDetail(typeOperation = null) {
                this.editMode = true

                if(typeOperation == 'save') {
                    this.editMode = false
                }
                if(typeOperation == 'cancel') {
                    this.editMode = false
                }
            },
            getUserDetail() {
                this.user = this.$store.getters.USER_DETAIL(this.$route.params.id)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>