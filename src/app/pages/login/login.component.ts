import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formLocalStorage: string | null;

  constructor(private fb: FormBuilder, private readonly router: Router) {
    this.formLocalStorage = localStorage.getItem("form");
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.value.email && form.value.password === "test01") {
      localStorage.setItem("form", JSON.stringify(form.value));
      this.router.navigate(["task"]);
    } else {
      alert("Usuario Invalido");
    }
  }
}
