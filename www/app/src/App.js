import './App.css';
import SarfTablo from './SarfTablo';
import SarfForm from './SarfForm';
import Header from './Header';
import { Container } from '@mui/material';
import { useEffect, useState } from "react";


export default function App() {


  const [search_value, setSearchValue] = useState("");
  const [refresh_counter, setRefreshCounter] = useState(1);

  function increaseCounter(){
    setRefreshCounter(refresh_counter+1);
  }

  return (
    <div className="App">
      <Header updateSearchValue={setSearchValue}/>
      <Container>
        <SarfTablo refreshCounter={refresh_counter} filterValue={search_value}/>
      </Container>
      <Container>
        <SarfForm refreshTable={increaseCounter}/>
      </Container>
    </div>
  );
}