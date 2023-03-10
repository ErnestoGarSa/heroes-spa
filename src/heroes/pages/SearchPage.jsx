import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import HeroCard from "../components/HeroCard";
import queryString from "query-string";
import getHeroesByName from "../helpers/getHeroesByName";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  // const query = queryString.parse(location.search);
  // console.log(query);
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);
  console.log("heroes", heroes);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) {
    //   return;
    // }
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Searh</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No hero found with <b>{q}</b>
              </div>
            )
          )}

          {heroes.map((hero) => {
            console.log("hero", hero);
            return <HeroCard {...hero} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
