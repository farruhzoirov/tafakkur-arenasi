import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";
import { GoogleStrategy } from "./common/strategy/google.strategy";

import googleConfig from "./config/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [googleConfig],
      envFilePath: ".env",
      isGlobal: true,
    }),
    PassportModule.register({ defaultStrategy: "google" }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
