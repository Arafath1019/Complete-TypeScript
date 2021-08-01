const addID = <
  T extends {
    name: string;
    age: number;
    country: string;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "Yeasin Arafath",
  age: 25,
  country: "Bangladesh",
});

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: "good",
  data: {
    name: "test",
    something: 300,
  },
};
