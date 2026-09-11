const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

// Contoh Endpoint Masuk ke Database Anda
app.post('/api/pesanan-laundry', (req, res) => {
    const { nama_pelanggan, nomor_wa, tipe_layanan } = req.body;
    // Hubungkan dengan perintah SQL Anda di sini (Contoh: INSERT INTO pesanan ...)
    console.log(`Pesanan baru disimpan: ${nama_pelanggan}`);
    res.status(200).json({ status: 'Sukses', message: 'Data pesanan masuk database!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Gavin Laundry aktif di port ${PORT}`));

