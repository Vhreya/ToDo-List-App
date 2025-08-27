<template>
    <div>
            <input type="checkbox" 
                name="taskDone" 
                :value="task.title"  
                class="accent-grass-green" 
                v-model="task.done"
                @keydown.enter="">
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
</script>