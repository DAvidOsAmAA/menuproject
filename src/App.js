
import './App.css';
import { Container } from 'react-bootstrap';
import Nabar from './components/navbar';
import Header from './components/header';
import Category from './components/category';
import ItemCard from './components/card';
import Item from './components/data';
import { useState } from 'react';

function App() {



  const[itemsData,setItemsData]=useState(Item)
  const allCat = ['All',...new Set(Item.map((i)=>i.category))]

  const filterbycategory=(cat)=>{
    if(cat==="All"){
      setItemsData(Item)
    }else{
    const newArr =Item.filter((items)=>
      items.category === cat)
    setItemsData(newArr);
    }}


    const filterBySearch=(word)=>{
      if(word!==""){
      const newArr =Item.filter((items)=>
        items.title === word)
      setItemsData(newArr);
      }}

  return (
    <div className="App">
        <Nabar filterBySearch={filterBySearch}/>
      <Container >
      <Header/>
      <Category filterbycategory={filterbycategory}    allCat={allCat}/>
      <ItemCard itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
