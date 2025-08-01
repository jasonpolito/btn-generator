<script>
  import Counter from "./lib/Counter.svelte";
  import { stylesObjectToCssMap } from "./import/utils";
  import { appData } from "./import/appData";
  const STORAGE_KEY = "btnData";

  const initialData =
    location.search.indexOf("reset") > -1
      ? appData
      : JSON.parse(localStorage.getItem(STORAGE_KEY));

  let app = $state(initialData);
  console.log(app);

  let inlineStyles = $derived.by(() => {
    const cssValues = stylesObjectToCssMap(app.variables);

    // convert JSON object to inline style attribute string
    let styleString =
      "cursor: pointer; " +
      Object.entries(cssValues)
        .map(([key, value]) => `${key}: ${value}`)
        .join("; ");
    return styleString;
  });

  $effect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(app));
  });
</script>

<div class="container mx-auto p-8 max-w-3xl">
  <div
    class="flex min-h-[50vh] items-center justify-center rounded border border-slate-100 bg-slate-50 p-16 shadow-inner"
  >
    <button style={inlineStyles}> Howdy Partner! </button>
  </div>

  <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 my-4">
    {#each Object.entries(app.tabs.all) as [key, tab]}
      <li>
        <button
          onclick={(app.tabs.active = key)}
          class="inline-block p-4 cursor-pointer rounded-lg {app.tabs.active ===
          key
            ? 'text-blue-600 bg-gray-100'
            : 'hover:text-gray-600 hover:bg-gray-50'}">{tab.label}</button
        >
      </li>
    {/each}
  </ul>

  {#if app.tabs.active === "example"}
    <div class="p-8 shadow-md rounded"></div>
  {/if}

  {#if app.tabs.active === "variables"}
    <div class="p-8 shadow-md rounded">
      <ul>
        {#each Object.entries(app.variables) as [key, style]}
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
  {/if}
</div>
