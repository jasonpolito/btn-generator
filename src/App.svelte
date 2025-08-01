<script>
  import Counter from "./lib/Counter.svelte";
  import { stylesObjectToCssMap } from "./import/utils";
  import { styles } from "./import/styles";
  const STORAGE_KEY = "btnData";

  const initialData =
    location.search.indexOf("reset") > -1
      ? styles
      : JSON.parse(localStorage.getItem(STORAGE_KEY));

  let btn = $state(initialData);

  let inlineStyles = $derived.by(() => {
    const cssValues = stylesObjectToCssMap(btn);
    let styleString =
      "cursor: pointer; " +
      Object.entries(cssValues)
        .map(([key, value]) => `${key}: ${value}`)
        .join("; ");
    return styleString;
  });

  $effect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(btn));
  });
</script>

<label
  for="default-range"
  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >Default range</label
>
<div class="container mx-auto p-8 max-w-3xl">
  <div
    class="flex min-h-[50vh] items-center justify-center rounded border border-slate-100 bg-slate-50 p-16 shadow-inner"
  >
    <button style={inlineStyles}> Howdy Partner! </button>
  </div>

  <ul>
    {#each Object.entries(btn) as [key, style]}
      <li>
        <label>
          {style.label}
          <input
            type={style.type}
            class={style.type === "range"
              ? "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              : ""}
            bind:value={style.value}
          />
        </label>
      </li>
    {/each}
  </ul>
</div>
