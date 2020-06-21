<script>
  const filmsEndpoint = "/api/films";
  const filmsPromise = fetchFilms();

  async function fetchFilms() {
    const response = await fetch(filmsEndpoint);
    return response.json()
  }
</script>

<section container>
  <h3>Films</h3>
  <p>
    The films endpoint is served on the route
    <code>{filmsEndpoint}</code>
  </p>
  {#await filmsPromise}
    <p>Please wait, loading data...</p>
  {:then films}
    <p>There are {films.length} films on the API</p>
    <ul>
      {#each films as film}
        <li>{film.url}: {film.title}</li>
      {/each}
    </ul>
  {:catch _ }
    <p>Ops, something went wrong while fetching the movies</p>
  {/await}
</section>
