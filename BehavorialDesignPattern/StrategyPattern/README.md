04-strategy/
│
└── src/
    │
    ├── interfaces/
    │   └── CompressionStrategy.ts
    │
    ├── concrete-strategies/
    │   ├── ZipCompression.ts
    │   ├── RarCompression.ts
    │   └── GzipCompression.ts
    │
    ├── services/
    │   └── FileCompressor.ts
    │
    └── Main.ts


                     Main.ts
                    |
                    ↓
              FileCompressor
                    |
                    ↓
           CompressionStrategy
              /      |      \
             ↓       ↓       ↓
          ZIP      RAR      GZIP
        Strategy  Strategy  Strategy