function formatRupiah(angka) {
    let numberString = angka.value.replace(/[^,\d]/g, '').toString();
    let split = numberString.split(',');
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    
    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    
    angka.value = rupiah;
}

function hitungDiskon() {
    const hargaInput = document.getElementById('harga').value.replace(/\./g, '');
    const diskonInput = document.getElementById('diskon').value;
    const hasilDiv = document.getElementById('hasil');
    const warningDiv = document.getElementById('warning');

    hasilDiv.innerHTML = '';
    warningDiv.innerHTML = '';

    const harga = parseFloat(hargaInput);
    const diskon = parseFloat(diskonInput);

    // Validasi input harga
    if (isNaN(harga) || harga <= 0) {
        warningDiv.innerHTML = 'Harga tidak valid!';
        return;
    }

    // Validasi input diskon
    if (isNaN(diskon) || diskon < 0) {
        warningDiv.innerHTML = 'Diskon harus diantara 1 sampai 100%';
        return;
    }

    if (diskon === 0) {
        warningDiv.innerHTML = 'Diskon harus diantara 1 sampai 100%';
        return;
    }

    if (diskon > 100) {
        warningDiv.innerHTML = 'Diskon harus diantara 1 sampai 100%';
        return;
    }

    // Hitung total diskon dan harga akhir
    const totalDiskon = harga * (diskon / 100);
    const hargaAkhir = harga - totalDiskon;

    // Tampilkan hasil
    hasilDiv.innerHTML = `
        <p>Harga Sebelum Diskon: Rp ${harga.toLocaleString('id-ID')}</p>
        <p>Jumlah Diskon: Rp ${totalDiskon.toLocaleString('id-ID')}</p>
        <p>Harga Setelah Diskon: Rp ${hargaAkhir.toLocaleString('id-ID')}</p>`;
}