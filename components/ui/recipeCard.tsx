import Card from './Card';

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <h4>{recipe.name}</h4>
    </Card>
  );
};

export default RecipeCard;
