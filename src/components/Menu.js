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
              <div>
                <p className="item-text">{desc}</p>
                <Button variant="link" size="lg">
                  <a href={liveApp} target="_blank" className=" filter-btn" rel="noreferrer">
                    Live preview
                  </a>
                </Button>
                <Button variant="link" size="lg">
                  <a href={gitLink} target="_blank" className=" filter-btn" rel="noreferrer">
                    Github
                  </a>
                </Button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
