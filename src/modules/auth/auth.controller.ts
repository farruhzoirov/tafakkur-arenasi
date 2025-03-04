import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { GoogleAuthGuard } from "src/common/guards/google-auth.guard";

@Controller("auth")
export class AuthController {
  @Get("google")
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    // TODO
  }

  @Get("google/callback")
  @UseGuards(GoogleAuthGuard)
  async googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    console.log("User", req.user);
    res.redirect("/main");
  }
}
