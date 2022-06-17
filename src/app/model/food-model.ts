export class FoodModel {

  constructor(
    public id: number,
    public image: string,
    public foodName: string,
    public foodCategory: string,
    public price: number
  ) {}
}
