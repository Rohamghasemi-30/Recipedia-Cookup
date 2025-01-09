import React from "react";
import Button from "./Button";
import RecepieCard from "./RecepieCard";
import useFetchRecipesPopuler from '../hooks/UseFetchRecipesPopuler';

function PopularRecepies() {
  const { recipes } = useFetchRecipesPopuler();

  return (
    <div className=" mt-[200px]">
      <div className="row flex w-full justify-between">
        <div className="title-box">
          <h2 className="text-[4.6rem] font-bold ">Discover, Create, Share</h2>
          <span className="text-[2.4rem]">Check our most popular recipes of this week</span>
        </div>
        <Button width={150} height={55} text="See All"/>
      </div>
      <div className="recepeis-container w-full h-[254px] pt-[70px] flex justify-between flex-wrap ">
        {recipes.map((food) => (
          <RecepieCard
            key={food.id}
            image={food.image}
            time={food.cookingDuration}
            serving={food.servingNumber}
            level={food.cookingLevel}
            name={food.name}
            id={food.id}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularRecepies;
