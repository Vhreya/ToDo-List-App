<template>
  <div class="m-5 flex justify-center">
    <h1 class="text-3xl font-bold">ToDo-Liste</h1>
  </div>
  <AppFilter @set-filter="updateFilter"></AppFilter>
  <p class="mx-auto max-w-fit my-4">offene Tasks: {{ activeTasksCount }}</p>
  <div >
    <AppTodoItem 
      v-if="tasks && tasks.length" 
      v-for="task in filteredTasks" 
      :key="task.id" :task="task" 
      @delete="handleTaskDeletion"
      @toggle="handleTaskToggle">
    </AppTodoItem>
    <p class="mx-auto max-w-fit my-4" v-else>Du hast noch keine ToDo's in deiner Liste</p>
  </div>
  <div>
      <AppAddItem @add="handleTaskCreation"></AppAddItem>
  </div>
</template>

<script setup>
  import { nanoid } from 'nanoid';

  const tasks = ref([]);
  const activeFilter = ref('all');

  onMounted(() => {
    const savedTasks = localStorage.getItem('items')
    if (savedTasks && savedTasks !== '[]') {
      try {
        tasks.value = JSON.parse(savedTasks);
      } catch (error) {
        console.error("Failed to parse JSON from local storage", error);
      }
    }      
  })

  watch(tasks, (newTasks) => {
    localStorage.setItem('items', JSON.stringify(newTasks));
  }, { deep: true });

  // --- Abgeleitete Zustände (Computed Properties) ---

  const filteredTasks = computed(() => {
    switch (activeFilter.value) {
      case 'active' :
        return tasks.value.filter(task => !task.done);
      case 'done' :
        return tasks.value.filter(task => task.done);
      default: // 'all'
        return tasks.value;
    }
  });

    const activeTasksCount = computed(() => {
    return tasks.value.filter(task => task.done === false).length;
  });

  // --- Methoden, die den State modifizieren ---
  
  function handleTaskDeletion(taskIdToDelete) {
    tasks.value = tasks.value.filter(task => task.id !== taskIdToDelete);
  };

  function handleTaskCreation(taskToAdd) {
    tasks.value.push({id: nanoid(), title: taskToAdd, done: false});
  }

  function handleTaskToggle(taskIdToToggle) {
    const task = tasks.value.find(t => t.id === taskIdToToggle);
    if (task) {
      task.done = !task.done;
    }
  }

  function updateFilter(filter) {
    activeFilter.value = filter;
  }
  
  useHead({
  title: 'To-Do-Liste',
  meta: [
    { 
      name: 'description', 
      content: 'Eine einfache und schnelle To-Do-Listen-App, erstellt mit Nuxt 3. Verwalte deine Aufgaben, filtere sie und steigere deine Produktivität.' 
    }
  ]
})
</script> 