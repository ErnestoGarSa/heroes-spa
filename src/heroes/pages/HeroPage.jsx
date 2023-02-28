import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import getHeroById from "../helpers/getHeroById";

const HeroPage = () => {
  const { heroId } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  console.log(hero);

  if (!hero) {
    return <Navigate to="/marvel " />;
  }

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
