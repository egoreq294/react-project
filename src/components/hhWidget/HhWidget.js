import React, { useState, useEffect } from "react";

function HhWidget(props) {
  const [vacancies, setVacancies] = useState({});

  useEffect(() => {
    function getVacancies() {
      fetch("https://api.hh.ru/vacancies?employer_id=1980984")
        .then((response) => response.json())
        .then((response) => setVacancies(response));
    }
    getVacancies();
  }, []);
  console.log(vacancies);
  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
}
export default HhWidget;
