<template>
    <div>
        <button v-if="visible" class="mx-auto px-3 py-1 flex items-center justify-around shadow-lg rounded-full bg-slate-950 hover:bg-slate-700 border border-white/30 focus:outline-4 focus-outline-offset-2" 
            @click="showInput"><Icon name="majesticons:plus" class="text-white text-xl "></Icon>
            Aufgabe hinzufügen 
        </button>
         <div v-else class="mx-auto my-3 flex justify-start max-w-sm p-3 bg-slate-700 rounded-md border border-white/10 shadow-lg">
            <ItemCheckbox :task="{title: ''}" ></ItemCheckbox>
            <input type="text" 
                ref="input"
                class="ml-3 bg-transparent border-b-2 border-b-white/50"
                placeholder=""
                v-model="newTitle"
                @keydown.enter.prevent="addNewToDo">
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits([
        'add'
    ]);

    const visible = ref(true);
    const newTitle = ref();
    const titleInput = useTemplateRef('input')

    async function showInput() {
        visible.value = !visible.value;
        
        await nextTick();

        titleInput.value.focus();
    };

    //überprüfen, ob die Eingabe Text enthält
    //erst danach wird ein ToDo erstellt. Ansonsten erscheint wieder der + Button.
    function addNewToDo() {
        if (newTitle.value !== undefined) {
            newTitle.value = newTitle.value.trim();
        }

        if (newTitle.value) {            
            emit('add', newTitle.value);
            newTitle.value = '';
        }
  
        visible.value = true;
    };
</script>