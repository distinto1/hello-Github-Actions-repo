#!/bin/bash

# Simulated deployment script for Node.js app

set -e  # Exit immediately if any command fails

echo "Starting deployment to production..."

# Check if the dist directory exists
if [ ! -d "dist" ]; then
  echo "Error: dist directory not found. Build artifacts missing."
  exit 1
fi

# Print the structure of the dist directory for verification
echo "Contents of dist directory:"
ls -R dist

# Simulate deployment by moving to a temporary location (for demonstration only)
DEPLOY_DIR="/tmp/deployments/node-app-$(date +%Y%m%d%H%M%S)"
mkdir -p $DEPLOY_DIR
cp -r dist/* $DEPLOY_DIR

echo "Deployed build artifacts to: $DEPLOY_DIR"
echo "Deployment complete."