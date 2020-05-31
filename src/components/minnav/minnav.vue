<template>
<div class='min-nav'>
    <div class="min-box">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name:'minnav'
}
</script>
<style  scoped>
.min-box{
    display: flex;
    flex-direction: row;
    justify-content : space-between;
    margin: 5px;
}
</style>