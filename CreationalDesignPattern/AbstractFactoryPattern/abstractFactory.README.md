02-abstract-factory/
│
└── src/
    │
    ├── interfaces/
    │   ├── Vehicle.ts
    │   └── VehicleFactory.ts
    │
    ├── concrete-car-brands/
    │   ├── BMW.ts
    │   ├── Honda.ts
    │   └── Toyota.ts
    │
    ├── concrete-factories/
    │   ├── BMWFactory.ts
    │   ├── HondaFactory.ts
    │   └── ToyotaFactory.ts
    │
    └── Main.ts

            VehicleFactory
        /      |      \
       ↓       ↓       ↓
    BMWFactory HondaFactory ToyotaFactory
       |          |          |
       ↓          ↓          ↓
      BMW       Honda       Toyota