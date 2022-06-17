export class FoodModel {

  constructor(
    public id: number,
    public image: string,
    public foodName: string,
    public foodCategory: string,
    public price: number,
    public quantityAvailable: number
  ) {}

  // public getProductId():number{
  //   return this.id;
  // }
  // public setProductId(id:number){
  //   this.id = id;
  // }
}
