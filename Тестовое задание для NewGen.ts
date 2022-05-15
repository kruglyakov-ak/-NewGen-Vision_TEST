// Условие задачи:

// На сайте UniPage есть подборка интересных языковых курсов. У каждого курса есть цена, которая является диапазоном.
// Например:

//     от 100 до 200 рублей;
//     от 500 рублей;
//     до 400 рублей.

// Пользователю сайта нужно найти подходящие ему курсы. Для этого есть фильтр, где пользователь может задать подходящий ему диапазон цен.

// Требование:

// Опишите, как можно отфильтровать список курсов, чтобы выдались только подходящие по цене? Реализуйте на JavaScript (или TypeScript) функцию, проводящую такую фильтрацию.

// Входные данные:

//     // Список курсов
//     let courses = [
//         { name: "Courses in England", prices: [0, 100] },
//         { name: "Courses in Germany", prices: [500, null] },
//         { name: "Courses in Italy", prices: [100, 200] },
//         { name: "Courses in Russia", prices: [null, 400] },
//         { name: "Courses in China", prices: [50, 250] },
//         { name: "Courses in USA", prices: [200, null] },
//         { name: "Courses in Kazakhstan", prices: [56, 324] },
//         { name: "Courses in France", prices: [null, null] },
//     ];

//     // Варианты цен (фильтры), которые ищет пользователь
//     let requiredRange1 = [null, 200];
//     let requiredRange2 = [100, 350];
//     let requiredRange3 = [200, null];

// Вывод:

//    // [подходящие курсы для каждого варианта фильтра]

// Дополнительно, вы также можете реализовать алгоритм сортировки курсов по цене.

type Course = {
  name: string;
  prices: [number | null, number | null];
};

const enum SortType {
  Default = "default",
  Ascending = "ascending",
  Descending = "descending",
}

const courses: Course[] = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

const filterAndSortCoursesList = (
  coursesList: Course[],
  priceFrom: number | null = null,
  priceTo: number | null = null,
  sortType: SortType = SortType.Default
): Course[] => {
  const from = priceFrom !== null ? priceFrom : 0;
  const to = priceTo !== null ? priceTo : Infinity;

  const filteredCoursesList = coursesList.slice().filter((course) => {
    return (
      (course.prices[0] !== null
        ? from <= course.prices[0]
        : priceFrom === course.prices[0]) &&
      (course.prices[1] !== null
        ? to >= course.prices[1]
        : priceTo === course.prices[1])
    );
  });

  switch (sortType) {
    case SortType.Default:
      return filteredCoursesList;

    case SortType.Ascending:
      return filteredCoursesList.sort(
        (prev, next) =>
          (prev.prices[0] === null ? 0 : prev.prices[0]) -
          (next.prices[0] === null ? 0 : next.prices[0])
      );

    case SortType.Descending:
      return filteredCoursesList.sort(
        (prev, next) =>
          (next.prices[0] === null ? 0 : next.prices[0]) -
          (prev.prices[0] === null ? 0 : prev.prices[0])
      );
  }
};
