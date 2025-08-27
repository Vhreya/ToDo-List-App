<template>
  <div class="m-5 flex justify-center">
    <h1 class="text-3xl font-bold">ToDo-Liste</h1>
  </div>
  <AppFilter :tasks="tasks" @filtered-tasks="updateTaskList"></AppFilter>
  <p class="mx-auto max-w-fit my-4">offene Tasks: {{ activeTasks.length }}</p>
  <div >
    <AppTodoItem v-if="tasks && tasks.length" v-for="task in updatedTasksList" :key="task.id" :task="task" @delete="handleTaskDeletion"></AppTodoItem>
    <p class="mx-auto max-w-fit my-4" v-else>Du hast noch keine ToDo's in deiner Liste</p>
  </div>
  <div>
      <AppAddItem @add="handleTaskCreation"></AppAddItem>
  </div>
</template>
<script setup>
import { nanoid } from 'nanoid';

  const updatedTasksList = ref(tasks.value);

  console.log(updatedTasksList.value)
  const activeTasks = computed(() => {
    return tasks.value.filter(task => task.done === false);
  });

  const tasks = useLocalStorage('items', []);

  //Tasks löschen
  function handleTaskDeletion(taskIdToDelete) {
    tasks.value = tasks.value.filter(task => task.id !== taskIdToDelete);
    updatedTasksList.value = tasks.value;
  };

  //Task hinzufügen
  function handleTaskCreation(taskToAdd) {
    tasks.value.push({id: nanoid(), title: taskToAdd, done: false});
    console.log(tasks.value);
  }

  //Taskfilterung
  function updateTaskList(filteredTasksFromChild) {
    updatedTasksList.value = filteredTasksFromChild;
  }
</script> 