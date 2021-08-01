interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  readonly occupation: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

let Arafath = {
  firstName: "Yeasin",
  lastName: "Arafath",
  occupation: "Software Engineer",
};

console.log(getFullName(Arafath));

interface Json {
  toJson(): string;
}

class Member implements Json {
  constructor(private firstName: string, private lastName: string) {}

  toJson(): string {
    return JSON.stringify(this);
  }
}
