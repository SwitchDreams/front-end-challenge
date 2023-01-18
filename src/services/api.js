import axios from "axios";

const api = axios.create({
  baseURL: "https://gym.switchdreams.com.br/api",
});

export const createUser = (email, password, role) => {
  api
    .post("/users", {
      user: {
        email: email,
        password: password,
        role: role
      },
    })
    .then((res) => console.log("deu certo", res))
    .catch((err) => console.log(err));
};


export const loginUser = (email, password) => {
  api
    .post("/users/login", {
      user: {
        email: email,
        password: password,
      },
    })
    .then((res) => console.log("deu certo", res))
    .catch((err) => console.log(err));
};

export const showGymClasses = () => {
  api
    .get("/gym_classes")
    .then((res) => console.log("deu certo", res))
    .catch((err) => console.log(err));
};
