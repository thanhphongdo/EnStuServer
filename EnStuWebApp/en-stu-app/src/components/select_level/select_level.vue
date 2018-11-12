<template>
<div class="container height-100">
    <div class="row height-100 display-flex flex-column justify-content-center">
        <div class="col s12 text-size-20 main-color-text">
            Chọn trình độ Anh Ngữ của bạn
        </div>
        <div class="col s12">
            <!-- <div class="col s12">
                <button class="waves-effect waves-orange-lighten-1 btn-flat light-blue-text text-darken-4 width-100 btn-sub" @click="selectLevel">
                    Người mới bắt đầu
                </button>
            </div>
            <div class="col s12">
                <button class="waves-effect waves-orange-lighten-1 btn-flat light-blue-text text-darken-4 width-100 btn-sub">
                    Cơ bản
                </button>
            </div>
            <div class="col s12">
                <button class="waves-effect waves-orange-lighten-1 btn-flat light-blue-text text-darken-4 width-100 btn-sub">
                    Trung bình
                </button>
            </div>
            <div class="col s12">
                <button class="waves-effect waves-orange-lighten-1 btn-flat light-blue-text text-darken-4 width-100 btn-sub">
                    Trên trung bình
                </button>
            </div> -->
            <div class="col s12" v-for="(item, index) in getLevelBySource('source_1')" :key="index">
                <button class="waves-effect waves-orange-lighten-1 btn-flat light-blue-text text-darken-4 width-100 btn-sub"
                    @click="selectLevel">
                    {{item.name}}
                </button>
            </div>
            <!-- <div class="col s12">
                <div v-for="item in [1,2,3]" :key="item">
                    {{item}}
                </div>
            </div> -->
        </div>
    </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss" src="./select_level.scss"></style>
