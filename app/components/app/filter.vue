<template>
    <div class="mx-auto max-w-fit flex justify-center rounded-lg bg-slate-950 border border-white/20">
        <button class="p-1 pl-2 text-sm border-r border-r-white/20 hover:bg-slate-900 rounded-l-lg" @click="emit('setFilter', 'all')">Alle</button>
        <button class="p-1 text-sm hover:bg-slate-900" @click="emit('setFilter', 'active')">Aktiv</button>
        <button class="p-1 pr-2 text-sm border-l border-l-white/20 hover:bg-slate-900 rounded-r-lg" @click="emit('setFilter', 'done')">Erledigt</button>
    </div>
</template>

<script setup>
    const emit = defineEmits([
        'setFilter'
    ])
</script>