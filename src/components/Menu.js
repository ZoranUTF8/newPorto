import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((projectItem) => {
        const { id, title, category, img, desc } = projectItem;

        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <Button variant="outline-secondary" className="bsBtn">
                Live preview
              </Button>
              <Button variant="outline-secondary" className="bsBtn">
                Github
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
