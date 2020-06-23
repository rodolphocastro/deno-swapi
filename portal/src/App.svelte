<script>
  import NavBar from "./Navbar.svelte";
  import BrowseGeneric from "./browse/Generic.svelte";
</script>

<NavBar />
<main>
  <section container>
    <h1>Welcome to SWAPI</h1>
    <h2>Proudly powered by 🦕 Deno, 🤖 SvelteJS and 📎 AttriCSS.</h2>
  </section>
  <BrowseGeneric endpointName="Films" endpoint="/api/films" endpointEmoji="🎥" displayProperties="{['url', 'title']}"/>
  <BrowseGeneric endpointName="Species" endpoint="/api/species" endpointEmoji="🧬"/>
  <BrowseGeneric endpointName="People" endpoint="/api/people" endpointEmoji="🙋‍♂️🙋‍♀️"/>
  <BrowseGeneric endpointName="Planets" endpoint="/api/planets" endpointEmoji="🌎"/>
  <BrowseGeneric endpointName="Starships" endpoint="/api/starships" endpointEmoji="🚀"/>
  <BrowseGeneric endpointName="Vehicles" endpoint="/api/vehicles" endpointEmoji="🚗"/>
</main>
