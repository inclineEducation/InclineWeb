import React from 'react';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar';
import data from '../SearchBar/data.json';

export default function Essentials() {
  return (
    <>
      <h1 className='essentials'>Essentials</h1>
      <SearchBar placeholder="Enter a Book Name..." data={data} />
    </>
  );
}