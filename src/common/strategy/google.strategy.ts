import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";

import { Strategy, VerifyCallback } from "passport-google-oauth2";
import { IJwtPayload } from "../interface/jsonwebtoken";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get("ENV").GOOGLE_CLIENT_ID,
      clientSecret: configService.get("ENV").GOOGLE_CLIENT_SECRET,
      callbackURL: configService.get("ENV").GOOGLE_CALLBACK_URL,
      scope: ["profile", "email"],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback
  ): Promise<any> {
    const { name, emails, photos } = profile;

    const user: IJwtPayload = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      image: photos[0].value,
    };

    done(null, user);
  }
}
