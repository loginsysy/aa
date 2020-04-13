import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  findProfileInfo() {
    throw new Error("Method not implemented.");
  }
  findUser() {
    throw new Error("Method not implemented.");
  }
  replaceUser(_username: string) {
    throw new Error("Method not implemented.");
  }
  findProfile(_username: string) {
    throw new Error("Method not implemented.");
  }
  findProfileRepos() {
    throw new Error("Method not implemented.");
  }
  private username: string;
  private client_id = "5f4da28b1e81e278de4f114db5a503940d25d4e3";
  private client_secret = "5f4da28b1e81e278de4f114db5a503940d25d4e3";

  constructor(private http: HttpClient) {
    console.log("The service is ready");
    this.username = "Antonykirunyu";
  }

  getProfileInfo() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }

  getProfileRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }

  updateProfile(username: string) {
    this.username = username;
  }
}