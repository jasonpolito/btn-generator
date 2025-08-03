<script>
  import Tab from "./lib/Tab.svelte";
  import { stylesObjectToCssMap } from "./import/utils";
  import { appData } from "./import/appData";
  const STORAGE_KEY = "btnData";

  const initialData =
    location.search.indexOf("reset") > -1
      ? appData
      : JSON.parse(localStorage.getItem(STORAGE_KEY));

  let app = $state(initialData);

  let inlineStyles = $derived.by(() => {
    const cssValues = stylesObjectToCssMap(app.variables, app.tabs.active);

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
    <div class="relative">
      <div
        class="absolute w-full uppercase text-center -top-8 tracking-widest text-slate-300 text-xs"
      >
        {app.tabs.active}
      </div>
      <button style={inlineStyles}> Howdy Partner! </button>
    </div>
  </div>

  <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 my-4">
    {#each Object.entries(app.tabs.all) as [key, tab]}
      <li>
        <Tab {app} {key} label={tab.label} />
      </li>
    {/each}
  </ul>

  {#if app.tabs.active === "example"}
    <div class="p-8 shadow-md rounded"></div>
  {/if}

  {#each Object.entries(app.tabs.all) as [key, tab]}
    <div
      class="p-8 shadow-md rounded"
      style="display: {app.tabs.active == key ? 'block' : 'none'}"
    >
      <h3>{tab.label}</h3>
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
                bind:value={style.value[app.tabs.active]}
              />
            </label>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
