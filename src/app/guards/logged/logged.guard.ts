import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoggedGuard implements CanActivate {
  isLogged: string | null;

  public constructor(private readonly router: Router) {
    this.isLogged = localStorage.getItem("form");
  }

  public canActivate(): boolean {
    if (this.isLogged) {
      return true;
    }
    this.router.navigate(["login"]);
    alert("Acceso denegado");
    return false;
  }
}
