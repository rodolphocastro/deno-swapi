<script>
  import NavBar from "./Navbar.svelte";
  import BrowseFilms from "./browse/Films.svelte";
</script>

<NavBar />
<main>
  <section container>
    <h1>Welcome to SWAPI</h1>
    <h2>Proudly powered by 🦕 Deno, 🤖 SvelteJS and 📎 AttriCSS.</h2>
  </section>
  <BrowseFilms />
</main>
