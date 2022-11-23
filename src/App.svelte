<script>
  import TopNav from './lib/TopNav.svelte';
  import Footer from './lib/Footer.svelte';
  // import { session } from './lib/stores/session';
</script>

<div class="bg-neutral-400/50 flex flex-col p-0.5 h-screen">
  <TopNav site="svt-template" />

  <main class="md:container md:mx-auto md:shadow-sm md:border md:border-1 flex grow">
    <div class="m-1 p-1">
      <span class="text-emerald-600">
        // ...<br />
      </span>
    </div>
  </main>

  <Footer tag="keep it on the DL..." brand="lowkey networks" />
</div>
