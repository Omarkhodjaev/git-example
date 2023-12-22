import { generatedId } from "../../../lib/generationId.js";

export class UserEntity {
  constructor(login, password, fullName) {
    this.id = generatedId();
    this.login = login;
    (this.password = password), (this.full_name = fullName);
  }
}
