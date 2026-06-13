import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { employeesDescription } from './resources/employees';
import { companiesDescription } from './resources/companies';
import { departmentsDescription } from './resources/departments';
import { payrollsDescription } from './resources/payrolls';
import { employeePayrollsDescription } from './resources/employee-payrolls';
import { employeeSchedulesDescription } from './resources/employee-schedules';
import { jobsDescription } from './resources/jobs';
import { timeOffRequestsDescription } from './resources/time-off-requests';

export class ApideckHris implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apideck Hris',
                name: 'N8nDevApideckHris',
                icon: { light: 'file:./apideck-hris.png', dark: 'file:./apideck-hris.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'HRIS API documentation.',
                defaults: { name: 'Apideck Hris' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApideckHrisApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Employees",
					"value": "Employees",
					"description": ""
				},
				{
					"name": "Companies",
					"value": "Companies",
					"description": ""
				},
				{
					"name": "Departments",
					"value": "Departments",
					"description": ""
				},
				{
					"name": "Payrolls",
					"value": "Payrolls",
					"description": ""
				},
				{
					"name": "Employee Payrolls",
					"value": "Employee Payrolls",
					"description": ""
				},
				{
					"name": "Employee Schedules",
					"value": "Employee Schedules",
					"description": ""
				},
				{
					"name": "Jobs",
					"value": "Jobs",
					"description": ""
				},
				{
					"name": "Time Off Requests",
					"value": "Time Off Requests",
					"description": ""
				}
			],
			"default": ""
		},
		...employeesDescription,
		...companiesDescription,
		...departmentsDescription,
		...payrollsDescription,
		...employeePayrollsDescription,
		...employeeSchedulesDescription,
		...jobsDescription,
		...timeOffRequestsDescription
                ],
        };
}
