<script>
  const filmsEndpoint = "/api/films";
  const filmsPromise = fetchFilms();
  let showFilms = true;
  let showJson = false;

  async function fetchFilms() {
    const response = await fetch(filmsEndpoint);
    return response.json();
  }

  function toggleFilms() {
    showFilms = !showFilms;
  }

  function toggleJson() {
    showJson = !showJson;
  }
</script>

<section container>
  <h3>🎥 Films</h3>
  <p>
    The films endpoint is served on the route
    <code>{filmsEndpoint}</code>
  </p>
  {#await filmsPromise}
    <p>Please wait, loading data...</p>
  {:then films}
    <p>There are {films.length} films on the API</p>
    <hr />
    <button on:click={toggleJson}>
      {showJson ? 'Hide Json' : 'Show Json'}
    </button>
    <button on:click={toggleFilms}>
      {showFilms ? 'Hide Films' : 'Show Films'}
    </button>
    {#if showJson}
      <h4>Film's JSON</h4>
      <p>A film looks like this:</p>
      <pre>
        <code>{JSON.stringify(films[0], null, '\t')}</code>
      </pre>
    {/if}
    {#if showFilms}
      <h4>Films from the API</h4>
      <ul>
        {#each films as film}
          <li>{film.url}: {film.title}</li>
        {/each}
      </ul>
    {/if}
  {:catch _}
    <p>Ops, something went wrong while fetching the movies</p>
  {/await}
</section>
