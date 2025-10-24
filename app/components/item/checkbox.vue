<template>
    <div>
            <input 
                type="checkbox" 
                :id="task.id" 
                :value="task.title"
                :checked="task.done"
                class="accent-grass-green" 
                @change="emit('toggle', task.id)"
                @keydown.enter.prevent="emit('toggle', task.id)">
            <label v-if="task.title != ''" class="mx-3" :for="task.title">{{ task.title }}</label>
        </div>
</template>

<script setup>
    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    });

    const emit = defineEmits([
        'toggle'
    ])
</script>