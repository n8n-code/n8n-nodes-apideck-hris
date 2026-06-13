import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApideckHrisApi implements ICredentialType {
        name = 'N8nDevApideckHrisApi';

        displayName = 'Apideck Hris API';

        icon: Icon = { light: 'file:../nodes/ApideckHris/apideck-hris.png', dark: 'file:../nodes/ApideckHris/apideck-hris.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://unify.apideck.com',
                        required: true,
                        placeholder: 'https://unify.apideck.com',
                        description: 'The base URL of your Apideck Hris API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
