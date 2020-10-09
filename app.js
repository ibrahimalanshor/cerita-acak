let template = 'Suatu hari dengan suhu 45 derajat celcius, :nama pergi ke :tempat untuk :aktivitas. Naas, disaat sedang berjalan menuju ke tempat tersebut, :nama malah :musibah'

const nama = ['Rivaldi', 'Herman', 'Roni', 'Anton', 'Jacob', 'Revina']
const tempat = ['Restoran', 'Hotel', 'Pantai', 'Lapangan']
const aktivitas = ['Makan', 'Minum', 'Tidur', 'Berenang', 'Bermain', 'Olahraga', 'Berlari']
const musibah = ['Tersedak', 'Cekugan', 'Jatuh', 'Insomnia', 'Tenggelam', 'Keasikan', 'Lupa Waktu', 'Keseleo', 'Salah Urat', 'Nabrak']

const button = document.querySelector('button')
const input = document.querySelector('.nama')
const fahrenheit = document.querySelector('.fahrenheit')
const p = document.querySelector('p')

const kataAcak = kataKata => {
	return kataKata[Math.floor(Math.random() * kataKata.length)]
}

const cetak = () => {

	let cerita = template
	let namaAcak = input.value ? input.value : kataAcak(nama)

	cerita = cerita.replace(':nama', namaAcak)
	cerita = cerita.replace(':nama', namaAcak)
	cerita = cerita.replace(':tempat', kataAcak(tempat)) 
	cerita = cerita.replace(':aktivitas', kataAcak(aktivitas)) 
	cerita = cerita.replace(':musibah', kataAcak(musibah))

	if (fahrenheit.checked) {
		let nilai = (45 * 9 / 5) + 32

		cerita = cerita.replace('45 derajat celcius', `${nilai} derajat fahrenheit`)
	}

	p.style.display = 'block'
	p.textContent = cerita
}

button.addEventListener('click', cetak)