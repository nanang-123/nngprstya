function formatRupiah(el) {
    let num = el.value.replace(/[^,\d]/g, ''),
        split = num.split(','), sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    if (ribuan) rupiah += (sisa ? '.' : '') + ribuan.join('.');
    el.value = rupiah;
  }
  
  function hitungDiskon() {
    const harga = parseFloat(document.getElementById('harga').value.replace(/\./g, '')),
          diskon = parseFloat(document.getElementById('diskon').value),
          hasil = document.getElementById('hasil'),
          warning = document.getElementById('warning');
    
    hasil.innerHTML = ''; warning.innerHTML = '';
    if (isNaN(harga) || harga <= 0) return warning.innerHTML = 'Harga tidak valid!';
    if (isNaN(diskon) || diskon <= 0 || diskon > 100)
      return warning.innerHTML = 'Diskon harus diantara 1 sampai 100%';
  
    const potongan = harga * (diskon / 100),
          akhir = harga - potongan;
  
    hasil.innerHTML = `
      <p>Harga Sebelum Diskon: Rp ${harga.toLocaleString('id-ID')}</p>
      <p>Jumlah Diskon: Rp ${potongan.toLocaleString('id-ID')}</p>
      <p>Harga Setelah Diskon: Rp ${akhir.toLocaleString('id-ID')}</p>`;
  }  
