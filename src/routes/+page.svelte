<script>
	const dataPinjaman = [
		{ nama: 'Imran Mokodompit', pinjaman: 3000000, dibayar: 0 },
		{ nama: 'Faisal Manopode', pinjaman: 2500000, dibayar: 0 },
		{ nama: 'Karter Tanduk', pinjaman: 4000000, dibayar: 0 },
		{ nama: 'Jerry Legoh', pinjaman: 3500000, dibayar: 0 },
		{ nama: 'Refiansa Mokodompit', pinjaman: 500000, dibayar: 0 },
		{ nama: 'Jonly Tulandi', pinjaman: 2000000, dibayar: 500000 },
		{ nama: 'Michael Baranoy', pinjaman: 3000000, dibayar: 2700000 }
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
				{#each dataPinjaman as sec, index}
					<tr>
						<td class="text-center align-middle">{index + 1}</td>
						<td>{sec.nama}</td>
						<td class="text-center align-middle">{sec.pinjaman}</td>
						<td class="text-center align-middle">{sec.dibayar}</td>
						<td class="text-center align-middle">{sec.pinjaman - sec.dibayar}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
