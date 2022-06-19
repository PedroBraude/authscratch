<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	const baseUrl = 'http://localhost:5000';

	const userStore = writable({user:''});

	async function getUser() {
		let response = await fetch(`${baseUrl}/user`);
		return response.ok ? await response.json() : null;
	}

	onMount(async () => {
		let user = await getUser();
		console.log(user)
		if (user) {
			userStore.update((date) => user);
		}
	});
</script>

{#if $userStore}
<h1>Welcome {$userStore.user} </h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{/if}

<!-- <h1>Welcome</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
