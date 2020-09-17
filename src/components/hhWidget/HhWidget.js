import React, { useState, useEffect } from "react";

function HhWidget(props) {
  const [vacancies, setVacancies] = useState({});
  const [isResponse, setIsResponse] = useState(false);

  useEffect(() => {
    function getVacancies() {
      fetch("https://api.hh.ru/vacancies?employer_id=1980984")
        .then((response) => response.json())
        .then((response) => setVacancies(response))
        .then((response) => setIsResponse(true))
        .catch((error) => alert("Произошла ошибка загрузки данных"));
    }
    getVacancies();
  }, [isResponse]);

  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
}
export default HhWidget;
