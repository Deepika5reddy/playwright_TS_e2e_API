# Playwright End-to-End & API Testing with TypeScript

This repository contains a comprehensive test automation framework leveraging [Playwright](https://playwright.dev/) with TypeScript. It supports both end-to-end (E2E) UI tests and API testing, structured for scalability, maintainability, and CI/CD integration.

---

## 📁 Project Structure

```
├── env/                     # Environment-specific configurations
├── page-object/             # Page Object Model (POM) classes
├── tests/
│   ├── api/                 # API test suites
│   └── e2e/                 # End-to-End UI test suites
├── utils/                   # Utility functions and helpers
├── playwright.config.ts     # Global Playwright configuration
├── playwright.service.config.ts  # Service-specific Playwright config
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Deepika5reddy/playwright_TS_e2e_API.git
cd playwright_TS_e2e_API
```

2. **Install dependencies:**

```bash
npm install
```

3. **Install Playwright browsers:**

```bash
npx playwright install
```

---

## 🧪 Running Tests

### Set Environment Variable

Before running tests, set the environment variable `ENV` to specify the target environment (e.g., `local`, `staging`, `production`).

For **Windows (PowerShell):**

```bash
$env:ENV="local"
```

For **Unix/Linux/macOS:**

```bash
export ENV=local
```

### Run End-to-End (E2E) Tests

Execute all E2E tests:

```bash
npx playwright test tests/e2e
```

Run a specific E2E test with debug mode:

```bash
npx playwright test tests/e2e/ValidateLogin.spec.ts --debug
```

### Run API Tests

Execute all API tests:

```bash
npx playwright test tests/api
```

Run a specific API test:

```bash
npx playwright test tests/api/ApiTest.spec.ts
```

### Run Tests via NPM Scripts

You can also run tests using predefined npm scripts:

```bash
npm run tests:api
```

---

## 🧰 Code Generation

Leverage Playwright's code generation feature to create test scripts by recording user actions:

```bash
npx playwright codegen https://ecommerce-playground.lambdatest.io/index.php?route=account/login
```

This will open a browser window and generate code based on your interactions.

---

## 📊 Reporting

After test execution, Playwright generates an HTML report by default. To view the report:

```bash
npx playwright show-report
```

The report provides detailed insights into test runs, including passed/failed tests, execution time, and more.

---

## 🧱 Built With

- [Playwright](https://playwright.dev/) - End-to-end testing framework
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Node.js](https://nodejs.org/) - JavaScript runtime environment

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
