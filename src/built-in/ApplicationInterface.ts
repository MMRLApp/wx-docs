import { WXApp } from "./WXApp";

export interface ApplicationInterface {
  exit(): void;
  setRefreshing(state: boolean): void
  getCurrentRootManager(): WXApp;
  getCurrentApplication(): WXApp;
  getApplication(packageName: string): WXApp;
}
