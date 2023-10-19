import Realm from "realm";
import { v4 as uuid } from "uuid";

export class Meta extends Realm.Object<Meta> {
  _id: Realm.BSON.UUID = uuid();
  isLoggedIn: boolean = false;
  static schema = {
    name: "Meta",
    properties: {
      _id: "string",
      isLoggedIn: "bool",
    },
    primaryKey: "_id",
  };
}
