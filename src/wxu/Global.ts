import { Module } from "./Module";
import { PackageManager } from "./PackageManager";
import { Process } from "./Process";
import { Pty } from "./Pty";
import { Reflect } from "./Reflect";
import { FileSystem } from "./FileSystem";

export interface Global {
  require(
    module: string
  ): FileSystem | Reflect | Process | Module | PackageManager | Pty | null;
}
