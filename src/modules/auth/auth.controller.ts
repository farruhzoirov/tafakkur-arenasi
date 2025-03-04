import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { GoogleAuthGuard } from "src/common/guards/google-auth.guard";
import { AuthService } from "./auth.service";
import { IJwtPayload } from "src/common/interface/jsonwebtoken";
import { log } from "console";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("google")
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    // TODO
  }

  @Get("google/callback")
  @UseGuards(GoogleAuthGuard)
  async googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    const user = req.user as IJwtPayload;
    const token = await this.authService.signInWithGoogle(user);
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/main");
  }
}
