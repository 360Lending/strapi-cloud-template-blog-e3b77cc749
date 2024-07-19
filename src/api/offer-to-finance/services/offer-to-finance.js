'use strict';

/**
 * offer-to-finance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::offer-to-finance.offer-to-finance');
