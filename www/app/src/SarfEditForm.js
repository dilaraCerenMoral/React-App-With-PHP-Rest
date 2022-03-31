import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Switch, FormControlLabel, FormGroup, FormControl } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios";

export default function SarfEditForm(props) {
  const [open, setOpen] = React.useState(false);
  const [sifirlama, setSifirlama] = React.useState("");

  const [input_numara, setInputNumara] = useState("");
  const [input_tanim, setInputTanim] = useState("");
  const [input_tedarikci, setInputTedarikci] = useState("");
  const [input_agirlik, setInputAgirlik] = useState("");
  const [input_aktif_mi, setInputAktif_mi] = useState("");

  useEffect(() => {
      if(props.sarf_id != "" && sifirlama == ""){
        setInputNumara(props.numara);
        setInputTanim(props.tanim);
        setInputTedarikci(props.tedarikci);
        setInputAgirlik(props.agirlik);
        if(props.aktif_mi == 1){
          setInputAktif_mi(true);
        }
        else{
          setInputAktif_mi(false);
        }
        setOpen(true);
      }
  }, [props.sarf_id]);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    const updateSarf = {
      id: props.sarf_id,
      numara:input_numara,
      tanim:input_tanim,
      tedarikci:input_tedarikci,
      agirlik:input_agirlik,
      aktif_mi:input_aktif_mi
    }

    axios.post(`http://127.0.0.1:8000/api/crud/update.php`, { updateSarf }).then(res=> {
      console.log(res);
      console.log(res.data);
      sifirlama="sürüyor"
      props.sarf_id=""
      sifirlama=""
      props.submitMethod();
    })

  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.sarf_id} Nolu Sarf Kaydını Güncelle</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Aşağıdaki <b>tüm alanları</b> doldurarak, sarf kaydını güncelleyebilirsiniz.
          </DialogContentText>
          <TextField
            autoFocus
            id="name"
            label="Numara"
            type="text"
            fullWidth
            value={input_numara}
            variant="standard"
            onChange={e => setInputNumara(e.target.value)}
          />
          <TextField
            autoFocus
            id="name"
            label="Tanım"
            type="text"
            fullWidth
            value={input_tanim}
            variant="standard"
            onChange={e => setInputTanim(e.target.value)}
          />
          <TextField
            autoFocus
            id="name"
            label="Tedarikçi"
            type="text"
            fullWidth
            value={input_tedarikci}
            variant="standard"
            onChange={e => setInputTedarikci(e.target.value)}
          />
          <TextField
            autoFocus
            id="name"
            label="Ağırlık"
            type="number"
            min="0.0"
            step="0.001"
            fullWidth
            value={input_agirlik}
            variant="standard"
            onChange={e => setInputAgirlik(e.target.value)}
          />

      <FormGroup sx={{ mx: "auto", width: '25ch' }}>
      <FormControlLabel control={<Switch
      onChange={e => setInputAktif_mi(!input_aktif_mi)}
      inputProps={{ 'aria-label': 'controlled' }}
      checked={input_aktif_mi} />} label="Aktif Mi?"
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>İptal</Button>
          <Button onClick={handleClose}>Güncelle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}