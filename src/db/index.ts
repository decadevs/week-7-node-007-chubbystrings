import fs from "fs";

interface DIMENSION {
  [propName: string]: number;
}
export interface RESULT {
  id: number;
  shape: string;
  dimension: DIMENSION;
  result?: number;
  createdAt?: Date;
}

export interface DATA {
    shape: string;
    dimension: DIMENSION;
    result?: number
}

const database = "database.json";
class Db {
  static readFromDb() {
    try {
      const buffer: Buffer = fs.readFileSync(database);
      const all = JSON.parse(buffer.toString());
      return all;
    } catch (error) {
      return [];
    }
  }

  static saveTodb(result: DATA): RESULT {
    try {
      const id: number = Db.generateId();
      const all: RESULT[] = Db.readFromDb();
      const data: RESULT = {
        id,
        ...result,
        createdAt: new Date(),
      };
      if (all.length > 0) {
        all.push(data);
        const json: string = JSON.stringify(all, null, 2);
        fs.writeFileSync(database, json);
      } else {
        const newData = [data];
        const json: string = JSON.stringify(newData, null, 2);
        fs.writeFileSync(database, json);
      }
      return data;
    } catch (error) {
      throw new Error("could not save to database");
    }
  }

  static generateId(): number {
    const all: RESULT[] = Db.readFromDb();
    let ID = 1;
    if (all.length > 0) {
      const allIDs: number[] = all.map((results: RESULT) => results.id);
      const maxId: number = Math.max(...allIDs);
      ID = maxId + 1;
      return ID;
    }
    return ID;
  }
}

export default Db;
