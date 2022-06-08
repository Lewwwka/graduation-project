import {  useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import CategoriesInSearch from '../../components/Main/Categories';
import Footer from '../../components/Footer/Footer';

function Categories() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <CategoriesInSearch />
      <Footer />
    </div>
  );
}

export default Categories;