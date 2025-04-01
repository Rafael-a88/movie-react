import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, API } from '../utils/constants';
import Footer from '../components/Footer';
import MovieCatalog from "../components/MovieCatalog";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination";

export default function Popular() {
   const [movieList, setMovieList] = useState( [] ); 
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await fetch(
              `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=${page}`
            );
    
            if (!response.ok) {
              throw new Error('Error en la solicitud: ' + response.statusText);
            }
    
            const movies = await response.json();
            setMovieList(movies); // Asegúrate de que movies tenga la estructura correcta
          } catch (error) {
            console.error('Error fetching movies:', error);
          }
        };
    
        fetchMovies();
      }, [page]);

      const onChangePage = page => {
        setPage(page);
      }

        return (
          <Row>
            <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
              <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
                Películas Populares
              </h1>
            </Col>
            {movieList.results && movieList.results.length > 0 ? ( 
              <Row>
              <Col span="24" >
                <Row>
                <MovieCatalog movies={movieList.results} />
                </Row>
              </Col>
              <Col span="24" style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Pagination
          currentPage={movieList.page}
          totalItems={movieList.total_results}
          onChangePage={onChangePage}
        /> 
      </Col>
      
              </Row>
            ) : (
              <Col span="24">
                
                <Loading />
              </Col>
            )}
            <Col span={24}>
              <Footer />
            </Col>
          </Row>
        );
}