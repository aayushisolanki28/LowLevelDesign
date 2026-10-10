                 Main.ts
                    |
                    ↓
           AppConfig.getInstance()
                    |
                    ↓
           Is instance created?
               /         \
             No           Yes
             |             |
             ↓             |
       Create instance     |
             |             |
             └──────┬──────┘
                    ↓
           Return same instance
                    |
          ┌─────────┼─────────┐
          ↓         ↓         ↓
       Service A Service B Service C
          |         |         |
          └─────────┼─────────┘
                    ↓
            Shared AppConfig

            Singleton controls how many instances can be created; Dependency Injection controls how dependencies are provided