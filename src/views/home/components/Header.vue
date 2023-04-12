<template>
    <div class="header">
        <van-icon name="arrow-left" />
        <div>{{ title }}</div>
    </div>
</template>

<script>
export default {
    props: ["title"]
}
</script>