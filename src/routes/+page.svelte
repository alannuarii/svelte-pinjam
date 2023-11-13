<script>
	const security = [
		'Imran Mokodompit',
		'Faisal Manopode',
		'Karter Tanduk',
		'Jerry Legoh',
		'Refiansa Mokodompit',
		'Jonly Tulandi'
	];
</script>

<section>
	<div class="table-responsive">
		<table class="table">
			<thead>
				<tr class="text-center">
					<th scope="col">No</th>
					<th scope="col">Nama</th>
					<th scope="col">Pinjaman</th>
					<th scope="col">Dibayar</th>
					<th scope="col">Sisa</th>
				</tr>
			</thead>
			<tbody>
				{#each security as sec, index}
					<tr>
						<td class="text-center align-middle">{index + 1}</td>
						<td>{sec}</td>
						<td class="text-center align-middle">Otto</td>
						<td class="text-center align-middle">@mdo</td>
						<td class="text-center align-middle">@mdo</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
