import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ✅ move map outside the return
  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section key={idMeal} >
      <img
        src={strMealThumb}
        alt={strMeal}
       
      />
      <section className="text-center mt-2">
        <p >{strMeal}</p>
        <p >{idMeal}</p>
      </section>
    </section>
  ));

  return (
    <div >
      {itemList}
    </div>
  );
};

export default Meals;
