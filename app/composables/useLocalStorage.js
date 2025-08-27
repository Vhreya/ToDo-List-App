export function useLocalStorage(key, defaultValue) {
  
  const data = ref(defaultValue);

  onMounted(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        data.value = JSON.parse(saved);
      } catch (e) {
        console.error(`Fehler beim Parsen von JSON aus localStorage für Key "${key}"`, e);
      }
    }
  });

  watch(data, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  }, { deep: true });

  return data;
}