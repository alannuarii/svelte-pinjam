<script>
	export let data;

	const data1 = data.data1.data.length > 0 ? data.data1.data : [];
	const data2 = data.data2.data.length > 0 ? data.data2.data : [];

	const combinedArray = {};

	data1.forEach((item) => {
		combinedArray[item.nama] = {
			nama: item.nama,
			pinjaman: item.pinjaman || 0,
			bayar: 0,
			pinjam: 0
		};
	});

	data2.forEach((item) => {
		if (combinedArray[item.nama]) {
			combinedArray[item.nama].bayar = parseInt(item.bayar) || 0;
			combinedArray[item.nama].pinjam = parseInt(item.pinjam) || 0;
		}
	});

	const dataPinjaman = Object.values(combinedArray);

	const pinjaman = data1.map((item) => item.pinjaman);
	const bayar = data2.map((item) => parseInt(item.bayar));
	const pinjam = data2.map((item) => parseInt(item.pinjam));

	const totalPinjaman = pinjaman.reduce((acc, cur) => acc + cur, 0);
	const totalBayar = bayar.reduce((acc, cur) => acc + cur, 0);
	const totalPinjam = pinjam.reduce((acc, cur) => acc + cur, 0);
</script>

<section>
	<div class="table-responsive">
		<table class="table table-bordered">
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
						<td class="text-center align-middle">{(sec.pinjaman + sec.pinjam).toLocaleString()}</td>
						<td class="text-center align-middle">{sec.bayar.toLocaleString()}</td>
						<td class="text-center align-middle"
							>{(sec.pinjaman + sec.pinjam - sec.bayar).toLocaleString()}</td
						>
					</tr>
				{/each}
				<tr class="total">
					<td colspan="2" class="text-center align-middle">TOTAL</td>
					<td class="text-center align-middle">{(totalPinjaman + totalPinjam).toLocaleString()}</td>
					<td class="text-center align-middle">{totalBayar.toLocaleString()}</td>
					<td class="text-center align-middle"
						>{(totalPinjaman + totalPinjam - totalBayar).toLocaleString()}</td
					>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="mt-3">
		<h6>Catatan:</h6>
		<ul class="list-group">
			<li class="list-group-item">Total dana talangan PLTD Rp 16.500.000</li>
			<li class="list-group-item">Total pinjaman Ewin Rp 3.000.000</li>
			<li class="list-group-item">Pinjaman Ewin yang sudah dibayar Rp 2.700.000</li>
			<li class="list-group-item">Sisa pinjaman Ewin Rp 300.000</li>
			<li class="list-group-item">Sebagian pinjaman Ewin yang dibayar dibagi kembali ke security</li>
		</ul>
	</div>
</section>

<style>
	.total td,
	tr th {
		font-weight: 700;
	}
	tr th {
		background-color: #e5e5e5;
	}
</style>
