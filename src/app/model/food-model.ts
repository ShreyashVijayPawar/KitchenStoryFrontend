export class FoodModel {
  public id?: number;
  
  constructor(
    public image: string,
    public foodName: string,
    public foodCategory: string,
    public price: number
  ) {}
}
