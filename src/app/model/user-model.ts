export class UserModel {
  public id?: number;
  public userRole?: string

  constructor(
    public userId: string,
    public password: string
  ) {}
}
