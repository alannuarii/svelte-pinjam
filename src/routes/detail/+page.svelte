<script>
	import { date2 } from '../../lib/js/date';
	export let data;

	const details = data.data.data.length > 0 ? data.data.data : [];

	console.log(details);
</script>

<section>
	<div class="table-responsive">
		<table class="table table-bordered">
			<thead>
				<tr class="text-center">
					<th scope="col" class="text-center align-middle">No</th>
					<th scope="col" class="text-center align-middle">Tanggal</th>
					<th scope="col" class="text-center align-middle">Nama</th>
					<th scope="col" class="text-center align-middle"
						><span class="text-danger">Pinjam</span> / <span class="text-success">Bayar</span></th
					>
				</tr>
			</thead>
			<tbody>
				{#each details as det, index}
					<tr class="text-center">
						<td class="align-middle">{index + 1}</td>
						<td class="align-middle">{date2(det.tanggal)}</td>
						<td class="align-middle">{det.nama}</td>
						{#if det.pinjam !== 0}
							<td class="align-middle text-danger status">{det.bayar.toLocaleString()}</td>
						{:else}
							<td class="align-middle text-success status">{det.bayar.toLocaleString()}</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	.status,
	tr th {
		font-weight: 700;
	}
    tr th{
        background-color: #e5e5e5;
    }
</style>
