<script>
  import ColorPicker from "svelte-awesome-color-picker";
  import Tab from "./lib/Tab.svelte";
  import Range from "./lib/Range.svelte";
  import Accordion from "./lib/Accordion.svelte";
  import { groupAppData, stylesObjectToCssMap } from "./import/utils";
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
    class="flex items-center justify-center rounded border border-slate-100 bg-slate-50 p-16 shadow-inner"
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
        <Tab bind:app {key} {tab} />
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
      <!-- <h3>{tab.label}</h3> -->
      <ul>
        {#each Object.entries(groupAppData(app)) as [key, data]}
          <li>
            <Accordion>
              <span slot="head">{key}</span>
              <span slot="details">
                {#each Object.entries(data) as [key, style]}
                  <label>
                    {#if style.type === "color"}
                      <div class="flex">
                        <label
                          class="block py-2 px-2.5 mb-2 rounded bg-gray-100"
                        >
                          <ColorPicker
                            label={style.label}
                            bind:hex={style.value[app.tabs.active]}
                          />
                        </label>
                      </div>
                    {/if}
                    {#if style.type !== "color"}
                      {style.label}
                      <Range
                        class={"bg-red-500"}
                        bind:value={style.value[app.tabs.active]}
                      />
                    {/if}
                  </label>
                {/each}
              </span>
            </Accordion>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style>
  :global {
    input[type="range"] {
      background: var(--color-gray-100);
    }
    .color-picker {
      input,
      button {
        background: var(--color-gray-100);
      }
      .color {
        box-shadow: var(--shadow-sm);
      }
      .wrapper {
        border: none;
        box-shadow: var(--shadow-sm);
      }
    }
  }
</style>
