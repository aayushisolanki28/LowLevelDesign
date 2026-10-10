export class AppConfig {
  private static instance: AppConfig;

  private constructor() {
    console.log("AppConfig instance created");
  }

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }

    return AppConfig.instance;
  }

  getApiBaseUrl(): string {
    return "https://api.example.com";
  }
}