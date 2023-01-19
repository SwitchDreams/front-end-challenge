import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import ClassBox from "../components/classBox";
import { showGymClasses } from "../services/api";

const ShowClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    showGymClasses()
      .then((res) => {
        setClasses(res), console.log(res);
      })
      .catch((err) => {
        console.log("Não conseguimos acessar a api");
      });
  }, []);

  return (
    <ScrollView>
      {classes !== undefined ? (
        classes.map((group, index) => (
          <ClassBox key={index} group={group}></ClassBox>
        ))
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default ShowClass;
