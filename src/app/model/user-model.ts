export class UserModel {
  public id?: number;

  constructor(
    public userId: string,
    public password: string,
    public userRole: string
  ) {}
}
