import fs from "fs";

export class DataSource {
  #dir;
  constructor(dir) {
    this.#dir = dir;
  }

  read() {
    const jsonData = fs.readFileSync(this.#dir, "utf-8");

    return jsonData ? JSON.parse(jsonData) : [];
  }

  write(data) {
    fs.writeFileSync(this.#dir, JSON.stringify(data, undefined, 4));
  }
}
