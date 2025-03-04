import { Controller, Get, Render, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("intro")
  renderIntroPage() {
    return {
      title: "Tafakkur arenasi",
    };
  }

  @Get("/main")
  @Render("main")
  renderMainPage(@Req() req: Request) {
    return {
      title: "Asosiy sahifaga xush kelibsiz!",
    };
  }

  @Get("/math")
  @Render("search")
  renderMathPage() {
    return {
      title: "Matematika",
    };
  }
}
