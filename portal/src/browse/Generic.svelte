<script>
  export let endpointName = "Generic Endpoint";
  export let endpointEmoji = "❓";
  export let displayProperties = ["url", "name"];
  export let endpoint;

  const endpointPromise = fetchData();

  let showJson = false;
  let showList = false;

  async function fetchData() {
    const response = await fetch(endpoint);
    return response.json();
  }

  function toggleList() {
    showList = !showList;
  }

  function toggleJson() {
    showJson = !showJson;
  }
</script>

<section container>
  <h3 id="{endpointName}">{endpointEmoji} {endpointName}</h3>
  <p>
    The {endpointName} endpoint is served on the route
    <code>{endpoint}</code>
  </p>
  {#await endpointPromise}
    <p>Please wait, loading data...</p>
  {:then dataResult}
    <p>
      There are {dataResult.length} objects of type {endpointName} on the API
    </p>
    <hr />
    <button on:click={toggleJson}>
      {showJson ? 'Hide Json' : 'Show Json'}
    </button>
    <button on:click={toggleList}>
      {showList ? 'Hide list' : 'Show list'}
    </button>
    {#if showJson}
      <h4>JSON</h4>
      <p>A {endpointName}'s JSON looks like this:</p>
      <pre>
        <code>{JSON.stringify(dataResult[0], null, '\t')}</code>
      </pre>
    {/if}
    {#if showList}
      <h4>Result from the API</h4>
      <ul>
        {#each dataResult as data}
          <li>{data[displayProperties[0]]}: {data[displayProperties[1]]}</li>
        {/each}
      </ul>
    {/if}
  {:catch _}
    <p>
      Ops, something went wrong while fetching data! Please refresh the page
    </p>
  {/await}
</section>
