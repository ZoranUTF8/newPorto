import React, { useState } from "react";
import Categories from "../components/Categories";
import Menu from "../components/Menu";

//* data import
import allProjects from "../data";

//* get categories to an array
const allCategories = [
  "all",
  ...new Set(allProjects.map((project) => project.category)),
];

//! main return
function Home() {
  const [projects, setProjects] = useState(allProjects);


  
  return (
    <main>
      <Categories />
      <Menu />
    </main>
  );
}

export default Home;