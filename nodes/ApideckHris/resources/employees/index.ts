import type { INodeProperties } from 'n8n-workflow';

export const employeesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					]
				}
			},
			"options": [
				{
					"name": "Employees All",
					"value": "Employees All",
					"action": "List Employees",
					"description": "List Employees",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hris/employees"
						}
					}
				},
				{
					"name": "Employees Add",
					"value": "Employees Add",
					"action": "Create Employee",
					"description": "Create Employee",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hris/employees"
						}
					}
				},
				{
					"name": "Employees Delete",
					"value": "Employees Delete",
					"action": "Delete Employee",
					"description": "Delete Employee",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/hris/employees/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Employees One",
					"value": "Employees One",
					"action": "Get Employee",
					"description": "Get Employee",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hris/employees/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Employees Update",
					"value": "Employees Update",
					"action": "Update Employee",
					"description": "Update Employee",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/hris/employees/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /hris/employees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return. Minimum 1, Maximum 200, Default 20",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Apply filters",
			"default": "{\n  \"company_id\": \"1234\",\n  \"department_id\": \"1234\",\n  \"email\": \"elon@tesla.com\",\n  \"employee_number\": \"123456-AB\",\n  \"employment_status\": \"active\",\n  \"first_name\": \"Elon\",\n  \"last_name\": \"Musk\",\n  \"manager_id\": \"1234\",\n  \"title\": \"Manager\"\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Apply sorting",
			"default": "{\n  \"by\": \"created_at\",\n  \"direction\": \"desc\"\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees All"
					]
				}
			}
		},
		{
			"displayName": "POST /hris/employees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"San Francisco\",\n    \"contact_name\": \"Elon Musk\",\n    \"country\": \"US\",\n    \"county\": \"Santa Clara\",\n    \"email\": \"elon@musk.com\",\n    \"fax\": \"122-111-1111\",\n    \"id\": \"123\",\n    \"latitude\": \"40.759211\",\n    \"line1\": \"Main street\",\n    \"line2\": \"apt #\",\n    \"line3\": \"Suite #\",\n    \"line4\": \"delivery instructions\",\n    \"longitude\": \"-73.984638\",\n    \"name\": \"HQ US\",\n    \"phone_number\": \"111-111-1111\",\n    \"postal_code\": \"94104\",\n    \"row_version\": \"1-12345\",\n    \"salutation\": \"Mr\",\n    \"state\": \"CA\",\n    \"street_number\": \"25\",\n    \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n    \"type\": \"primary\",\n    \"website\": \"https://elonmusk.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Birthday",
			"name": "birthday",
			"type": "string",
			"default": "2000-08-12",
			"description": "The date of birth of the person.",
			"routing": {
				"send": {
					"property": "birthday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "string",
			"default": "23456",
			"description": "The unique identifier of the company.",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "company_name",
			"type": "string",
			"default": "SpaceX",
			"description": "The name of the company.",
			"routing": {
				"send": {
					"property": "company_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Compensations",
			"name": "compensations",
			"type": "json",
			"default": "[\n  {\n    \"effective_date\": \"2021-06-11\",\n    \"flsa_status\": \"nonexempt\",\n    \"id\": \"3404301363494309004\",\n    \"job_id\": \"3490439050957906679\",\n    \"payment_unit\": \"hour\",\n    \"rate\": 50\n  }\n]",
			"routing": {
				"send": {
					"property": "compensations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Country Of Birth",
			"name": "country_of_birth",
			"type": "string",
			"default": "US",
			"description": "Country code according to ISO 3166-1 alpha-2.",
			"routing": {
				"send": {
					"property": "country_of_birth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "[\n  {\n    \"description\": \"Employee Level\",\n    \"id\": \"2389328923893298\",\n    \"name\": \"employee_level\",\n    \"value\": \"Uses Salesforce and Marketo\"\n  }\n]",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Deceased On",
			"name": "deceased_on",
			"type": "string",
			"default": "2000-08-12",
			"description": "The date the person deceased.",
			"routing": {
				"send": {
					"property": "deceased_on",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Deleted",
			"name": "deleted",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "deleted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Department",
			"name": "department",
			"type": "string",
			"default": "R&D",
			"description": "The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field.",
			"routing": {
				"send": {
					"property": "department",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Department ID",
			"name": "department_id",
			"type": "string",
			"default": "12345",
			"description": "Unique identifier of the department ID this employee belongs to.",
			"routing": {
				"send": {
					"property": "department_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Department Name",
			"name": "department_name",
			"type": "string",
			"default": "12345",
			"description": "Name of the department this employee belongs to.",
			"routing": {
				"send": {
					"property": "department_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "A description",
			"description": "A description of the object.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Dietary Preference",
			"name": "dietary_preference",
			"type": "string",
			"default": "Veggie",
			"description": "Indicate the employee's dietary preference.",
			"routing": {
				"send": {
					"property": "dietary_preference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Direct Reports",
			"name": "direct_reports",
			"type": "json",
			"default": "[\n  \"a0d636c6-43b3-4bde-8c70-85b707d992f4\",\n  \"a98lfd96-43b3-4bde-8c70-85b707d992e6\"\n]",
			"description": "The direct reports refer to the individuals who report directly to a person in the organizational hierarchy.",
			"routing": {
				"send": {
					"property": "direct_reports",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "display_name",
			"type": "string",
			"default": "Technoking",
			"description": "The name used to display the employee, often a combination of their first and last names.",
			"routing": {
				"send": {
					"property": "display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Division",
			"name": "division",
			"type": "string",
			"default": "Europe",
			"description": "The division the person is currently in. Usually a collection of departments or teams or regions.",
			"routing": {
				"send": {
					"property": "division",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Division ID",
			"name": "division_id",
			"type": "string",
			"default": "12345",
			"description": "Unique identifier of the division this employee belongs to.",
			"routing": {
				"send": {
					"property": "division_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  {\n    \"email\": \"elon@musk.com\",\n    \"id\": \"123\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "emails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Employee Number",
			"name": "employee_number",
			"type": "string",
			"default": "123456-AB",
			"description": "An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.",
			"routing": {
				"send": {
					"property": "employee_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Employment End Date",
			"name": "employment_end_date",
			"type": "string",
			"default": "2028-10-26",
			"description": "An End Date is the date that the employee ended working at the company",
			"routing": {
				"send": {
					"property": "employment_end_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Employment Role",
			"name": "employment_role",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "employment_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Employment Start Date",
			"name": "employment_start_date",
			"type": "string",
			"default": "2021-10-26",
			"description": "A Start Date is the date that the employee started working at the company",
			"routing": {
				"send": {
					"property": "employment_start_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Employment Status",
			"name": "employment_status",
			"type": "options",
			"default": "active",
			"description": "The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				},
				{
					"name": "Terminated",
					"value": "terminated"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "employment_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Elon",
			"description": "The first name of the person.",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Food Allergies",
			"name": "food_allergies",
			"type": "json",
			"default": "[\n  \"No allergies\"\n]",
			"description": "Indicate the employee's food allergies.",
			"routing": {
				"send": {
					"property": "food_allergies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "options",
			"default": "male",
			"description": "The gender represents the gender identity of a person.",
			"options": [
				{
					"name": "Male",
					"value": "male"
				},
				{
					"name": "Female",
					"value": "female"
				},
				{
					"name": "Unisex",
					"value": "unisex"
				},
				{
					"name": "Other",
					"value": "other"
				},
				{
					"name": "Not Specified",
					"value": "not_specified"
				}
			],
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Initials",
			"name": "initials",
			"type": "string",
			"default": "EM",
			"description": "The initials of the person, usually derived from their first, middle, and last names.",
			"routing": {
				"send": {
					"property": "initials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Jobs",
			"name": "jobs",
			"type": "json",
			"default": "[\n  {\n    \"compensation_rate\": 72000,\n    \"currency\": \"USD\",\n    \"employee_id\": \"12345\",\n    \"end_date\": \"2020-08-12\",\n    \"hired_at\": \"2020-08-12\",\n    \"id\": {},\n    \"is_primary\": true,\n    \"location\": {\n      \"city\": \"San Francisco\",\n      \"contact_name\": \"Elon Musk\",\n      \"country\": \"US\",\n      \"county\": \"Santa Clara\",\n      \"email\": \"elon@musk.com\",\n      \"fax\": \"122-111-1111\",\n      \"id\": \"123\",\n      \"latitude\": \"40.759211\",\n      \"line1\": \"Main street\",\n      \"line2\": \"apt #\",\n      \"line3\": \"Suite #\",\n      \"line4\": \"delivery instructions\",\n      \"longitude\": \"-73.984638\",\n      \"name\": \"HQ US\",\n      \"phone_number\": \"111-111-1111\",\n      \"postal_code\": \"94104\",\n      \"row_version\": \"1-12345\",\n      \"salutation\": \"Mr\",\n      \"state\": \"CA\",\n      \"street_number\": \"25\",\n      \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n      \"type\": \"primary\",\n      \"website\": \"https://elonmusk.com\"\n    },\n    \"payment_unit\": \"year\",\n    \"role\": \"Sales\",\n    \"start_date\": \"2020-08-12\",\n    \"title\": \"CEO\"\n  }\n]",
			"routing": {
				"send": {
					"property": "jobs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Languages",
			"name": "languages",
			"type": "json",
			"default": "[\n  \"EN\"\n]",
			"routing": {
				"send": {
					"property": "languages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Musk",
			"description": "The last name of the person.",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Leaving Reason",
			"name": "leaving_reason",
			"type": "options",
			"default": "resigned",
			"description": "The reason because the employment ended.",
			"options": [
				{
					"name": "Dismissed",
					"value": "dismissed"
				},
				{
					"name": "Resigned",
					"value": "resigned"
				},
				{
					"name": "Redundancy",
					"value": "redundancy"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "leaving_reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Manager",
			"name": "manager",
			"type": "json",
			"default": "{\n  \"email\": \"elon@musk.com\",\n  \"employment_status\": \"active\",\n  \"first_name\": \"Elon\",\n  \"id\": \"12345\",\n  \"last_name\": \"Musk\",\n  \"name\": \"Elon Musk\"\n}",
			"routing": {
				"send": {
					"property": "manager",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Marital Status",
			"name": "marital_status",
			"type": "string",
			"default": "married",
			"description": "The marital status of the employee.",
			"routing": {
				"send": {
					"property": "marital_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middle_name",
			"type": "string",
			"default": "D.",
			"description": "Middle name of the person.",
			"routing": {
				"send": {
					"property": "middle_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Nationalities",
			"name": "nationalities",
			"type": "json",
			"default": "[\n  \"US\"\n]",
			"routing": {
				"send": {
					"property": "nationalities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Partner",
			"name": "partner",
			"type": "json",
			"default": "{\n  \"birthday\": \"2000-08-12\",\n  \"deceased_on\": \"2000-08-12\",\n  \"first_name\": \"Elon\",\n  \"gender\": \"male\",\n  \"id\": \"12345\",\n  \"initials\": \"EM\",\n  \"last_name\": \"Musk\",\n  \"middle_name\": \"D.\"\n}",
			"routing": {
				"send": {
					"property": "partner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"area_code\": \"323\",\n    \"country_code\": \"1\",\n    \"extension\": \"105\",\n    \"id\": \"12345\",\n    \"number\": \"111-111-1111\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Photo URL",
			"name": "photo_url",
			"type": "string",
			"default": "https://unavatar.io/elon-musk",
			"description": "The URL of the photo of a person.",
			"routing": {
				"send": {
					"property": "photo_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Preferred Language",
			"name": "preferred_language",
			"type": "string",
			"default": "EN",
			"description": "language code according to ISO 639-1. For the United States - EN",
			"routing": {
				"send": {
					"property": "preferred_language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Preferred Name",
			"name": "preferred_name",
			"type": "string",
			"default": "Elon Musk",
			"description": "The name the employee prefers to be addressed by, which may be different from their legal name.",
			"routing": {
				"send": {
					"property": "preferred_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Pronouns",
			"name": "pronouns",
			"type": "string",
			"default": "she,her",
			"description": "The preferred pronouns of the person.",
			"routing": {
				"send": {
					"property": "pronouns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Record URL",
			"name": "record_url",
			"type": "string",
			"default": "https://app.intercom.io/contacts/12345",
			"routing": {
				"send": {
					"property": "record_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Row Version",
			"name": "row_version",
			"type": "string",
			"default": "1-12345",
			"description": "A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.",
			"routing": {
				"send": {
					"property": "row_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Salutation",
			"name": "salutation",
			"type": "string",
			"default": "Mr",
			"description": "A formal salutation for the person. For example, 'Mr', 'Mrs'",
			"routing": {
				"send": {
					"property": "salutation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Social Links",
			"name": "social_links",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"type\": \"twitter\",\n    \"url\": \"https://www.twitter.com/apideck-io\"\n  }\n]",
			"routing": {
				"send": {
					"property": "social_links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Social Security Number",
			"name": "social_security_number",
			"type": "string",
			"default": "123456789",
			"description": "A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.",
			"routing": {
				"send": {
					"property": "social_security_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "lever",
			"description": "When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "source_id",
			"type": "string",
			"default": "12345",
			"description": "Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).",
			"routing": {
				"send": {
					"property": "source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"New\"\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Tax Code",
			"name": "tax_code",
			"type": "string",
			"default": "1111",
			"routing": {
				"send": {
					"property": "tax_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Tax ID",
			"name": "tax_id",
			"type": "string",
			"default": "234-32-0000",
			"routing": {
				"send": {
					"property": "tax_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Team",
			"name": "team",
			"type": "json",
			"default": "{\n  \"id\": \"1234\",\n  \"name\": \"Full Stack Engineers\"\n}",
			"description": "The team the person is currently in.",
			"routing": {
				"send": {
					"property": "team",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Timezone",
			"name": "timezone",
			"type": "string",
			"default": "Europe/London",
			"description": "The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.",
			"routing": {
				"send": {
					"property": "timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "CEO",
			"description": "The job title of the person.",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"description": "The user who last updated the object.",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "Works Remote",
			"name": "works_remote",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the employee works from a remote location.",
			"routing": {
				"send": {
					"property": "works_remote",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Add"
					]
				}
			}
		},
		{
			"displayName": "DELETE /hris/employees/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Delete"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Delete"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Delete"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /hris/employees/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees One"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees One"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees One"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees One"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees One"
					]
				}
			}
		},
		{
			"displayName": "PATCH /hris/employees/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"type": "json",
			"default": "[\n  {\n    \"city\": \"San Francisco\",\n    \"contact_name\": \"Elon Musk\",\n    \"country\": \"US\",\n    \"county\": \"Santa Clara\",\n    \"email\": \"elon@musk.com\",\n    \"fax\": \"122-111-1111\",\n    \"id\": \"123\",\n    \"latitude\": \"40.759211\",\n    \"line1\": \"Main street\",\n    \"line2\": \"apt #\",\n    \"line3\": \"Suite #\",\n    \"line4\": \"delivery instructions\",\n    \"longitude\": \"-73.984638\",\n    \"name\": \"HQ US\",\n    \"phone_number\": \"111-111-1111\",\n    \"postal_code\": \"94104\",\n    \"row_version\": \"1-12345\",\n    \"salutation\": \"Mr\",\n    \"state\": \"CA\",\n    \"street_number\": \"25\",\n    \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n    \"type\": \"primary\",\n    \"website\": \"https://elonmusk.com\"\n  }\n]",
			"routing": {
				"send": {
					"property": "addresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Birthday",
			"name": "birthday",
			"type": "string",
			"default": "2000-08-12",
			"description": "The date of birth of the person.",
			"routing": {
				"send": {
					"property": "birthday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "company_id",
			"type": "string",
			"default": "23456",
			"description": "The unique identifier of the company.",
			"routing": {
				"send": {
					"property": "company_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "company_name",
			"type": "string",
			"default": "SpaceX",
			"description": "The name of the company.",
			"routing": {
				"send": {
					"property": "company_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Compensations",
			"name": "compensations",
			"type": "json",
			"default": "[\n  {\n    \"effective_date\": \"2021-06-11\",\n    \"flsa_status\": \"nonexempt\",\n    \"id\": \"3404301363494309004\",\n    \"job_id\": \"3490439050957906679\",\n    \"payment_unit\": \"hour\",\n    \"rate\": 50\n  }\n]",
			"routing": {
				"send": {
					"property": "compensations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Country Of Birth",
			"name": "country_of_birth",
			"type": "string",
			"default": "US",
			"description": "Country code according to ISO 3166-1 alpha-2.",
			"routing": {
				"send": {
					"property": "country_of_birth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "[\n  {\n    \"description\": \"Employee Level\",\n    \"id\": \"2389328923893298\",\n    \"name\": \"employee_level\",\n    \"value\": \"Uses Salesforce and Marketo\"\n  }\n]",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Deceased On",
			"name": "deceased_on",
			"type": "string",
			"default": "2000-08-12",
			"description": "The date the person deceased.",
			"routing": {
				"send": {
					"property": "deceased_on",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Deleted",
			"name": "deleted",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "deleted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Department",
			"name": "department",
			"type": "string",
			"default": "R&D",
			"description": "The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field.",
			"routing": {
				"send": {
					"property": "department",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Department ID",
			"name": "department_id",
			"type": "string",
			"default": "12345",
			"description": "Unique identifier of the department ID this employee belongs to.",
			"routing": {
				"send": {
					"property": "department_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Department Name",
			"name": "department_name",
			"type": "string",
			"default": "12345",
			"description": "Name of the department this employee belongs to.",
			"routing": {
				"send": {
					"property": "department_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "A description",
			"description": "A description of the object.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Dietary Preference",
			"name": "dietary_preference",
			"type": "string",
			"default": "Veggie",
			"description": "Indicate the employee's dietary preference.",
			"routing": {
				"send": {
					"property": "dietary_preference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Direct Reports",
			"name": "direct_reports",
			"type": "json",
			"default": "[\n  \"a0d636c6-43b3-4bde-8c70-85b707d992f4\",\n  \"a98lfd96-43b3-4bde-8c70-85b707d992e6\"\n]",
			"description": "The direct reports refer to the individuals who report directly to a person in the organizational hierarchy.",
			"routing": {
				"send": {
					"property": "direct_reports",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "display_name",
			"type": "string",
			"default": "Technoking",
			"description": "The name used to display the employee, often a combination of their first and last names.",
			"routing": {
				"send": {
					"property": "display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Division",
			"name": "division",
			"type": "string",
			"default": "Europe",
			"description": "The division the person is currently in. Usually a collection of departments or teams or regions.",
			"routing": {
				"send": {
					"property": "division",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Division ID",
			"name": "division_id",
			"type": "string",
			"default": "12345",
			"description": "Unique identifier of the division this employee belongs to.",
			"routing": {
				"send": {
					"property": "division_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Emails",
			"name": "emails",
			"type": "json",
			"default": "[\n  {\n    \"email\": \"elon@musk.com\",\n    \"id\": \"123\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "emails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Employee Number",
			"name": "employee_number",
			"type": "string",
			"default": "123456-AB",
			"description": "An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.",
			"routing": {
				"send": {
					"property": "employee_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Employment End Date",
			"name": "employment_end_date",
			"type": "string",
			"default": "2028-10-26",
			"description": "An End Date is the date that the employee ended working at the company",
			"routing": {
				"send": {
					"property": "employment_end_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Employment Role",
			"name": "employment_role",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "employment_role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Employment Start Date",
			"name": "employment_start_date",
			"type": "string",
			"default": "2021-10-26",
			"description": "A Start Date is the date that the employee started working at the company",
			"routing": {
				"send": {
					"property": "employment_start_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Employment Status",
			"name": "employment_status",
			"type": "options",
			"default": "active",
			"description": "The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				},
				{
					"name": "Terminated",
					"value": "terminated"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "employment_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Elon",
			"description": "The first name of the person.",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Food Allergies",
			"name": "food_allergies",
			"type": "json",
			"default": "[\n  \"No allergies\"\n]",
			"description": "Indicate the employee's food allergies.",
			"routing": {
				"send": {
					"property": "food_allergies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "options",
			"default": "male",
			"description": "The gender represents the gender identity of a person.",
			"options": [
				{
					"name": "Male",
					"value": "male"
				},
				{
					"name": "Female",
					"value": "female"
				},
				{
					"name": "Unisex",
					"value": "unisex"
				},
				{
					"name": "Other",
					"value": "other"
				},
				{
					"name": "Not Specified",
					"value": "not_specified"
				}
			],
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Initials",
			"name": "initials",
			"type": "string",
			"default": "EM",
			"description": "The initials of the person, usually derived from their first, middle, and last names.",
			"routing": {
				"send": {
					"property": "initials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Jobs",
			"name": "jobs",
			"type": "json",
			"default": "[\n  {\n    \"compensation_rate\": 72000,\n    \"currency\": \"USD\",\n    \"employee_id\": \"12345\",\n    \"end_date\": \"2020-08-12\",\n    \"hired_at\": \"2020-08-12\",\n    \"id\": {},\n    \"is_primary\": true,\n    \"location\": {\n      \"city\": \"San Francisco\",\n      \"contact_name\": \"Elon Musk\",\n      \"country\": \"US\",\n      \"county\": \"Santa Clara\",\n      \"email\": \"elon@musk.com\",\n      \"fax\": \"122-111-1111\",\n      \"id\": \"123\",\n      \"latitude\": \"40.759211\",\n      \"line1\": \"Main street\",\n      \"line2\": \"apt #\",\n      \"line3\": \"Suite #\",\n      \"line4\": \"delivery instructions\",\n      \"longitude\": \"-73.984638\",\n      \"name\": \"HQ US\",\n      \"phone_number\": \"111-111-1111\",\n      \"postal_code\": \"94104\",\n      \"row_version\": \"1-12345\",\n      \"salutation\": \"Mr\",\n      \"state\": \"CA\",\n      \"street_number\": \"25\",\n      \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n      \"type\": \"primary\",\n      \"website\": \"https://elonmusk.com\"\n    },\n    \"payment_unit\": \"year\",\n    \"role\": \"Sales\",\n    \"start_date\": \"2020-08-12\",\n    \"title\": \"CEO\"\n  }\n]",
			"routing": {
				"send": {
					"property": "jobs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Languages",
			"name": "languages",
			"type": "json",
			"default": "[\n  \"EN\"\n]",
			"routing": {
				"send": {
					"property": "languages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Musk",
			"description": "The last name of the person.",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Leaving Reason",
			"name": "leaving_reason",
			"type": "options",
			"default": "resigned",
			"description": "The reason because the employment ended.",
			"options": [
				{
					"name": "Dismissed",
					"value": "dismissed"
				},
				{
					"name": "Resigned",
					"value": "resigned"
				},
				{
					"name": "Redundancy",
					"value": "redundancy"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "leaving_reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Manager",
			"name": "manager",
			"type": "json",
			"default": "{\n  \"email\": \"elon@musk.com\",\n  \"employment_status\": \"active\",\n  \"first_name\": \"Elon\",\n  \"id\": \"12345\",\n  \"last_name\": \"Musk\",\n  \"name\": \"Elon Musk\"\n}",
			"routing": {
				"send": {
					"property": "manager",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Marital Status",
			"name": "marital_status",
			"type": "string",
			"default": "married",
			"description": "The marital status of the employee.",
			"routing": {
				"send": {
					"property": "marital_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middle_name",
			"type": "string",
			"default": "D.",
			"description": "Middle name of the person.",
			"routing": {
				"send": {
					"property": "middle_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Nationalities",
			"name": "nationalities",
			"type": "json",
			"default": "[\n  \"US\"\n]",
			"routing": {
				"send": {
					"property": "nationalities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Partner",
			"name": "partner",
			"type": "json",
			"default": "{\n  \"birthday\": \"2000-08-12\",\n  \"deceased_on\": \"2000-08-12\",\n  \"first_name\": \"Elon\",\n  \"gender\": \"male\",\n  \"id\": \"12345\",\n  \"initials\": \"EM\",\n  \"last_name\": \"Musk\",\n  \"middle_name\": \"D.\"\n}",
			"routing": {
				"send": {
					"property": "partner",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Phone Numbers",
			"name": "phone_numbers",
			"type": "json",
			"default": "[\n  {\n    \"area_code\": \"323\",\n    \"country_code\": \"1\",\n    \"extension\": \"105\",\n    \"id\": \"12345\",\n    \"number\": \"111-111-1111\",\n    \"type\": \"primary\"\n  }\n]",
			"routing": {
				"send": {
					"property": "phone_numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Photo URL",
			"name": "photo_url",
			"type": "string",
			"default": "https://unavatar.io/elon-musk",
			"description": "The URL of the photo of a person.",
			"routing": {
				"send": {
					"property": "photo_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Preferred Language",
			"name": "preferred_language",
			"type": "string",
			"default": "EN",
			"description": "language code according to ISO 639-1. For the United States - EN",
			"routing": {
				"send": {
					"property": "preferred_language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Preferred Name",
			"name": "preferred_name",
			"type": "string",
			"default": "Elon Musk",
			"description": "The name the employee prefers to be addressed by, which may be different from their legal name.",
			"routing": {
				"send": {
					"property": "preferred_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Pronouns",
			"name": "pronouns",
			"type": "string",
			"default": "she,her",
			"description": "The preferred pronouns of the person.",
			"routing": {
				"send": {
					"property": "pronouns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Record URL",
			"name": "record_url",
			"type": "string",
			"default": "https://app.intercom.io/contacts/12345",
			"routing": {
				"send": {
					"property": "record_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Row Version",
			"name": "row_version",
			"type": "string",
			"default": "1-12345",
			"description": "A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.",
			"routing": {
				"send": {
					"property": "row_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Salutation",
			"name": "salutation",
			"type": "string",
			"default": "Mr",
			"description": "A formal salutation for the person. For example, 'Mr', 'Mrs'",
			"routing": {
				"send": {
					"property": "salutation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Social Links",
			"name": "social_links",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"type\": \"twitter\",\n    \"url\": \"https://www.twitter.com/apideck-io\"\n  }\n]",
			"routing": {
				"send": {
					"property": "social_links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Social Security Number",
			"name": "social_security_number",
			"type": "string",
			"default": "123456789",
			"description": "A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.",
			"routing": {
				"send": {
					"property": "social_security_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "lever",
			"description": "When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Source ID",
			"name": "source_id",
			"type": "string",
			"default": "12345",
			"description": "Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).",
			"routing": {
				"send": {
					"property": "source_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"New\"\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Tax Code",
			"name": "tax_code",
			"type": "string",
			"default": "1111",
			"routing": {
				"send": {
					"property": "tax_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Tax ID",
			"name": "tax_id",
			"type": "string",
			"default": "234-32-0000",
			"routing": {
				"send": {
					"property": "tax_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Team",
			"name": "team",
			"type": "json",
			"default": "{\n  \"id\": \"1234\",\n  \"name\": \"Full Stack Engineers\"\n}",
			"description": "The team the person is currently in.",
			"routing": {
				"send": {
					"property": "team",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Timezone",
			"name": "timezone",
			"type": "string",
			"default": "Europe/London",
			"description": "The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.",
			"routing": {
				"send": {
					"property": "timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "CEO",
			"description": "The job title of the person.",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"description": "The user who last updated the object.",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "Works Remote",
			"name": "works_remote",
			"type": "boolean",
			"default": true,
			"description": "Indicates if the employee works from a remote location.",
			"routing": {
				"send": {
					"property": "works_remote",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employees"
					],
					"operation": [
						"Employees Update"
					]
				}
			}
		},
];
