/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const ServiceClient = msRestAzure.AzureServiceClient;

const models = require('./models');
const operations = require('./operations');


/** Class representing a AutoRestParameterFlattening. */
class AutoRestParameterFlattening extends ServiceClient {
  /**
   * Create a AutoRestParameterFlattening.
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   */
  constructor(credentials, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost:3000';
    }
    this.credentials = credentials;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.availabilitySets = new operations.AvailabilitySets(this);
    this.models = models;
    msRest.addSerializationMixin(this);
  }

}

module.exports = AutoRestParameterFlattening;
module.exports['default'] = AutoRestParameterFlattening;
module.exports.AutoRestParameterFlattening = AutoRestParameterFlattening;
module.exports.AutoRestParameterFlatteningModels = models;
