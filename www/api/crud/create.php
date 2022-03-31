<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    include_once '../config/database.php';
    include_once '../model/sarf.php';
    $database = new Database();
    $db = $database->getConnection();
    $item = new Sarf($db);
   
    $data = json_decode(file_get_contents("php://input"))->newSarf;

    $item->numara = $data->numara;
    $item->tanim = $data->tanim;
    $item->agirlik = $data->agirlik;
    $item->aktif_mi = $data->aktif_mi;
    $item->tedarikci = $data->tedarikci;
    $item->kayit_tarihi = date('Y-m-d H:i:s');
    $item->guncelleme_tarihi = date('Y-m-d H:i:s');


    
    if($item->createSarf()){
        echo $item->numara . ' nolu sarf malzeme başarı ile eklendi.' ;
    } else{
        echo 'Sarf malzemesi eklenirken hata oluştu.';
    }
?>