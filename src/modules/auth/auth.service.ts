import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import * as jwt from "jsonwebtoken";
import { IJwtPayload } from "../../common/interface/jsonwebtoken";
import { User, UserDocument } from "src/common/schemas/user.schema";

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  generateToken(payload: IJwtPayload): string {
    return jwt.sign(payload, this.configService.get("ENV").JWT_SECRET_KEY, {
      expiresIn: "1w",
    });
  }

  async signInWithGoogle(user: IJwtPayload): Promise<string> {
    const findUser = await this.userModel.findOne({ email: user.email });
    if (!findUser) {
      const newUser = new this.userModel({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
      });
      await newUser.save();
      return this.generateToken(user);
    }

    return this.generateToken({
      email: findUser.email,
      firstName: findUser.firstName,
      lastName: findUser.lastName,
      image: findUser.image,
    });
  }
}
