export let darkMode = $state({
    value: true
});

export function toggleDarkMode() {
    darkMode.value = !darkMode.value;
}

export let fontSize = $state({
    value: 5
});

export function increaseFontSize() {
    fontSize.value++;
}

export function decreaseFontSize() {
    fontSize.value--;
}
