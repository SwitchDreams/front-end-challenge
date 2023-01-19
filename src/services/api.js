import axios from "axios";

const api = axios.create({
  baseURL: "https://gym.switchdreams.com.br/api",
});

export const createUser = async (email, password, role) => {
  await api
    .post("/users", {
      user: {
        email: email,
        password: password,
        role: role,
      },
    })
    .then((res) => {
      return res, alert("sucesso");
    })
    .catch((err) => {
      return err, alert("Erro");
    });
};

export const loginUser = async (email, password) => {
  await api
    .post("/users/login", {
      user: {
        email: email,
        password: password,
      },
    })
    .then((res) => {
      return res, alert("sucesso");
    })
    .catch((err) => {
      return err, alert("Erro");
    });
};

export const showGymClasses = async () => {
  await api
    .get("/gym_classes")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
