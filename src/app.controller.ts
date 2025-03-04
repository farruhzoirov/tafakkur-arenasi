import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";

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
  renderMainPage() {
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
