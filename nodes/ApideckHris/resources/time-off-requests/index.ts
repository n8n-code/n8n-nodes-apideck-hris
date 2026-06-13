import type { INodeProperties } from 'n8n-workflow';

export const timeOffRequestsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					]
				}
			},
			"options": [
				{
					"name": "Time Off Requests All",
					"value": "Time Off Requests All",
					"action": "List Time Off Requests",
					"description": "List Time Off Requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hris/time-off-requests"
						}
					}
				},
				{
					"name": "Time Off Requests Add",
					"value": "Time Off Requests Add",
					"action": "Create Time Off Request",
					"description": "Create Time Off Request",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hris/time-off-requests"
						}
					}
				},
				{
					"name": "Time Off Requests Delete",
					"value": "Time Off Requests Delete",
					"action": "Delete Time Off Request",
					"description": "Delete Time Off Request",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/hris/time-off-requests/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Time Off Requests One",
					"value": "Time Off Requests One",
					"action": "Get Time Off Request",
					"description": "Get Time Off Request",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hris/time-off-requests/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Time Off Requests Update",
					"value": "Time Off Requests Update",
					"action": "Update Time Off Request",
					"description": "Update Time Off Request",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/hris/time-off-requests/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /hris/time-off-requests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Apply filters",
			"default": "{\n  \"employee_id\": \"1234\",\n  \"end_date\": \"2022-04-21\",\n  \"start_date\": \"2022-04-08\",\n  \"time_off_request_status\": \"approved\"\n}",
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests All"
					]
				}
			}
		},
		{
			"displayName": "POST /hris/time-off-requests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 3.5,
			"description": "The amount of time off requested.",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Approval Date",
			"name": "approval_date",
			"type": "string",
			"default": "2022-03-21",
			"description": "The date the request was approved",
			"routing": {
				"send": {
					"property": "approval_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Enjoying some sun.",
			"description": "Description of the time off request.",
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employee_id",
			"type": "string",
			"default": "12345",
			"description": "ID of the employee",
			"routing": {
				"send": {
					"property": "employee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"type": "string",
			"default": "2022-04-01",
			"description": "The end date of the time off request.",
			"routing": {
				"send": {
					"property": "end_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{\n  \"employee\": \"Relaxing on the beach for a few hours.\",\n  \"manager\": \"Enjoy!\"\n}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Policy ID",
			"name": "policy_id",
			"type": "string",
			"default": "12345",
			"description": "ID of the policy",
			"routing": {
				"send": {
					"property": "policy_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Request Date",
			"name": "request_date",
			"type": "string",
			"default": "2022-03-21",
			"description": "The date the request was made.",
			"routing": {
				"send": {
					"property": "request_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Request Type",
			"name": "request_type",
			"type": "options",
			"default": "vacation",
			"description": "The type of request",
			"options": [
				{
					"name": "Vacation",
					"value": "vacation"
				},
				{
					"name": "Sick",
					"value": "sick"
				},
				{
					"name": "Personal",
					"value": "personal"
				},
				{
					"name": "Jury Duty",
					"value": "jury_duty"
				},
				{
					"name": "Volunteer",
					"value": "volunteer"
				},
				{
					"name": "Bereavement",
					"value": "bereavement"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "request_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"type": "string",
			"default": "2022-04-01",
			"description": "The start date of the time off request.",
			"routing": {
				"send": {
					"property": "start_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "approved",
			"description": "The status of the time off request.",
			"options": [
				{
					"name": "Requested",
					"value": "requested"
				},
				{
					"name": "Approved",
					"value": "approved"
				},
				{
					"name": "Declined",
					"value": "declined"
				},
				{
					"name": "Cancelled",
					"value": "cancelled"
				},
				{
					"name": "Deleted",
					"value": "deleted"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "Units",
			"name": "units",
			"type": "options",
			"default": "hours",
			"description": "The unit of time off requested. Possible values include: `hours`, `days`, or `other`.",
			"options": [
				{
					"name": "Days",
					"value": "days"
				},
				{
					"name": "Hours",
					"value": "hours"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "units",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Add"
					]
				}
			}
		},
		{
			"displayName": "DELETE /hris/time-off-requests/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Delete"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Delete"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Delete"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Delete"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Delete"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Delete"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /hris/time-off-requests/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests One"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests One"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests One"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests One"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests One"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests One"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests One"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests One"
					]
				}
			}
		},
		{
			"displayName": "PATCH /hris/time-off-requests/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 3.5,
			"description": "The amount of time off requested.",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Approval Date",
			"name": "approval_date",
			"type": "string",
			"default": "2022-03-21",
			"description": "The date the request was approved",
			"routing": {
				"send": {
					"property": "approval_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Enjoying some sun.",
			"description": "Description of the time off request.",
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employee_id",
			"type": "string",
			"default": "12345",
			"description": "ID of the employee",
			"routing": {
				"send": {
					"property": "employee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"type": "string",
			"default": "2022-04-01",
			"description": "The end date of the time off request.",
			"routing": {
				"send": {
					"property": "end_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{\n  \"employee\": \"Relaxing on the beach for a few hours.\",\n  \"manager\": \"Enjoy!\"\n}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Policy ID",
			"name": "policy_id",
			"type": "string",
			"default": "12345",
			"description": "ID of the policy",
			"routing": {
				"send": {
					"property": "policy_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Request Date",
			"name": "request_date",
			"type": "string",
			"default": "2022-03-21",
			"description": "The date the request was made.",
			"routing": {
				"send": {
					"property": "request_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Request Type",
			"name": "request_type",
			"type": "options",
			"default": "vacation",
			"description": "The type of request",
			"options": [
				{
					"name": "Vacation",
					"value": "vacation"
				},
				{
					"name": "Sick",
					"value": "sick"
				},
				{
					"name": "Personal",
					"value": "personal"
				},
				{
					"name": "Jury Duty",
					"value": "jury_duty"
				},
				{
					"name": "Volunteer",
					"value": "volunteer"
				},
				{
					"name": "Bereavement",
					"value": "bereavement"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "request_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"type": "string",
			"default": "2022-04-01",
			"description": "The start date of the time off request.",
			"routing": {
				"send": {
					"property": "start_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "approved",
			"description": "The status of the time off request.",
			"options": [
				{
					"name": "Requested",
					"value": "requested"
				},
				{
					"name": "Approved",
					"value": "approved"
				},
				{
					"name": "Declined",
					"value": "declined"
				},
				{
					"name": "Cancelled",
					"value": "cancelled"
				},
				{
					"name": "Deleted",
					"value": "deleted"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
		{
			"displayName": "Units",
			"name": "units",
			"type": "options",
			"default": "hours",
			"description": "The unit of time off requested. Possible values include: `hours`, `days`, or `other`.",
			"options": [
				{
					"name": "Days",
					"value": "days"
				},
				{
					"name": "Hours",
					"value": "hours"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "units",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
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
						"Time Off Requests"
					],
					"operation": [
						"Time Off Requests Update"
					]
				}
			}
		},
];
