# ${{ values.name }}

${{ values.description }}

## Tech Stack

- Node.js 18+
- Express.js
- TypeScript
- Jest (testing)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

The API will be available at `http://localhost:${{ values.port }}`

## API Endpoints

### Service Information
```
GET /
```

Returns service information and available endpoints.

### Health Check
```
GET /health
```

Returns service health status.

### Get Items
```
GET /api/items
```

Returns a list of items.

### Create Item
```
POST /api/items
Content-Type: application/json

{
  "name": "Item name",
  "description": "Item description"
}
```

Creates a new item.

## Development
```bash
# Run in development mode with hot reload
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## Docker
```bash
# Build image
docker build -t ${{ values.name }} .

# Run container
docker run -p ${{ values.port }}:${{ values.port }} ${{ values.name }}
```

## Environment Variables

- `PORT` - Server port (default: ${{ values.port }})
- `NODE_ENV` - Environment (development/production)

## Project Structure
```
├── src/
│   ├── index.ts       # Main application file
│   └── routes.ts      # API routes
├── dist/              # Compiled JavaScript (generated)
├── Dockerfile         # Docker configuration
├── package.json       # Dependencies
└── tsconfig.json      # TypeScript configuration
```

## Owner

${{ values.owner }}
