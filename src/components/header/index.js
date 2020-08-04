import React from 'react';
import { AiOutlineAlignRight } from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar_toggle d-flex justify-content-end">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTransition" aria-controls="navbarTransition" aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineAlignRight size={28} />
          </button>
        </nav>
        <div className="collapse" id="navbarTransition">
          <div className="p-4 group-links ">
            <a href="/institutional" className="card-link item_link">INFO</a>
            <a href="/institutional" className="card-link item_link">MORE</a>
            <a href="/institutional" className="card-link item_link">ABOUT</a>
            <a href="/institutional" className="card-link item_link">CONTACT</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
