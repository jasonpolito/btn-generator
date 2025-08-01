import { writable } from "svelte/store";

export function persistentStore(key, initialValue) {
  const store = JSON.parse(localStorage.getItem(key));

  return store;
}
