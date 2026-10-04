                  index.ts
                     |
                     ↓
          TransportationService
                     |
                     ↓
              VehicleFactory
                     |
          ┌──────────┼──────────┐
          ↓          ↓          ↓
         Car        Bike       Truck
          ↑          ↑          ↑
          └──────────┴──────────┘
                     |
                  Vehicle
                 (contract)