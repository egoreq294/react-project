import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import VacanciesSection from "./../components/vacancies/VacanciesSection";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const VALID_VACANCIES_RESPONSE = {
  items: [
    {
      name: "Пират",
      snippet: {
        requirement: "Высшее образование. ",
        responsibility: "Анализ работы продуктивных систем",
      },
      alternate_url: "vk.com",
    },
  ],
};

it("renders fake vacancy", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(VALID_VACANCIES_RESPONSE),
    })
  );

  // Используем act асинхронно, чтобы передать успешно завершённые промисы
  await act(async () => {
    render(<VacanciesSection />, container);
  });
  const firstVacancy = VALID_VACANCIES_RESPONSE.items[0];
  const vacanciesInfo = container.querySelector(".vacanciesInfos");

  const name = Array.from(container.querySelectorAll("h2")).find((el) =>
    el.textContent.includes(firstVacancy.name)
  );
  expect(name).not.toBeUndefined();
  const req = Array.from(container.querySelectorAll("p")).find((el) =>
    el.textContent.includes(firstVacancy.snippet.requirement)
  );
  expect(req).not.toBeUndefined();
  const resp = Array.from(container.querySelectorAll("p")).find((el) =>
    el.textContent.includes(firstVacancy.snippet.responsibility)
  );
  expect(resp).not.toBeUndefined();

  // выключаем фиктивный fetch, чтобы убедиться, что тесты полностью изолированы
  global.fetch.mockRestore();
});

it("wrong api", async () => {
  const fakeVacanciesList = { items: [] };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeVacanciesList),
    })
  );

  // Используем act асинхронно, чтобы передать успешно завершённые промисы
  await act(async () => {
    render(<VacanciesSection />, container);
  });

  expect(container.querySelector(".vacanciesInfos")).toBe(null);

  // выключаем фиктивный fetch, чтобы убедиться, что тесты полностью изолированы
  global.fetch.mockRestore();
});
