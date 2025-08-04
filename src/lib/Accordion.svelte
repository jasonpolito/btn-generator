<script>
  export let open = false;
  import { slide } from "svelte/transition";
  const handleClick = () => (open = !open);
</script>

<div class="-mx-4">
  <button
    on:click={handleClick}
    class="block w-full relative text-left px-4 py-2 cursor-pointer hover:text-gray-600 hover:bg-gray-50"
  >
    <div
      class="absolute right-0 top-0 p-2 transition-all pointer-events-none {open
        ? 'rotate-180'
        : ''} text-gray-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
    <slot name="head"></slot>
  </button>

  {#if open}
    <div class="p-4 mb-4 border-t border-gray-100" transition:slide>
      <slot name="details"></slot>
    </div>
  {/if}
</div>
