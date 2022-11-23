<script>
  import { session } from './stores/session';
  export let AUTH_URL;
</script>

<header class="bg-slate-400 flex flex-row h-12 mb-2 justify-between shadow-md">
  <div class="pl-10 flex items-center">
    <div class="mr-1 pr-1 flex flex-row select-none">
      <a class="text-2xl font-bold" href="?"><span class="material-icons rotate-90">link</span>*</a>
    </div>
    <div class="ml-1 pl-4 flex flex-row select-none">
      <a class="cursor-default" href="#home">
        <div class="px-3 py-1 rounded-md hover:bg-slate-500/25 hover:underline duration-300 active:scale-90 active:bg-slate-500/50">home</div>
      </a>

      <a class="cursor-default" href="#bin">
        <div class="px-3 py-1 rounded-md hover:bg-slate-500/25 hover:underline duration-300 active:scale-90 active:bg-slate-500/50">bin</div>
      </a>

      <a class="cursor-default" href="#private">
        <div class="px-3 py-1 rounded-md hover:bg-slate-500/25 hover:underline duration-300 active:scale-90 active:bg-slate-500/50">private</div>
      </a>
    </div>
  </div>
  <div class="pr-10 flex items-center select-none">
    <!-- {#if authStatus()} -->
      <a class="cursor-default" href="#login">
        <div class="px-3 py-1 rounded-md hover:bg-slate-500/25 hover:underline duration-300 active:scale-90 active:bg-slate-500/50">Log</div>
      </a>
    <!-- {:else}
      <a class="cursor-default" href="#login" on:click={logout}>
        <div class="px-3 py-1 rounded-md hover:bg-slate-500/25 hover:underline duration-300 active:scale-90 active:bg-slate-500/50">Login</div>
      </a>
    {/if} -->
  </div>
</header>
