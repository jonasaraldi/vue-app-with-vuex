<template> 
    <div :class="customClass">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        props: {
            customClass: String
        }
    }

</script>