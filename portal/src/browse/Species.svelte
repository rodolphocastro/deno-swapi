<script>
  const speciesEndpoint = "/api/species";
  const speciesPromise = fetchSpecies();
  let showSpecies = false;
  let showJson = false;

  async function fetchSpecies() {
    const response = await fetch(speciesEndpoint);
    return response.json();
  }

  function toggleList() {
    showSpecies = !showSpecies;
  }

  function toggleJson() {
    showJson = !showJson;
  }
</script>

<section container>
  <h3>🧬 Species</h3>
  <p>
    The species endpoint is served on the route
    <code>/api/species</code>
  </p>
  {#await speciesPromise}
    <p>Please wait, loading data...</p>
  {:then species}
    <p>There are {species.length} species on the API</p>
    <hr />
    <button on:click={toggleJson}>
      {showJson ? 'Hide Json' : 'Show Json'}
    </button>
    <button on:click={toggleList}>
      {showSpecies ? 'Hide Species' : 'Show Species'}
    </button>
    {#if showJson}
      <h4>Species' JSON</h4>
      <p>A specie looks like this:</p>
      <pre>
        <code>{JSON.stringify(species[0], null, '\t')}</code>
      </pre>
    {/if}
    {#if showSpecies}
      <h4>Species from the API</h4>
      <ul>
        {#each species as specie}
          <li>{specie.url}: {specie.name}</li>
        {/each}
      </ul>
    {/if}
  {:catch _}
    <p>
      Ops, something went wrong while fetching the species! Please refresh the
      page
    </p>
  {/await}
</section>
