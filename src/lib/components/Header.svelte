<script>
	import ModalInput from './ModalInput.svelte';
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<nav class="navbar bg-dark">
	<div class="container-fluid">
		{#if path === '/'}
			<a href="/" class="navbar-brand">Monitoring Dana Talangan</a>

			<div>
				<a href="/detail" class="btn btn-sm btn-outline-info me-1">Detail</a>
				<button
					class="btn btn-sm btn-outline-warning"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal">Input</button
				>
				<ModalInput />
			</div>
		{:else}
			<a href="/" class="btn btn-sm btn-outline-light me-1">Back</a>
			<h6 href="/" class="navbar-brand">Monitoring Dana Talangan</h6>
		{/if}
	</div>
</nav>

<style>
	.navbar-brand {
		color: #ffffff;
		font-weight: 700;
		font-size: 18px;
	}
	h6 {
		color: #ffffff;
		font-weight: 700;
		font-size: 18px;
		margin: 0;
	}
</style>
