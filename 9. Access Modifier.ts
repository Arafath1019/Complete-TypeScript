class Person {
  private ssn: string;
  public firstName: string;
  protected lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player {
  constructor(
    private ssn: string,
    public firstName: string,
    protected lastName: string
  ) {}

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class PersonNew {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}
