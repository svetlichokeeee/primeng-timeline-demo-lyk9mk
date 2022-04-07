import { Component } from "@angular/core";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  events1: any[];

  events2: any[];

  ngOnInit() {
    this.events1 = [
      {
        status: "Поступил запрос на проверку ООО Ромашка",
        date: "15/10/2020 10:30",
        icon: PrimeIcons.HOME,
        color: "#9C27B0",
        image: "game-controller.jpg"
      },
      {
        status: "Проверка была распредлена на Иванова В.И.",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.EXTERNAL_LINK,
        color: "#673AB7"
      },
      {
        status: "Было направлено письмо на дозапрос документов",
        date: "15/10/2020 16:15",
        icon: PrimeIcons.ENVELOPE,
        color: "#FF9800"
      },
      {
        status: "Проверка была направленна эксперту 1",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.STEP_FORWARD,
        color: "#607D8B"
      },
      {
        status: "Проверка направлена эксперту 2",
        date: "16/10/2020 11:00",
        icon: PrimeIcons.STEP_FORWARD,
        color: "#607D8B"
      },
      {
        status: "Проверка направлена эксперту 3",
        date: "16/10/2020 12:00",
        icon: PrimeIcons.STEP_FORWARD,
        color: "#607D8B"
      },
      {
        status: "Ответ добавлен в КАСУД",
        date: "16/10/2020 17:00",
        icon: PrimeIcons.CHECK,
        color: "#607D8B"
      }
    ];

    this.events2 = ["2020", "2021", "2022", "2023"];
  }
}
