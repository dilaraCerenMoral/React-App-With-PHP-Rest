<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../config/database.php';
    include_once '../model/sarf.php';
    $database = new Database();

    $db = $database->getConnection();
    $items = new Sarf($db);
    $stmt = $items->getSarf();
    $itemCount = $stmt->rowCount();

    # echo json_encode($itemCount);
 
    if($itemCount > 0){

        $sarfArr = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "numara" => $numara,
                "tanim" => $tanim,
                "agirlik" => $agirlik,
                "aktif_mi" => $aktif_mi,
                "tedarikci" => $tedarikci,
                "kayit_tarihi" => $kayit_tarihi,
                "guncelleme_tarihi" => $guncelleme_tarihi,

            );
            array_push($sarfArr, $e);
        }
        echo json_encode($sarfArr);
    }
    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "Hiç sarf bulunamadı.")
        );
    }
?>