# GitHub Actions Demo

This is a simple demo project to showcase GitHub Actions CI/CD capabilities. The project contains:

- A simple `sum` function in `index.js`
- Jest tests in `index.test.js`
- A GitHub Actions workflow in `.github/workflows/ci.yml`

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```

## GitHub Actions Workflow

The workflow is configured to:
- Run on every push to main branch
- Run on every pull request to main branch
- Set up Node.js environment
- Install dependencies
- Run tests

## Demo Steps

1. Push a change that passes tests
2. Push a change that fails tests
3. Observe the GitHub Actions workflow execution # github-actions-demo
