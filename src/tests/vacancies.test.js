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

it("renders fake vacancy", async () => {
  const fakeVacanciesList = {
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

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeVacanciesList),
    })
  );

  // Используем act асинхронно, чтобы передать успешно завершённые промисы
  await act(async () => {
    render(<VacanciesSection />, container);
  });

  expect(
    container.querySelector(".vacanciesInfos").childNodes[0].textContent
  ).toBe(fakeVacanciesList.items[0].name);
  expect(
    container.querySelector(".vacanciesInfos").childNodes[1].lastChild
      .textContent
  ).toBe(fakeVacanciesList.items[0].snippet.requirement);
  expect(
    container.querySelector(".vacanciesInfos").childNodes[2].lastChild
      .textContent
  ).toBe(fakeVacanciesList.items[0].snippet.responsibility);
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
