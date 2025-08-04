<script>
  let { value = $bindable() } = $props();
</script>

<input
  type="range"
  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
  bind:value
/>
