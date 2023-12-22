import { hashPassword } from "../../lib/bcrypt.js";
import { UserEntity } from "./entity/user.entity.js";
import { DataSource } from "../../lib/dataSource.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { ResData } from "../../lib/resData.js";
import { UserAlreadyExist } from "./exception/user.exception.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class UserService {
  async create(dto) {
    const foundUserByLogin = getUserByLogin(dto.login);

    if (foundUserByLogin.data) {
      throw new UserAlreadyExist();
    }

    const hashedPassword = await hashPassword(dto.password);

    const newUser = new UserEntity(dto.login, hashedPassword, dto.fullName);

    const userDir = join(__dirname, "../../../database", "users.json");
    const userDataSource = new DataSource(userDir);
    const users = userDataSource.read();

    userDataSource.write(newUser);

    users.push(newUser);

    const resData = new ResData("User created", 201, newUser);
    return resData;
  }

  async getUserByLogin(login) {
    const userDir = join(__dirname, "../../../database", "users.json");
    const userDataSource = new DataSource(userDir);
    const users = userDataSource.read();

    const foundUser = users.find((user) => user.login === login);

    let resData;

    if (foundUser) {
      resData = new ResData("Found user by login", 200, foundUser);
    } else {
      resData = new ResData("User not found", 404, null);
    }

    return resData;
  }
}
