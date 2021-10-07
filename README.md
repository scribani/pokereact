# PokeReact

### Notes

- Replicate the Figma design placed at:
  https://www.figma.com/file/7XF8BXBMex5PE5KIQlbuYZ/Pokedex-Desktop?node-id=0%3A1

### Requirements

- Docker

_Docker dependencies_

- Node
- Yarn
- Parcel v1
- React & React DOM

### Get started

- Clone the repo
- build the attached Docker image
  ```bash
  docker build -t codeableorg/pokereact .
  ```
- Run your docker container bash

  ```bash
  docker run --name pokereact -it -v $(pwd):/app -p 1234:1234 --rm codeableorg/pokereact bash
  ```

  - From inside the docker container run:

  ```bash
  yarn install
  ```

  - Once the packages are installed, `exit` from the container

- Run your docker container without a command, it will run the one set by default (`yarn start`).
  ```bash
  docker run --name pokereact -it -v $(pwd):/app -p 1234:1234 --rm codeableorg/pokereact
  ```
- Open your browser at http://localhost:1234

### You are ready to start coding!
