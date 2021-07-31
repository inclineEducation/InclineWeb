import React from 'react';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar';
import data from '../SearchBar/data.json';
import Blog from '../SearchBar/Blog';

export default function Essentials() {
  return (
    <>
      <h1 className='essentials'>Essentials</h1>
      <Blog />
    </>
  );
}