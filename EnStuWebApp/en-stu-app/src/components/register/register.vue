<template>
<div class="container height-100">
    <div class="row height-100 display-flex align-items-center">
        <form class="col s12">
            <div class="row no-margin-bottom">
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate">
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="row margin-top-20">
                <div class="col s12">
                    <button class="btn waves-effect waves-light width-100" type="button" name="action" @click="register">
                        Đăng ký
                    </button>
                </div>
            </div>
            <div class="row margin-top-20">
                <div class="col s12">
                    <button class="waves-effect waves-orange-lighten-1 btn-flat light-blue-text text-darken-4 width-100 btn-sub" 
                    type="button"
                    @click="login">
                        Đăng nhập
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss" src="./register.scss"></style>
