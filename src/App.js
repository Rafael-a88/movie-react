import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import Movie from "./pages/movie";
import Popular from "./pages/popular";
import Search from "./pages/search/search";
import Error404 from "./pages/error404/error404";
import MenuTop from "./components/MenuTop";

export default function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>
        <Content>
          <Routes>
            <Route path="/" exact={true} element={<Home />}></Route>
            <Route path="/new-movies"exact={true} element={<NewMovies />}></Route>
            <Route path="/popular" exact={true} element={<Popular />}></Route>
            <Route path="/search" exact={true} element={<Search />}></Route>
            <Route path="/movie/:id" exact={true} element={<Movie />}></Route>
            <Route path="*" exact={true} element={<Error404 />}></Route>
          </Routes>
        </Content>
      </Router>
    </Layout>
  );
}
