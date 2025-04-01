import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/constants";
import Pagination from "../../components/Pagination";

import "./search.scss";

function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState({ results: [] }); // Inicializa como objeto
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const searchParams = queryString.parseUrl(location.search);
      const { s } = searchParams.query;
      if (!s) return;

      const response = await fetch(
        `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=${page}` // Usa el estado de page
      );
      const movies = await response.json();

      setSearchValue(s);
      setMovieList(movies);
    })();
  }, [location.search, page]); // Escucha cambios en page

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    navigate(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
    setPage(1); // Reinicia la página al buscar
  };

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Row>
        <Col span={12} offset={6} className="search">
          <h1>Busca tu película</h1>
          <Input value={searchValue} onChange={onChangeSearch} />
        </Col>
      </Row>

      {movieList.results && (
        <Row>
          <MovieCatalog movies={movieList.results} />
        </Row>
      )}
      <Col
        span="24"
        style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
      >
        <Pagination
          currentPage={page} // Usa el estado de page
          totalItems={movieList.total_results}
          onChangePage={onChangePage}
        />
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default Search;
