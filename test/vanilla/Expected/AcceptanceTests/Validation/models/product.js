/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The product documentation.
 *
 */
class Product {
  /**
   * Create a Product.
   * @member {array} [displayNames] Non required array of unique items from 0
   * to 6 elements.
   * @member {number} [capacity] Non required int betwen 0 and 100 exclusive.
   * @member {string} [image] Image URL representing the product.
   * @member {object} child
   * @member {number} [child.count] Count
   * @member {string} [constStringAsEnum] Constant string as Enum. Possible
   * values include: 'constant_string_as_enum'
   */
  constructor() {
  }

  /**
   * Defines the metadata of Product
   *
   * @returns {object} metadata of Product
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Product',
      type: {
        name: 'Composite',
        className: 'Product',
        modelProperties: {
          displayNames: {
            required: false,
            serializedName: 'display_names',
            constraints: {
              MaxItems: 6,
              MinItems: 0,
              UniqueItems: true
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          capacity: {
            required: false,
            serializedName: 'capacity',
            constraints: {
              ExclusiveMaximum: 100,
              ExclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          image: {
            required: false,
            serializedName: 'image',
            constraints: {
              Pattern: 'http://\w+'
            },
            type: {
              name: 'String'
            }
          },
          child: {
            required: true,
            serializedName: 'child',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'ChildProduct'
            }
          },
          constChild: {
            required: true,
            isConstant: true,
            serializedName: 'constChild',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'ConstantProduct'
            }
          },
          constInt: {
            required: true,
            isConstant: true,
            serializedName: 'constInt',
            defaultValue: 0,
            type: {
              name: 'Number'
            }
          },
          constString: {
            required: true,
            isConstant: true,
            serializedName: 'constString',
            defaultValue: 'constant',
            type: {
              name: 'String'
            }
          },
          constStringAsEnum: {
            required: false,
            serializedName: 'constStringAsEnum',
            type: {
              name: 'Enum',
              allowedValues: [ 'constant_string_as_enum' ]
            }
          }
        }
      }
    };
  }
}

module.exports = Product;
