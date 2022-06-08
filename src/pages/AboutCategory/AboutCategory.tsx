import {  useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Category from '../../components/Main/Category';
import Footer from '../../components/Footer/Footer';

function AboutCategory() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Category />
      <Footer />
    </div>
  );
}

export default AboutCategory;