<template>
  <div class="m-5 flex justify-center">
    <h1 class="text-3xl font-bold">ToDo-Liste</h1>
  </div>
  <AppFilter @set-filter="updateFilter"></AppFilter>
  <p class="mx-auto max-w-fit my-4">offene Tasks: {{ activeTasks.length }}</p>
  <div >
    <AppTodoItem 
      v-if="tasks && tasks.length" 
      v-for="task in updatedTasksList" 
      :key="task.id" :task="task" 
      @delete="handleTaskDeletion"
      >
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

  const updatedTasksList = ref(tasks.value);

  const activeFilter = ref('all');

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

  onMounted(() => {
    const savedTasks = localStorage.getItem('items')
    if (savedTasks && savedTasks !== '[]') {
      try {
        tasks.value = JSON.parse(savedTasks);
        console.log(tasks.value);
        
        updatedTasksList.value = tasks.value;
      } catch (error) {
        console.error("Failed to parse JSON from local storage", error);
      }
    }      
  })

  console.log(updatedTasksList.value)
  const activeTasks = computed(() => {
    return tasks.value.filter(task => task.done === false);
  });
  
  function handleTaskDeletion(taskIdToDelete) {
    tasks.value = tasks.value.filter(task => task.id !== taskIdToDelete);
    updatedTasksList.value = tasks.value;
    saveToDoList();
  };

  function handleTaskCreation(taskToAdd) {
    tasks.value.push({id: nanoid(), title: taskToAdd, done: false});
    console.log(tasks.value);
    
    updatedTasksList.value = tasks.value;
    saveToDoList();
  }

  function updateFilter(filter) {
    activeFilter.value = filter;
  }

  function saveToDoList() {
    localStorage.setItem('items', JSON.stringify(updatedTasksList.value));
  }
  
</script> 