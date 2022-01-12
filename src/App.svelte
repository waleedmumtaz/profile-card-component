<script>
  import Footer from './lib/footer.svelte'
  import MainContent from './lib/main-content.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="min-h-screen flex flex-col font-kumbh-sans background-pattern bg-cstm-primary-dark-cyan z-50 relative overflow-hidden"
>
  <img
    src="/assets/bg-pattern-top.svg"
    alt="background pattern"
    class="z-10 absolute -translate-x-1/3 -translate-y-1/2"
  />
  <MainContent />
  <Footer />
  <img
    src="/assets/bg-pattern-bottom.svg"
    alt="background pattern"
    class="z-10 absolute translate-x-2/3 translate-y-1/2"
  />
</div>
