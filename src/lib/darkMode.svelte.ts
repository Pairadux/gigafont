export let darkMode = $state({
    value: true
});

export function toggleDarkMode() {
    darkMode.value = !darkMode.value;
}
