<template>
    <div>
        <transition :name="transitionName">
            <router-view :key="$route.fullPath" :client_key="client_key" :api_id="api_id" :card_processor="card_processor" :description="description"></router-view>
        </transition>
        <notifications group="message" />
    </div>
</template>

<script>
    import AuthServices from '../services/AuthService'
    export default {
        props:['card_processor','client_key','api_id','description'],
        mixins:[AuthServices],
        data() {
            return {
                transitionName: 'slide-left',
            };
        },
        methods: {
            beforeRouteUpdate(to, from, next) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
                next()
            },
            getPlanTypesCallback(response){
                if(response.status > 0){

                }
            }
        },
        mounted() {
            this.getPlanTypesCall(this.getPlanTypesCallback);
        }
    };
</script>

<style>
    
</style>