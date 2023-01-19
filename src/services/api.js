import axios from "axios";

export const api = axios.create({
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

// export const showGymClasses = async () => {
//   await api.get("/gym_classes").then((res) => {
//     return res.data;
//   });
// };

export const GymClass = async (id) => {
  await api
    .get(`/gym_classes/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const EditGymClass = async (id) => {
  await api
    .patch(`/gym_classes/${id}`)
    .then((res) => {
      res.data;
    })
    .catch((err) => {
      err;
    });
};

export const CreateGymClass = async () => {
  await api
    .post(`/gym_classes`)
    .then((res) => {
      res.data;
    })
    .catch((err) => {
      err;
    });
};
