<template>
    <div class="widget_wrapper">
        <div class="item_">
            <h4>Widget Wrap 01</h4>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
        </div>

         <div class="item_">
            <h4>Widget Wrap 02</h4>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
        </div>

         <div class="item_">
            <h4>Widget Wrap 03</h4>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .widget_wrapper{
        display: grid;
        position: relative;
        margin-top: 5vh;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2.5vw;

        .item_{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 2vw;
            border-radius: 1rem;
            
            h4{
                display: block;
                margin: 0;
                font-size: 1.75vw;
            }
        }
    }
</style>