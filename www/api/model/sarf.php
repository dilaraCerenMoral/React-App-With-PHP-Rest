<?php
    class Sarf{
        private $conn;
        private $db_table = "sarf_malzemeleri";
        public $id;
        public $numara;
        public $tanim;
        public $agirlik;
        public $aktif_mi;
        public $tedarikci;
        public $kayit_tarihi;
        public $guncelleme_tarihi;

        public function __construct($db){
            $this->conn = $db;
        }

        public function getSarf(){

            /*
            Eğer kullanıcı filtreleme yapıyorsa, sql query farklı olacak ve bind value kullanılıp,arama yapılacak.
            Eğer filtre değeri yoksa veya boş geldiyse, sql query'de herhangi bir filtreleme yok.
            */

            if(isset($_GET) && isset($_GET["filter"]) && strlen($_GET["filter"]) > 0){
                $sqlQuery = "SELECT id, numara, tanim, agirlik, aktif_mi, tedarikci, kayit_tarihi, guncelleme_tarihi FROM " . $this->db_table . " WHERE tanim LIKE :filter";
                $stmt = $this->conn->prepare($sqlQuery);
                $stmt->bindValue(':filter', '%'.$_GET["filter"].'%');
            }
            else{
                $sqlQuery = "SELECT id, numara, tanim, agirlik, aktif_mi, tedarikci, kayit_tarihi, guncelleme_tarihi FROM " . $this->db_table . "";
                $stmt = $this->conn->prepare($sqlQuery);
            }

            $stmt->execute();
            return $stmt;
        }

        public function createSarf(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        numara = :numara, 
                        tanim = :tanim, 
                        agirlik = :agirlik, 
                        aktif_mi = :aktif_mi, 
                        tedarikci = :tedarikci, 
                        kayit_tarihi = :kayit_tarihi,
                        guncelleme_tarihi = :guncelleme_tarihi";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->numara=htmlspecialchars(strip_tags($this->numara));
            $this->tanim=htmlspecialchars(strip_tags($this->tanim));
            $this->agirlik=htmlspecialchars(strip_tags($this->agirlik));
            $this->aktif_mi=htmlspecialchars(strip_tags($this->aktif_mi));
            $this->tedarikci=htmlspecialchars(strip_tags($this->tedarikci));
            $this->kayit_tarihi=htmlspecialchars(strip_tags($this->kayit_tarihi));
            $this->guncelleme_tarihi=htmlspecialchars(strip_tags($this->guncelleme_tarihi));
        
            $stmt->bindParam(":numara", $this->numara);
            $stmt->bindParam(":tanim", $this->tanim);
            $stmt->bindParam(":agirlik", $this->agirlik);
            $stmt->bindValue(":aktif_mi", $this->aktif_mi, PDO::PARAM_BOOL);
            $stmt->bindParam(":tedarikci", $this->tedarikci);
            $stmt->bindParam(":kayit_tarihi", $this->kayit_tarihi);
            $stmt->bindParam(":guncelleme_tarihi", $this->guncelleme_tarihi);

        
            if($stmt->execute()){
                $this->id=$this->conn->lastInsertId();
               return true;
            }
            return false;
        }


        // GÜNCELLE
        public function updateSarf(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        numara = :numara, 
                        tanim = :tanim, 
                        agirlik = :agirlik, 
                        aktif_mi = :aktif_mi, 
                        tedarikci = :tedarikci, 
                        kayit_tarihi = :guncelleme_tarihi,
                        guncelleme_tarihi =:guncelleme_tarihi
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->numara=htmlspecialchars(strip_tags($this->numara));
            $this->tanim=htmlspecialchars(strip_tags($this->tanim));
            $this->agirlik=htmlspecialchars(strip_tags($this->agirlik));
            $this->aktif_mi=htmlspecialchars(strip_tags($this->aktif_mi));
            $this->tedarikci=htmlspecialchars(strip_tags($this->tedarikci));
            $this->kayit_tarihi=htmlspecialchars(strip_tags($this->kayit_tarihi));
            $this->guncelleme_tarihi=htmlspecialchars(strip_tags($this->guncelleme_tarihi));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":numara", $this->numara);
            $stmt->bindParam(":tanim", $this->tanim);
            $stmt->bindParam(":agirlik", $this->agirlik);
            $stmt->bindValue(":aktif_mi", $this->aktif_mi, PDO::PARAM_BOOL);
            $stmt->bindParam(":tedarikci", $this->tedarikci);
            $stmt->bindParam(":kayit_tarihi", $this->kayit_tarihi);
            $stmt->bindParam(":guncelleme_tarihi", $this->guncelleme_tarihi);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }
    }
?>