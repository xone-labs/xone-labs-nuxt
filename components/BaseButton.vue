<template>
    <component
        :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
        :href="href"
        class="w-4/12 flex items-center justify-center rounded bg-white/90 py-3 text-black hover:bg-white"
    >
        <slot name="icon" />
        <slot name="default" />
    </component>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: null
        },
        href: {
            type: String,
            default: null
        }
    }
};
</script>

<style>
</style>
