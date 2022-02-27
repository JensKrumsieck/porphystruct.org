import { writable } from 'svelte/store';
import { browser } from "$app/env"

export const gdprSettings = writable(browser && JSON.parse(localStorage.getItem("gdprSettings")) || {
    show: true,
    analytics: false
})

gdprSettings.subscribe((val) => {
    if (browser) return (localStorage.gdprSettings = JSON.stringify(val))
})