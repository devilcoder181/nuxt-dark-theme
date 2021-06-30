<template>
    <section class="banner">
        <h1>NuxtJS Dark Theme Switcher</h1>
        <label>Check our Cool Stuffs here <i><b>#devilcoder181</b></i></label>
        <button class="btn_">View All Git Repo</button>
    </section>
</template>

<style lang="scss" scoped>
    .banner{
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-top: 5vh;
        width: 100%;
        overflow: hidden;
        border-radius: 1rem;
        padding: 15vh 5vw;
        flex-direction: column;

        label{
            font-size: 1.5vw;
            margin: 0.5em 0;
        }

        h1{
            font-size: 3.5vw;
            display: block;
            line-height: 1;
            margin: 0;
        }
    }
</style>