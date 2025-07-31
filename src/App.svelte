<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  alert(window.outerHeight);
</script>

<div class="p-8">
  <div
    class="bg-slate-50 rounded shadow-inner p-8 min-h-[50dvh] flex justify-center items-center"
  >
    <Counter />
  </div>
</div>
