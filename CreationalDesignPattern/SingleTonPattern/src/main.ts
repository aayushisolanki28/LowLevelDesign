import { AppConfig } from "./singleton/AppConfig";

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();

console.log(config1.getApiBaseUrl());
console.log(config1 === config2); // true