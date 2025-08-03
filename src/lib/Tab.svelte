<script>
  let { app = $bindable(), tab, key } = $props();
</script>

<button
  onclick={() => (app.tabs.active = key)}
  class="inline-block p-4 cursor-pointer rounded-lg {app.tabs.active === key
    ? 'text-blue-600 bg-gray-100'
    : 'hover:text-gray-600 hover:bg-gray-50'}">{tab.label}</button
>
