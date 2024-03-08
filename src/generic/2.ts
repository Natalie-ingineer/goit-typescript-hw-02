/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: string,
  bottom: number
): Pick<AllType, "name" | "color" | "position" | "weight"> {
  return {
    name: top,
    color: top,
    position: bottom,
    weight: bottom,
  };
}

export {};
