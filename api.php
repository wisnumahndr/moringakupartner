<?php   

function getRegisteredAPI(){
    return ["list"];
}

function isInputValid($inputs){
    $apiKey = $inputs["api_key"];
    if (in_array($apiKey, getRegisteredAPI())) {
        return true;
    } else {
        return false;
    }
}

function jsonOutput($status, $message, $partner) {
    $response = [
        "status" => $status,
        "message" => $message,
        "partner" => $partner
    ];
    header("Content-Type: application/json");
    echo json_encode($response);
}

function getNewsPartner(){
    $news = [
        [   
            "PartnerName" => "Heksa Insurance",
            "title" => "https://moringaku.com/images/pictures/Heksa_1.jpg", 
            "content" => "Heksa Solution Insurance adalah perusahaan asuransi jiwa yang berdiri sejak tahun 1996 dan berkantor pusat di Jakarta.
                        Sejak awal berdiri, perusahaan telah beberapa kali berganti nama. Awalnya perusahaan bernama Ongko Life hingga tahun 2002. Kemudian, 
                        Inkoppabri mengambil alih perusahaan dan mengubah nama menjadi Heksa Eka Life Insurance hingga tahun 2017. Dan sekarang 
                        Heksa bekerjasama dengan Moringaku sebagai Partner Digital dari 19 Agustus 2018, produk yang dipasarkan oleh Heksa di platform digital Moringaku.com
                        merupakan Heksa Proteksi Plus. Dimana produk ini memberikan perlindungan dari Meninggal karena Covid-19, Meninggal Saat kecelakaan dan Meninggal saat sakit.
                        Keunggulan produk ini adalah dengan adanya Uang Pertanggungan yang besar di setiap premi yang dipilih.", 
            "Author" => "Wisnu"
        ],

        [
            "PartnerName" => "Chubb Insurance",
            "title" => "https://moringaku.com/images/pictures/Corosell.jpg", 
            "content" => "Moringaku dan Chubb life Insurance bekerjasama pada Bulan Oktober dan Pada tanggal 11 Desember 2019, Moringaku  resmi
            melakukan Strategic Partner bersama Chubb Life Insurance. Produk yang dijual oleh Chubb life insurance di platform digital Moringaku.com adalah produk Cancer, dimana produk ini mencover Cancer apa saja dengan 
            uang Pertanggungan yang besar. Keunggulan produk ini, jika nasabah diagnosa kanker tahap 1 maka uang pertanggungan akan keluar sebesar 25%, jika ada tahap selanjutnya maka sisa Uang Pertanggungan nya akan cair 75%.
            Moringaku dan Chubb Insurance men-desain produk ini dengan konsep, Jika tidak ada claim Untung karena uang premi akan kembali 100% di akhir kontrak. Istilah nya bisa disebut dengan 
            NO CLAIM UNTUNG, CLAIM UNTUNG", 
            "Author" => "Kevin"
        ],
        [
            "PartnerName" => "Asuransi Wahana Tata",
            "title" => "https://moringaku.com/images/pictures/aswata_baru.jpg", 
            "content" => "PT ASURANSI WAHANA TATA adalah perusahaan asuransi umum yang telah hadir melayani nasabah sejak 1964. Kini, Aswata adalah salah satu perusahaan asuransi umum terbesar di Indonesia dengan kekuatan permodalan yang solid didukung oleh 
            dedikasi kurang lebih dari 1.000 karyawan di 69 kantor yang tersebar di seluruh wilayah Indonesia.
            Pada tanggal 29 April 2020, Ditengah pandemi COVID-19, ketika istilah Work From Home mulai populer, bersama dengan Asuransi Wahana Tata(ASWATA)
            , Moringaku melakukan peluncuran produk baru yaitu Asuransi Kendaraan Motor(mobil). Produk yang dijual Aswata di platform Moringaku.com adalah produk asuransi 
            Total loss only (TLO) dan perlindungan All Risk. Keunggulan produk ini adalah mempunyai uang pertanggungan sebesar 25jt untuk jaminan perluasan pihak ketiga.", 
            "Author" => "Diki"
        ],
        [
            "PartnerName" => "Asuransi Tugu Pratama Indonesia",
            "title" => "https://moringaku.com/images/pictures/tugu.jpg", 
            "content" => "
            Ditengah pandemi COVID-19, Moringaku kembali meluncurkan produk baru yaitu merupakan hasil kolaborasinya dengan PT Asuransi Tugu Pratama Indonesia Tbk yaitu 
            tRide Motorcycle, merupakan Produk Asuransi Kerugian kedua yang diluncurkan selama Pandemi COVID-19.
            tRide merupakan produk Asuransi kendaraan Bermotor yang dapat memberikan perlindungan untuk motor kamu dengan jaminan 
            Total Loss Only(TLO).
            Manfaat produk ini memberikan biaya penggantian atas kerusakan atau kerugian sepeda motor tertanggung akibat kecelakaan atau tindakan 
            tidak sengaja lainnya dengan maksimal penggantian sebesar Rp.5.000.000. Premi yang ditawarkan Cukup murah yaitu sebesar 120rb/thn.", 
            "Author" => "Kevin"
        ]
    ];

    return $news;
}

//check input
if (isInputValid($_GET)) {
    jsonOutput("success", "Successfully get News Partner!", getNewsPartner());
}else {
    jsonOutput("fail", "Invalid Api Key!", null);
}