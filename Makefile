.PHONY: help install dev dev-all build clean

# Default target
help:
	@echo "Available commands:"
	@echo "  make help          - Show this help message (default)"
	@echo "  make install       - Install dependencies for all apps"
	@echo "  make dev           - Start main app only (port 3000)"
	@echo "  make dev-all       - Start all apps (main + both iframe apps)"
	@echo "  make build         - Build all apps for production"
	@echo "  make clean         - Remove node_modules and build artifacts"

install:
	@echo "Installing dependencies for main app..."
	@npm install
	@echo "Installing dependencies for iframe-app-1..."
	@cd iframe-app-1 && npm install
	@echo "Installing dependencies for iframe-app-2..."
	@cd iframe-app-2 && npm install
	@echo "All dependencies installed!"

dev:
	@echo "Starting main app on http://localhost:3000"
	@echo "Note: Iframe apps need to be running separately on ports 3001 and 3002"
	@npm run dev

dev-all:
	@echo "Starting all apps..."
	@echo "Main app: http://localhost:3000"
	@echo "Iframe app 1: http://localhost:3001"
	@echo "Iframe app 2: http://localhost:3002"
	@echo ""
	@echo "Press Ctrl+C to stop all servers"
	@npm run dev & \
	cd iframe-app-1 && npm run dev & \
	cd iframe-app-2 && npm run dev & \
	wait

build:
	@echo "Building main app..."
	@npm run build
	@echo "Building iframe-app-1..."
	@cd iframe-app-1 && npm run build
	@echo "Building iframe-app-2..."
	@cd iframe-app-2 && npm run build
	@echo "All apps built!"

clean:
	@echo "Cleaning up..."
	@rm -rf node_modules
	@rm -rf dist
	@cd iframe-app-1 && rm -rf node_modules dist
	@cd iframe-app-2 && rm -rf node_modules dist
	@echo "Clean complete!"

