#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Configuration: Set your .NET output directory here
// Common options:
// - '../YourProject/wwwroot' (for ASP.NET Core)
// - '../YourProject/ClientApp/dist' (for .NET with separate ClientApp)
// - '../YourProject/ClientApp/build' (for Create React App)
const DOTNET_OUTPUT_DIR = process.env.DOTNET_OUTPUT_DIR || '../YourProject/wwwroot'

const SOURCE_DIR = path.join(__dirname, '..', 'dist')
const TARGET_DIR = path.resolve(__dirname, '..', DOTNET_OUTPUT_DIR)

console.log('Copying React build output to .NET project...')
console.log(`Source: ${SOURCE_DIR}`)
console.log(`Target: ${TARGET_DIR}`)

// Check if source directory exists
if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`Error: Source directory does not exist: ${SOURCE_DIR}`)
  console.error('Please run "npm run build" first.')
  process.exit(1)
}

// Create target directory if it doesn't exist
if (!fs.existsSync(TARGET_DIR)) {
  console.log(`Creating target directory: ${TARGET_DIR}`)
  fs.mkdirSync(TARGET_DIR, { recursive: true })
}

// Function to copy directory recursively
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true })
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      )
    })
  } else {
    fs.copyFileSync(src, dest)
  }
}

// Copy all files from dist to target directory
try {
  // Clear existing files in target (optional - comment out if you want to preserve other files)
  if (fs.existsSync(TARGET_DIR)) {
    console.log('Clearing existing files in target directory...')
    fs.readdirSync(TARGET_DIR).forEach((file) => {
      const filePath = path.join(TARGET_DIR, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        fs.rmSync(filePath, { recursive: true, force: true })
      } else {
        fs.unlinkSync(filePath)
      }
    })
  }

  // Copy new files
  copyRecursiveSync(SOURCE_DIR, TARGET_DIR)
  console.log('✓ Successfully copied React build output to .NET project!')
  console.log(`✓ Files are now available at: ${TARGET_DIR}`)
  console.log('  You can now run your .NET app without republishing.')
} catch (error) {
  console.error('Error copying files:', error.message)
  process.exit(1)
}

