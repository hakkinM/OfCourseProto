import { Module } from "../types/types";

export const testModules: Module[] = [
  {
    moduleID: 123,
    moduleName: 'Matematiikka',
    description: "yes",
  }
];

export const invalidModule: Module = {
  moduleID: -1,
  moduleName: 'Not found',
  description: 'Invalid',
};
