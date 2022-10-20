import { User } from "../generated/client";

export interface reqUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
class UserModel {
  constructor(private instance: User) {}

  get toJson() {
    return {
      id: this.instance.id,
      firstName: this.instance.firstName,
      lastName: this.instance.lastName,
      email: this.instance.email,
      createAt: this.instance.createdAt,
      updateAt: this.instance.updatedAt,
    };
  }
}

export { UserModel };
