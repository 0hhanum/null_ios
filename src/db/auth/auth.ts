import Realm from "realm";
import { v4 as uuid } from "uuid";

type loginMethod = "email" | "apple" | "naver" | "kakao";

export class Auth extends Realm.Object<Auth> {
  _id: Realm.BSON.UUID = uuid();
  email!: string;
  loginMethod?: loginMethod;

  static schema = {
    name: "Auth",
    properties: {
      _id: "string",
      email: "string",
      loginMethod: "string",
    },
    primaryKey: "_id",
  };
}
