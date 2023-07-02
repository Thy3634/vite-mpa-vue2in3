<script>
import { defineComponent, version } from 'vue2'

export default defineComponent({
    setup() {
        return {
            version
        }
    }
})
</script>

<template>
    <div>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <h1>Sub App</h1>
        <a href="/">返回主页面</a>
        <p>Vue version: {{ version }}</p>
    </div>
</template>