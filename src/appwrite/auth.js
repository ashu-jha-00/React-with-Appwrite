import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // create another method\\
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw err;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw err;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (e) {
      console.log("Appwrite :: service :: getcurrentUser", e);
    }
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (e) {
      console.log("Appwrite :: Service :: logout ", e);
    }
  }
}

const authService = new AuthService();

export default authService;
