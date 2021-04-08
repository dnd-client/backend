export abstract class ConstructableDto<T = ConstructableDto<object>> {
  constructor(dto?: Partial<T>) {
    if (dto) {
      Object.assign(this, dto);
    }
  }
}
