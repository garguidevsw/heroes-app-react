import { useLocation, useNavigate } from 'react-router-dom';
import { HeroeCard } from '../components'
import { useForm } from '../hooks/useForm';

import queryString from 'query-string'
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = ''} = queryString.parse(location.search)

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && (heroes.length === 0)

  const onSearchSubmit = (event) => {
    event.preventDefault()

    // if(searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`)

    console.log(searchText);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input
              className="form-control"
              placeholder="Search hero"
              autoComplete="off"
              name="searchText"
              type="text"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            ( q === '' ) 
              ? <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
              : ( heroes.length === 0) && <div className="alert alert-danger animate__animated animate__fadeIn">Not found a hero with info <b>{ q }</b></div>
          } */}
          
          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none'}}>Search a hero</div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none'}}>Not found a hero with info <b>{ q }</b></div>

          {
            heroes.map( heroe => (
              <HeroeCard key={heroe.id} {...heroe} />
            ))
          }
        </div>
      </div>
    </>
  );
};
