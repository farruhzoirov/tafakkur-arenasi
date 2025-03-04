import { Controller, Get, Req, Res } from "@nestjs/common";
import { log } from "console";
import { Request, Response } from "express";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get("/get-user-by-token")
  async getUserByToken(@Req() req: Request, @Res() res: Response) {
    const token = req.headers?.cookie.split("=")[1];
    if (!token) {
      return res.status(401).send("Token not provided");
    }
    const decoded = await this.userService.getUserByToken(token);
    return res.status(200).send(decoded);
  }
}
