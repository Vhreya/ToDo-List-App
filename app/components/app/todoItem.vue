<template>
    <div class="mx-auto my-3 flex max-w-sm justify-between p-3 bg-slate-700 rounded-md border border-white/10 shadow-lg"
        :class="{'brightness-50': task.done}">
        <item-checkbox :task="props.task" @toggle="emit('toggle', task.id)"></item-checkbox>
        <item-deleteButton @delete="emit('delete', task.id)"> </item-deleteButton>
    </div>
</template>

<script setup>
    const props = defineProps ({
        task: {
        type: Object,
        required: true
        }
    });

    const emit = defineEmits([
        'delete', 'toggle'
    ]);
</script>