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

<div class="p-8">
  <div
    class="flex min-h-[50vh] items-center justify-center rounded border border-slate-100 bg-slate-50 p-16 shadow-inner"
  >
    <button style={inlineStyles}> Howdy Partner! </button>
  </div>
</div>

<ul>
  {#each Object.entries(btn) as [key, style]}
    <li>
      <label>
        {style.label}
        <input type={style.type} bind:value={style.value} />
      </label>
    </li>
  {/each}
</ul>
