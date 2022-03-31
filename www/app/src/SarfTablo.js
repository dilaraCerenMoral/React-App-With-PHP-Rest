import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
import { dividerClasses, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SarfEditForm from './SarfEditForm';
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";



function SarfTablo(props) {

  const _export = React.useRef(null);

  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };

const axios = require('axios');

const [rows, setRows] =  useState([]);


const [selected_id, setSelectedId] = useState("");
const [selected_numara, setSelectedNumara] = useState("");
const [selected_tanim, setSelectedTanim] = useState("");
const [selected_tedarikci, setSelectedTedarikci] = useState("");
const [selected_agirlik, setSelectedAgirlik] = useState("");
const [selected_aktif_mi, setSelectedAktif_mi] = useState("");


useEffect(() => {
  refreshRows();
}, [props.filterValue]);

useEffect(() => {
  refreshRows();
}, [props.refreshCounter]);


useEffect(() => {
    refreshRows();
}, []);

function refreshRows() {
    const request = {
      params: {
        filter: props.filterValue
      }
    }
    axios.get(`http://127.0.0.1:8000/api/crud/read.php`, request)
    .then(res => {
    const xrows = res.data;
    console.log(xrows);
    setRows(xrows);
    console.log(typeof rows);
    })
}

function openEditForm(xselected_row){
  
  setSelectedNumara(xselected_row.numara);
  setSelectedTanim(xselected_row.tanim);
  setSelectedTedarikci(xselected_row.tedarikci);
  setSelectedAgirlik(xselected_row.agirlik);
  setSelectedAktif_mi(xselected_row.aktif_mi);
  setSelectedId(xselected_row.id);

}

  return (
    <div>
       <ExcelExport data={rows} ref={_export}>
        <div className="dontshow">
      <Grid
        data={rows}>

        <GridToolbar>
        <Button sx={{ m: 2 }} onClick={excelExport}>Excel Olarak İndir</Button> <div>Sayfanın altında bulunan alandan, yeni kayıt ekleyebilir, kayıtların sağ tarafında bulunan kalem düğmelerini kullanarak mevcut sarf malzeme kayıtlarını güncelleyebilir ve ekranın sağ üst köşesinden sarf malzemeler içerisinde arama/filtreleme yapabilirsiniz.</div>
        </GridToolbar>
        <GridColumn className="dontshow" field="id" title="" />
        <GridColumn className="dontshow" field="numara" title="" />
        <GridColumn className="dontshow" field="tanim" title="" />
        <GridColumn className="dontshow" field="tedarikci" title="" />
        <GridColumn className="dontshow" field="agirlik" title="" />
        <GridColumn className="dontshow" field="aktif_mi" title="" />
      </Grid>
        </div>
    </ExcelExport>
    <TableContainer sx={{ m: 1 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
            <IconButton onClick={() => { refreshRows(); }} aria-label="delete">
      <RefreshIcon />
    </IconButton> ID
            </TableCell>
            <TableCell align="right">Numara</TableCell>
            <TableCell align="right">Tanım</TableCell>
            <TableCell align="right">Tedarikçi</TableCell>
            <TableCell align="right">Ağırlık</TableCell>
            <TableCell align="right">Aktiflik</TableCell>
            <TableCell align="right">Kayıt Tarihi</TableCell>
            <TableCell align="right">Son Güncelleme</TableCell>
            <TableCell align="right">İşlem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.numara}</TableCell>
              <TableCell align="right">{row.tanim}</TableCell>
              <TableCell align="right">{row.tedarikci}</TableCell>
              <TableCell align="right">{row.agirlik}</TableCell>
              <TableCell align="right">{row.aktif_mi == 1 ? "Aktif":"Pasif"}</TableCell>
              <TableCell align="right">{row.kayit_tarihi}</TableCell>
              <TableCell align="right">{row.guncelleme_tarihi}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => { console.log(row);openEditForm(row);  }} aria-label="delete">
                <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <SarfEditForm submitMethod={refreshRows} sarf_id={selected_id} numara={selected_numara} tanim={selected_tanim} tedarikci={selected_tedarikci} agirlik={selected_agirlik} aktif_mi={selected_aktif_mi} />
    </div>
  );
}
export default SarfTablo;



