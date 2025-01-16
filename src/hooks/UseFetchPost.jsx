import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPost = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/SectionPost")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  return { recipes };
};

export default useFetchPost;
