import React from 'react';
import RecepieCard from '../components/RecepieCard';
import useFetchRecipesPopuler from '../hooks/UseFetchRecipesPopuler';
import Footer from '../components/Footer';

function Recipe() {
    const { recipes } = useFetchRecipesPopuler();

    const repetitionRecipes = [...recipes, ...recipes, ...recipes];

    return (
    <div className="relative min-h-screen">
        <div className="mt-[200px] pb-[100px]">
            <div className="recepeis-container w-full h-[254px] pt-[70px] flex justify-between flex-wrap">
                {repetitionRecipes.map((food, index) => (
                <RecepieCard
                    key={`${food.id}-${index}`}
                    image={food.image}
                    time={food.cookingDuration}
                    serving={food.servingNumber}
                    level={food.cookingLevel}
                    name={food.name}
                    id={food.id}
                />
                ))}
                 <div className="w-full">
                 <Footer/>
                 </div>
            </div>
        </div>
    </div>
    );
}

export default Recipe;
