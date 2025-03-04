import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as jwt from "jsonwebtoken";

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}
  async getUserByToken(token: string) {
    try {
      const decoded = jwt.verify(
        token,
        this.configService.get("ENV").JWT_SECRET_KEY
      );
      return decoded;
    } catch (err) {
      throw new Error("Invalid token");
    }
  }
}
