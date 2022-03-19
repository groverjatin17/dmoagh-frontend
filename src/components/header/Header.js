import React from 'react';
import LanguageBar from './LanguageBar';
import LogoBar from './LogoBar';
import MenuBar from './Menubar';

export default function Header() {
  return (
    <div>
      <LanguageBar />
      <LogoBar />
      <MenuBar />
      <hr />
    </div>
  );
}
