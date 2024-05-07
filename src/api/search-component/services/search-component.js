'use strict';

/**
 * search-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::search-component.search-component');
