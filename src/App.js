import React from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import store from "./store";
import logo from "./static/images/logo.png";
import { Main } from "./components/Main";
import { Title } from "./components/Title";
import { SearchBar } from "./components/SearchBar";
import { Select } from "./components/Select";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { CardImage } from "./components/CardImage";

function generateOptionTemplate(option) {
  return (
    <option key={option.text} value={option.value} disabled={option.disabled}>
      {option.text}
    </option>
  );
}

export function App() {
  return (
    <>
      <Header>
        <Container prefix="header">
          <img src={logo} alt="Pokemon logo" />

          <NavBar>
            {store.links.map((link) => (
              <li key={link.text} className={link.selected ? "selected" : ""}>
                <a href={link.path}>{link.text}</a>
              </li>
            ))}
          </NavBar>
        </Container>
      </Header>

      <Main>
        <Title tag="h2">
          800 <span className="bold">Pokemons</span> for you to choose your
          favorite
        </Title>

        <SearchBar />

        <Container prefix="selects">
          <Select>
            {store.filters.types.map((type) => generateOptionTemplate(type))}
          </Select>

          <Select>
            {store.filters.attack.map((atk) => generateOptionTemplate(atk))}
          </Select>

          <Select>
            {store.filters.experience.map((exp) => generateOptionTemplate(exp))}
          </Select>
        </Container>

        <Container prefix="cards">
          {store.cards.map((pokemon) => (
            <Card key={pokemon.id} type={pokemon.types[0].toLowerCase()}>
              <Container prefix="card-details">
                <Title tag="h3">{pokemon.name}</Title>

                <Container prefix="stats">
                  <div className="stat">
                    <p className="stat-value">{pokemon.attack}</p>
                    <p className="gray">Attack</p>
                  </div>

                  <div className="stat">
                    <p className="stat-value">{pokemon.defense}</p>
                    <p className="gray">Defense</p>
                  </div>
                </Container>

                <Container prefix="types">
                  {pokemon.types.map((type) => (
                    <div className="type" key={type}>
                      <p
                        style={{
                          background: `var(--bg-${type.toLowerCase()})`,
                        }}
                      >
                        {type}
                      </p>
                    </div>
                  ))}
                </Container>
              </Container>

              <CardImage id={pokemon.id} />
            </Card>
          ))}
        </Container>
      </Main>

      <Footer>
        <p>Made with ❤️ by Andrés Scribani</p>
        <p>Pokemon 2021</p>
      </Footer>
    </>
  );
}
