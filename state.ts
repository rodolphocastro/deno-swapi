export interface IState<T> {
  list(): T[];
}

export class ModelState<T> implements IState<T> {
  constructor(
    private readonly values: T[] = [],
  ) {}

  list(): T[] {
    return this.values;
  }
}
