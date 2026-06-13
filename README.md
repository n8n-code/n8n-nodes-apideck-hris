# @n8n-dev/n8n-nodes-apideck-hris

![apideck-hris Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-apideck-hris.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-apideck-hris)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing apideck-hris API integrations by hand.**

Every time you connect n8n to apideck-hris, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to apideck-hris took 5 minutes, not half a day?**

This node gives you **8+ resources** out of the box: **Employees**, **Companies**, **Departments**, **Payrolls**, **Employee Payrolls**, and 3 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-apideck-hris
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-apideck-hris`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **apideck-hris API** → paste your API key
3. Drag the **apideck-hris** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Employees</b> (5 operations)</summary>

- Get List Employees
- Post Create Employee
- Delete Employee
- Get Employee
- Patch Update Employee

</details>

<details>
<summary><b>Companies</b> (5 operations)</summary>

- Get List Companies
- Post Create Company
- Delete Company
- Get Company
- Patch Update Company

</details>

<details>
<summary><b>Departments</b> (5 operations)</summary>

- Get List Departments
- Post Create Department
- Delete Department
- Get Department
- Patch Update Department

</details>

<details>
<summary><b>Payrolls</b> (2 operations)</summary>

- Get List Payroll
- Get Payroll

</details>

<details>
<summary><b>Employee Payrolls</b> (2 operations)</summary>

- Get List Employee Payrolls
- Get Employee Payroll

</details>

<details>
<summary><b>Employee Schedules</b> (1 operations)</summary>

- Get List Employee Schedules

</details>

<details>
<summary><b>Jobs</b> (2 operations)</summary>

- Get List Jobs
- Get One Job

</details>

<details>
<summary><b>Time Off Requests</b> (5 operations)</summary>

- Get List Time Off Requests
- Post Create Time Off Request
- Delete Time Off Request
- Get Time Off Request
- Patch Update Time Off Request

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from apideck-hris docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official apideck-hris OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **apideck-hris** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the apideck-hris API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
