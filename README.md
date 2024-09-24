# Shared Node App

This is a Node.js application that is currently deployed on a DigitalOcean droplet. The app is automated using GitHub Actions, which allows for continuous integration and deployment.

## Current Domain

The only domain currently in use for this application is:

**[365ects.com](http://365ects.com)**

All updates made to this repository will automatically be deployed to this domain via the GitHub Actions workflow.

## Deployment Process

The deployment process is automated using GitHub Actions:
- When code is pushed to the `main` branch, the app is automatically deployed to the server at `365ects.com`.
- GitHub Actions connects to the DigitalOcean droplet via SSH and deploys the latest version of the code.

## Setup Instructions

If you would like to run this project locally or deploy it elsewhere, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
