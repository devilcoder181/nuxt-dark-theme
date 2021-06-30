export const state = () => ({
    getTheme: '',
    lang: '',
    dir: ''
})

export const mutations = {
    updateTheme(state, value) {
        state.getTheme = value;
        window.localStorage.setItem('theme', value);
    },
    updateLang(state, value) {
        state.lang = value;
        window.localStorage.setItem('lang', value);
    },
    dir(state, value) {
        state.dir = value;
        window.localStorage.setItem('dir', value);
    },
}

export const actions = {
    nuxtClientInit({ commit, state }, context) {
      setTimeout(()=> {
        if(process.browser){

            // Theme Switching
            let getTheme = localStorage.getItem("theme");
            if(!getTheme){
                localStorage.setItem("theme", 'light');
                getTheme = localStorage.getItem("theme");
                commit('updateTheme', getTheme);
            }else{
                commit('updateTheme', getTheme);
            }

            // Language Setting 
            let getLang = localStorage.getItem("lang");
            if(!getLang){
                localStorage.setItem("lang", 'en');
                getLang = localStorage.getItem("lang");
                commit('updateLang', getLang);
            }else{
            commit('updateLang', getLang);
            }

            // Direction Switcher
            let getDir = localStorage.getItem("dir");
            if(!getDir){
                localStorage.setItem("dir", 'ltr');
                getDir = localStorage.getItem("dir");
                commit('dir', getDir);
            }else{
              commit('dir', getDir);
            }

            console.log(state.getTheme)
            console.log(state.lang)
            console.log(state.dir)
       
        }
      },1)
    }
}

export const getters = {
    getTheme(state){
        return state.getTheme
    },
    lang(state){
        return state.lang
    },
    dir(state){
        return state.dir
    },
}
