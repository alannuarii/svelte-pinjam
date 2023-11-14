<script>
	import ModalInput from './ModalInput.svelte';
</script>

<nav class="navbar bg-dark">
	<div class="container-fluid">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="navbar-brand">Monitoring Dana Talangan</a>

		<button
			class="btn btn-sm btn-outline-warning"
			data-bs-toggle="modal"
			data-bs-target="#exampleModal">Input</button
		>
		<ModalInput />
	</div>
</nav>

<style>
	a {
		color: #ffffff;
	}
</style>
