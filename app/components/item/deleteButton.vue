<template>
    <div>
        <button @click="emit('delete')"><Icon name="fluent:delete-12-regular" class="text-rose-600"></Icon></button>
    </div>
</template>
<script setup>
    const emit = defineEmits([
        'delete'
    ])
</script>