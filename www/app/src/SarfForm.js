import axios from "axios";
import React, { useState } from "react";
import { Button, Card, TextField, Switch, FormControlLabel, FormGroup, FormControl } from '@mui/material';
import Typography from '@mui/material/Typography';



function SarfForm(props) {
  const [numara, setNumara] = useState("");
  const [tanim, setTanim] = useState("");
  const [tedarikci, setTedarikci] = useState("");
  const [agirlik, setAgirlik] = useState("");
  const [aktif_mi, setAktif_mi] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();

      const newSarf = {
        numara:numara,
        tanim:tanim,
        tedarikci:tedarikci,
        agirlik:agirlik,
        aktif_mi:aktif_mi
      }

      axios.post(`http://127.0.0.1:8000/api/crud/create.php`, { newSarf }).then(res=> {
        console.log(res);
        console.log(res.data);
        props.refreshTable();
      })

  }
  return (
    <Card sx={{ m: 2 }} variant="outlined">
      <Typography variant="h5" gutterBottom component="div" sx={{ m: 2 }}>
        Yeni Kayıt
      </Typography>
    <form onSubmit={handleSubmit}>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <TextField
            autoFocus
            id="name"
            label="Numara"
            type="text"
            value={numara}
            variant="standard"
            onChange={e => setNumara(e.target.value)}
          />
    </FormControl>

    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <TextField
            autoFocus
            id="name"
            label="Tanım"
            type="text"
            value={tanim}
            variant="standard"
            onChange={e => setTanim(e.target.value)}
          />
          </FormControl>
      
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

<TextField
            autoFocus
            id="name"
            label="Tedarikçi"
            type="text"
            value={tedarikci}
            variant="standard"
            onChange={e => setTedarikci(e.target.value)}
          />

</FormControl>

<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
<TextField
            autoFocus
            id="name"
            label="Ağırlık"
            type="text"
            value={agirlik}
            variant="standard"
            onChange={e => setAgirlik(e.target.value)}
          />
          </FormControl>
      

          <FormGroup sx={{ mx: "auto", width: '25ch' }}>
            <FormControlLabel control={<Switch
      onChange={e => setAktif_mi(!aktif_mi)}
      inputProps={{ 'aria-label': 'controlled' }}
      checked={aktif_mi} />} label="Aktif Mi?"
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </FormGroup>


      <Button onClick={handleSubmit}>Kaydet</Button>
    </form>
    </Card>
  );
}

export default SarfForm;