/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


'use strict';
/**
 * Okta Admin Management
 * Allows customers to easily access the Okta Management APIs
 *
 * OpenAPI spec version: 4.0.0
 * Contact: devex-public@okta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.NetworkZone = void 0;
class NetworkZone {
  constructor() {
  }
  static getAttributeTypeMap() {
    return NetworkZone.attributeTypeMap;
  }
}
exports.NetworkZone = NetworkZone;
NetworkZone.discriminator = undefined;
NetworkZone.attributeTypeMap = [
  {
    'name': 'asns',
    'baseName': 'asns',
    'type': 'Array<string>',
    'format': ''
  },
  {
    'name': 'created',
    'baseName': 'created',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'gateways',
    'baseName': 'gateways',
    'type': 'Array<NetworkZoneAddress>',
    'format': ''
  },
  {
    'name': 'id',
    'baseName': 'id',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'lastUpdated',
    'baseName': 'lastUpdated',
    'type': 'Date',
    'format': 'date-time'
  },
  {
    'name': 'locations',
    'baseName': 'locations',
    'type': 'Array<NetworkZoneLocation>',
    'format': ''
  },
  {
    'name': 'name',
    'baseName': 'name',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'proxies',
    'baseName': 'proxies',
    'type': 'Array<NetworkZoneAddress>',
    'format': ''
  },
  {
    'name': 'proxyType',
    'baseName': 'proxyType',
    'type': 'string',
    'format': ''
  },
  {
    'name': 'status',
    'baseName': 'status',
    'type': 'NetworkZoneStatus',
    'format': ''
  },
  {
    'name': 'system',
    'baseName': 'system',
    'type': 'boolean',
    'format': ''
  },
  {
    'name': 'type',
    'baseName': 'type',
    'type': 'NetworkZoneType',
    'format': ''
  },
  {
    'name': 'usage',
    'baseName': 'usage',
    'type': 'NetworkZoneUsage',
    'format': ''
  },
  {
    'name': '_links',
    'baseName': '_links',
    'type': '{ [key: string]: any; }',
    'format': ''
  }
];