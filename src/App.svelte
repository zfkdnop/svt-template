<script>
  import TopNav from './lib/TopNav.svelte';
  // import { session } from './lib/stores/session.js';
</script>

<div class="bg-neutral-400/50 flex flex-col p-0.5 h-screen">
  <TopNav AUTH_URL="https://api.lowkey.link/v1/login" />

  <main class="md:container md:mx-auto md:shadow-sm md:border md:border-1 flex grow">
    <div class="m-1 p-1">
      <span class="text-emerald-600">
        // ...<br />
        <!-- // auth token = {$session.data} -->
      </span>
    </div>
  </main>

  <footer class="bg-slate-400/25 flex flex-row h-12 mt-2">
    <div class="flex grow justify-between items-center select-none">
      <div class="px-4 font-mono italic">keep it on the DL...</div>
      <div class="font-mono">&ensp;</div>
      <div class="px-4 font-mono italic"><a class="" href="https://lowkey.network" rel="noreferrer" target="_blank">lowkey networks</a></div>
    </div>
  </footer>
</div>
