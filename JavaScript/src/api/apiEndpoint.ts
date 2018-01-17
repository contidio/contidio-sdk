import {ApiEnvironment} from "./apiEnvironment";

export default class ApiEndpoint {

  readonly endpoint: string;
  readonly port: number;
  readonly isFrontend: boolean;

  constructor(endpoint: string, port: number, isFrontend: boolean) {
    this.endpoint = endpoint;
    this.port = port;
    this.isFrontend = isFrontend;
  }

  getApiEndpointUrl(environment: ApiEnvironment, apiManagement: boolean): string {

    if (apiManagement) {
      switch (environment) {
        case ApiEnvironment.DEVELOPMENT:
          return 'https://' + this.endpoint + '-dev.contidio.com:' + this.port;
        case ApiEnvironment.STAGING:
          return 'https://' + this.endpoint + '-staging.contidio.com:' + this.port;
        case ApiEnvironment.DEMO:
          return 'https://' + this.endpoint + '-demo.contidio.com';
        default:
          return 'https://' + this.endpoint + '.contidio.com';
      }
    }
    else {
      switch (environment) {
        case ApiEnvironment.DEVELOPMENT:
          return 'https://' + this.endpoint + '-dev.contidio.com:' + this.port;
        case ApiEnvironment.STAGING:
          return 'https://' + this.endpoint + '-staging.contidio.com:' + this.port;
        case ApiEnvironment.DEMO:
          return 'https://' + this.endpoint + '-demo.contidio.com';
        default:
          return 'https://' + this.endpoint + '.contidio.com';
      }
    }

  }

}
