<template>
    <div class="mx-auto max-w-fit flex justify-center rounded-lg bg-slate-950 border border-white/20">
        <button class="p-1 pl-2 text-sm border-r border-r-white/20 hover:bg-slate-900 rounded-l-lg" @click="filterAll">All</button>
        <button class="p-1 text-sm hover:bg-slate-900" @click="filterActive">Active</button>
        <button class="p-1 pr-2 text-sm border-l border-l-white/20 hover:bg-slate-900 rounded-r-lg" @click="filterDone">Done</button>
    </div>
</template>
<script setup>
    const props = defineProps({
        tasks: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits([
        'filteredTasks'
    ])

    const filteredTasks = ref(props.tasks);

    function filterAll() {
        filteredTasks.value = props.tasks;
        emit('filteredTasks', filteredTasks.value);
    }

    function filterActive() {
        filteredTasks.value = props.tasks.filter(task => task.done === false);
        emit('filteredTasks', filteredTasks.value);
    }

    function filterDone() {
        filteredTasks.value = props.tasks.filter(task => task.done === true);
        emit('filteredTasks', filteredTasks.value);
    }
</script>