import React from "react";

import { Button } from "react-bootstrap";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((projectItem) => {
        const { id, title, img, desc, gitLink, liveApp } = projectItem;

        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <Button variant="link"  className="bsBtn" size="lg">
                <a href={liveApp} target="_blank" >
                  Live preview
                </a>
              </Button>
              <Button variant="link" className="bsBtn" size="lg">
                <a href={gitLink} target="_blank" >
                  Github
                </a>
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
