export default ({app}, inject)=> {
    if(process.browser){
        let getCurrentTheme = localStorage.getItem('theme');
        inject('theme', getCurrentTheme)
    }
}