import React, { useState } from "react";
import Categories from "../components/Categories";
import Menu from "../components/Menu";

//* data import
import allProjects from "../data";

//* get categories to an array
//? use set to pick the unique categorie values
const allCategories = [
  "all",
  ...new Set(allProjects.map((project) => project.category)),
];

//! main return
function Home() {
  //* states
  const [projects, setProjects] = useState(allProjects);
  const [categories, setCategories] = useState(allCategories);

  //* function
  //? filter the items and show the one with the desired category
  const filterItems = (category) => {
    if (category === "all") {
      setProjects(allProjects);
      return;
    }
    const newItems = allProjects.filter((item) => item.category === category);
    setProjects(newItems);
  };

  //* main return
  return (
    <main>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={projects} />
    </main>
  );
}

export default Home;
