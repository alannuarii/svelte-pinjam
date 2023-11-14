import { API_ENDPOINT } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
        formData.append('status', data.get('status'));
		formData.append('tanggal', data.get('tanggal'));
		formData.append('nama', data.get('nama'));
		formData.append('nilai', data.get('nilai'));

        // console.log(API_ENDPOINT)

		const res = await fetch(`${API_ENDPOINT}/input`, {
			method: 'POST',
			body: formData
		});

		return res.json();
	}
};

export const load = async () => {
	const [res1, res2] = await Promise.all([
		fetch(`${API_ENDPOINT}/get-pinjaman`).then((res)=> res.json()),
		fetch(`${API_ENDPOINT}/get-data`).then((res)=> res.json())
	]) 

	return {
		data1: res1,
		data2: res2
	};
};
