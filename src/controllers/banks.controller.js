const db =require('../models')
const Bank = db.banks;

exports.create_bank = (res, req)=>{
    const {
        nama_akun,
        nomor_rekening,
        kode_bank,
        nama_bank,
    } = req.body;

    Bank.create({
        nama_akun,
        nomor_rekening,
        kode_bank,
        nama_bank,
    }).then((result) => {
        return res.status(200).send({
            message: 'Berhasil Tambah Bank'
        });
    }).catch((err) => {
        return res.status(500).send({
            message: 'Gagal Tambah Bank'
        })
    });
}

exports.update_bank = (res, req)=>{
    const {id} = req.params;
    const {
        nama_akun,
        nomor_rekening,
        kode_bank,
        nama_bank,
    } = req.body;

    Bank.update({
        nama_akun,
        nomor_rekening,
        kode_bank,
        nama_bank,
    },{
        returning: true, 
        where: {id:id}
    }).then((result) => {
        return res.status(200).send({
            message: 'Berhasil Tambah Bank'
        });
    }).catch((err) => {
        return res.status(500).send({
            message: 'Gagal Tambah Bank'
        })
    });
}

exports.list_bank = (res, req)=>{
    Bank.findAll().then((result) => {
        return res.status(200).send({
            message: 'Berhasil menampilkan list Bank',
            data: result
        });
    }).catch((err) => {
        return res.status(500).send({
            message: 'Gagal menampilkan list Bank',
            data: null
        });
    });
}

exports.delete_bank = (res, req)=>{
    const {id} = req.params
    Bank.destroy(id).then((result) => {
        return res.status(200).send({
            message: 'Berhasil menghapus Bank'
        });
    }).catch((err) => {
        return res.status(500).send({
            message: 'Gagal menghapus Bank',
            data: null
        });
    });
}

exports.detail_bank = (res, req)=>{
    const {id} = req.params
    Bank.findById(id).then((result) => {
        return res.status(200).send({
            message: 'Berhasil menampilkan Bank',
            data: result
        });
    }).catch((err) => {
        return res.status(500).send({
            message: 'Gagal menampilkan Bank',
            data: null
        });
    });
}