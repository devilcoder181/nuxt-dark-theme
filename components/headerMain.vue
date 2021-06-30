<template>
    <header>
        <div class="nav_">
            <div class="logo_">
            
            </div>
            <div class="switcher_">
                <nuxt-link class="btn_" to="/">Home</nuxt-link>
                <nuxt-link class="btn_" to="about">About</nuxt-link>
                <button class="btn_" @click="switchLang()">{{langTitle}}</button>
                <button class="btn_" @click="swtichTheme()">Switch Theme</button>
            </div>
        </div>
    </header> 
</template>

<script>
export default {
    data() {
        return {
            theme: '',
            langTitle: 'Arabic',
            lang: '',
            dir: ''
        }
    },
    methods: {
        swtichTheme() {
            if(process.browser){
                var getTheme = localStorage.getItem("theme");

                if(getTheme == 'dark'){
                    this.theme = 'light'
                }else{
                    this.theme = 'dark'
                }
            }
            this.$store.commit('updateTheme', this.theme)
        },
        switchLang() {
            if(process.browser){
                var getLang = localStorage.getItem("lang");

                if(getLang == 'ar'){
                    this.lang = 'en'
                    this.langTitle = 'Arabic'
                    this.dir = 'ltr'
                }else{
                    this.lang = 'ar'
                    this.langTitle = 'English'
                    this.dir = 'rtl'
                }
            }
            this.$store.commit('updateLang', this.lang)
            this.$store.commit('dir', this.dir)
        }
    },    
}
</script>

<style lang="scss" scoped>
    header{
        position: relative;
        display: block;
        width: 100%;
        height: 100px;
        padding: 0.75em 0;

        .nav_{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;

            .logo_{
                position: relative;
                display: block;
                height: 100%;

                img{
                    width: auto;
                    display: block;
                    height: 100%;
                }
            }
        }

        .switcher_{
            display: flex;
            margin: 0 -5px;

            .btn_{
                margin: 0 5px;
            }
        }
    }
</style>