import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    description: 'Write about yourself and the content you create';
    displayName: 'About';
    pluralName: 'abouts';
    singularName: 'about';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    blocks: Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Blocks;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogEngagementBlogEngagement extends Schema.CollectionType {
  collectionName: 'blog_engagements';
  info: {
    description: '';
    displayName: 'Blog Engagement';
    pluralName: 'blog-engagements';
    singularName: 'blog-engagement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    body: Attribute.Blocks;
    button_text: Attribute.String;
    button_url: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-engagement.blog-engagement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    header: Attribute.String;
    is_active: Attribute.Boolean & Attribute.DefaultTo<true>;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-engagement.blog-engagement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogPostBlogPost extends Schema.CollectionType {
  collectionName: 'blog_posts';
  info: {
    description: '';
    displayName: 'Blog Post';
    pluralName: 'blog-posts';
    singularName: 'blog-post';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: Attribute.String & Attribute.Required;
    body: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    hero_image: Attribute.Media<'images'> & Attribute.Required;
    isFeatureArticle: Attribute.Boolean & Attribute.DefaultTo<false>;
    metadataDescription: Attribute.Text;
    metadataTitle: Attribute.String;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID<'api::blog-post.blog-post', 'title'> &
      Attribute.Required;
    tags: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToMany',
      'api::tag.tag'
    >;
    title: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogScheduleCallBlogScheduleCall extends Schema.SingleType {
  collectionName: 'blog_schedule_calls';
  info: {
    displayName: 'Blog Schedule Call';
    pluralName: 'blog-schedule-calls';
    singularName: 'blog-schedule-call';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    body: Attribute.Blocks;
    button_text: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-schedule-call.blog-schedule-call',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    header: Attribute.String;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::blog-schedule-call.blog-schedule-call',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCalculatorCalculator extends Schema.CollectionType {
  collectionName: 'calculators';
  info: {
    description: '';
    displayName: 'Calculator';
    pluralName: 'calculators';
    singularName: 'calculator';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    calculator: Attribute.UID;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::calculator.calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    error_messages: Attribute.Component<'calculator.error-messages', true>;
    headers: Attribute.Component<'calculator.headers', true>;
    instruction: Attribute.String;
    notes: Attribute.Component<'calculator.notes', true>;
    publishedAt: Attribute.DateTime;
    redirect_url: Attribute.String;
    selection_fields: Attribute.Component<'calculator.selection-fields', true>;
    text_fields: Attribute.Component<'calculator.calculator-text-field', true>;
    total_labels: Attribute.Component<
      'calculator.calculator-total-label',
      true
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::calculator.calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    variables: Attribute.Component<'calculator.calculator-variables', true>;
  };
}

export interface ApiCreditSummaryCreditSummary extends Schema.CollectionType {
  collectionName: 'credit_summaries';
  info: {
    description: '';
    displayName: 'Credit Summary';
    pluralName: 'credit-summaries';
    singularName: 'credit-summary';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::credit-summary.credit-summary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    credit_score_description: Attribute.Blocks;
    credit_score_disclaimer: Attribute.Text;
    credit_score_helper: Attribute.Component<'credit-summary.credit-score-helper'>;
    credit_summary_page: Attribute.Component<'credit-summary.credit-summary-page'>;
    current_analysis_solutions: Attribute.Component<'credit-summary.current-analysis-and-solutions-page'>;
    greeting: Attribute.String;
    order_appraisal: Attribute.Component<'credit-summary.order-appraisal'>;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::credit-summary.credit-summary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    welcome_text: Attribute.String;
  };
}

export interface ApiGeoLandingGeoLanding extends Schema.SingleType {
  collectionName: 'geo_landings';
  info: {
    description: 'Geo landing page content and calculator copy';
    displayName: 'Geo Landing';
    pluralName: 'geo-landings';
    singularName: 'geo-landing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    calculator_description: Attribute.String;
    calculator_header: Attribute.String;
    calculator_tabs: Attribute.Component<'rates-v2.calculator-tab', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::geo-landing.geo-landing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    cta_button_text: Attribute.String;
    cta_header: Attribute.String;
    cta_sub_header: Attribute.String;
    faq_header: Attribute.String;
    faq_list_items: Attribute.Component<'support.faq-list-items', true>;
    faq_sub_header: Attribute.String;
    hero_bullet_point_1: Attribute.String;
    hero_bullet_point_2: Attribute.String;
    hero_bullet_point_3: Attribute.String;
    hero_button_text: Attribute.String;
    hero_fine_print: Attribute.String;
    hero_header: Attribute.String;
    hero_image_alt: Attribute.String;
    hero_sub_header: Attribute.String;
    hero_underlined_text: Attribute.String;
    locations: Attribute.Component<'locations.location', true>;
    market_average_price_title: Attribute.String;
    market_days_on_market_title: Attribute.String;
    market_description_header: Attribute.String;
    market_fine_print_link_text: Attribute.String;
    market_fine_print_link_url: Attribute.String;
    market_fine_print_text: Attribute.String;
    market_header: Attribute.String;
    market_sub_header: Attribute.String;
    publishedAt: Attribute.DateTime;
    rates_current_body: Attribute.Blocks;
    rates_current_card_1_label: Attribute.String;
    rates_current_card_1_text: Attribute.String;
    rates_current_card_2_label: Attribute.String;
    rates_current_card_2_text: Attribute.String;
    rates_current_header: Attribute.String;
    rates_header: Attribute.String;
    rates_refinancing_card_1_description: Attribute.Blocks;
    rates_refinancing_card_1_label: Attribute.String;
    rates_refinancing_card_1_rank: Attribute.Enumeration<
      ['none', 'first', 'second']
    > &
      Attribute.DefaultTo<'none'>;
    rates_refinancing_card_1_text: Attribute.String;
    rates_refinancing_card_2_description: Attribute.Blocks;
    rates_refinancing_card_2_label: Attribute.String;
    rates_refinancing_card_2_rank: Attribute.Enumeration<
      ['none', 'first', 'second']
    > &
      Attribute.DefaultTo<'none'>;
    rates_refinancing_card_2_text: Attribute.String;
    rates_refinancing_header: Attribute.String;
    services_button_text: Attribute.String;
    services_card_1_label: Attribute.String;
    services_card_1_link: Attribute.String;
    services_card_1_text: Attribute.String;
    services_card_2_label: Attribute.String;
    services_card_2_link: Attribute.String;
    services_card_2_text: Attribute.String;
    services_card_3_label: Attribute.String;
    services_card_3_link: Attribute.String;
    services_card_3_text: Attribute.String;
    services_card_4_label: Attribute.String;
    services_card_4_link: Attribute.String;
    services_card_4_text: Attribute.String;
    services_card_5_label: Attribute.String;
    services_card_5_link: Attribute.String;
    services_card_5_text: Attribute.String;
    services_card_6_label: Attribute.String;
    services_card_6_link: Attribute.String;
    services_card_6_text: Attribute.String;
    services_card_7_label: Attribute.String;
    services_card_7_link: Attribute.String;
    services_card_7_text: Attribute.String;
    services_card_8_label: Attribute.String;
    services_card_8_link: Attribute.String;
    services_card_8_text: Attribute.String;
    services_card_9_label: Attribute.String;
    services_card_9_link: Attribute.String;
    services_card_9_text: Attribute.String;
    services_description: Attribute.String;
    services_header: Attribute.String;
    social_description: Attribute.String;
    social_header: Attribute.String;
    social_reason_1_label: Attribute.String;
    social_reason_1_text: Attribute.String;
    social_reason_2_label: Attribute.String;
    social_reason_2_text: Attribute.String;
    social_reason_3_label: Attribute.String;
    social_reason_3_text: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::geo-landing.geo-landing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    why_bullet_point_1_label: Attribute.String;
    why_bullet_point_1_text: Attribute.String;
    why_bullet_point_2_label: Attribute.String;
    why_bullet_point_2_text: Attribute.String;
    why_bullet_point_3_label: Attribute.String;
    why_bullet_point_3_text: Attribute.String;
    why_bullet_point_4_label: Attribute.String;
    why_bullet_point_4_text: Attribute.String;
    why_button_text: Attribute.String;
    why_cta: Attribute.String;
    why_description: Attribute.String;
    why_header: Attribute.String;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    description: 'Define global settings';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    defaultSeo: Attribute.Component<'shared.seo'>;
    favicon: Attribute.Media<'images' | 'files' | 'videos'>;
    siteDescription: Attribute.Text & Attribute.Required;
    siteName: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGoalSelectionPageGoalSelectionPage
  extends Schema.CollectionType {
  collectionName: 'goal_selection_pages';
  info: {
    description: '';
    displayName: 'Goal Selection Page';
    pluralName: 'goal-selection-pages';
    singularName: 'goal-selection-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::goal-selection-page.goal-selection-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    goals: Attribute.Component<'goals.goals', true>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::goal-selection-page.goal-selection-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGoogleReviewGoogleReview extends Schema.SingleType {
  collectionName: 'google_reviews';
  info: {
    displayName: 'Google Review';
    pluralName: 'google-reviews';
    singularName: 'google-review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::google-review.google-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    rating: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<4.9>;
    reviewCount: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<812>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::google-review.google-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.CollectionType {
  collectionName: 'home_pages';
  info: {
    description: '';
    displayName: 'Home Page';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    above_carousel_header: Attribute.String & Attribute.Required;
    carousel: Attribute.Component<'home.product-description', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hero_section_button: Attribute.Component<'home.hero-section-button'>;
    products_services_section_description: Attribute.Text;
    products_services_section_header: Attribute.String;
    products_services_section_list_items: Attribute.Component<
      'home.products-section-list-items',
      true
    >;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLearnPageLearnPage extends Schema.CollectionType {
  collectionName: 'learn_pages';
  info: {
    description: '';
    displayName: 'Learn Page';
    pluralName: 'learn-pages';
    singularName: 'learn-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::learn-page.learn-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    header: Attribute.String;
    publishedAt: Attribute.DateTime;
    slug: Attribute.UID;
    subheader: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::learn-page.learn-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMqlsPageMqlsPage extends Schema.CollectionType {
  collectionName: 'mqls_pages';
  info: {
    description: '';
    displayName: 'MQLS Page';
    pluralName: 'mqls-pages';
    singularName: 'mqls-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mqls-page.mqls-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    education_content: Attribute.Component<'mqls.education'>;
    more_info: Attribute.Component<'mqls.more-info', true>;
    mqls_page: Attribute.UID;
    publishedAt: Attribute.DateTime;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::mqls-page.mqls-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNavbarNavbar extends Schema.CollectionType {
  collectionName: 'navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    pluralName: 'navbars';
    singularName: 'navbar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    navbar_menus: Attribute.Component<'navbar-menu.navbar-menu'>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOfferToFinanceOfferToFinance extends Schema.CollectionType {
  collectionName: 'offer_to_finances';
  info: {
    displayName: 'Offer to Finance';
    pluralName: 'offer-to-finances';
    singularName: 'offer-to-finance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::offer-to-finance.offer-to-finance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    disclaimer: Attribute.Text;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::offer-to-finance.offer-to-finance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.CollectionType {
  collectionName: 'privacy_policies';
  info: {
    displayName: 'Privacy Policy';
    pluralName: 'privacy-policies';
    singularName: 'privacy-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductPageProductPage extends Schema.CollectionType {
  collectionName: 'product_pages';
  info: {
    description: '';
    displayName: 'Product Page';
    pluralName: 'product-pages';
    singularName: 'product-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text & Attribute.Required;
    header1: Attribute.String & Attribute.Required;
    header2: Attribute.String & Attribute.Required;
    product: Attribute.UID & Attribute.Required;
    product_background_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    product_calculator_content: Attribute.Component<'product.product-calculator-content'>;
    product_content: Attribute.Component<'shared.product-question'>;
    product_next_steps: Attribute.Component<'shared.product-next-step'> &
      Attribute.Required;
    product_service_content: Attribute.Component<'product.product-service-content'>;
    product_subheader_content: Attribute.Component<'product.product-subheader-content'>;
    publishedAt: Attribute.DateTime;
    redirect_url: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    description: '';
    displayName: 'Product';
    pluralName: 'products';
    singularName: 'product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bullet_0: Attribute.String;
    bullet_1: Attribute.String;
    bullet_2: Attribute.String;
    bullet_3: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    product: Attribute.UID;
    publishedAt: Attribute.DateTime;
    title_large: Attribute.String;
    title_small: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRatesPageRatesPage extends Schema.CollectionType {
  collectionName: 'rates_pages';
  info: {
    description: '';
    displayName: 'Rates Page';
    pluralName: 'rates-pages';
    singularName: 'rates-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rates-page.rates-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    header: Attribute.String;
    mortgage_option_list_items: Attribute.Component<
      'rates.mortgage-option-list-items',
      true
    >;
    publishedAt: Attribute.DateTime;
    rate_options: Attribute.Component<'rates.rate-options', true>;
    rates: Attribute.Component<'rates.rates', true>;
    subheader_1: Attribute.String;
    subheader_1_description: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::rates-page.rates-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRatesV2PageRatesV2Page extends Schema.CollectionType {
  collectionName: 'rates_v2_pages';
  info: {
    description: '';
    displayName: 'Rates v2 Page';
    pluralName: 'rates-v2-pages';
    singularName: 'rates-v2-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    advantage: Attribute.Component<'rates-v2.advantage'>;
    breakdown: Attribute.Component<'rates-v2.breakdown'>;
    cost: Attribute.Component<'rates-v2.cost'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rates-v2-page.rates-v2-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    header: Attribute.String;
    hero_section: Attribute.Component<'rates-v2.hero-section'>;
    personalized_rate: Attribute.Component<'rates-v2.personalized-rate'>;
    publishedAt: Attribute.DateTime;
    rates: Attribute.Component<'rates-v2.rates'>;
    slug: Attribute.UID<'api::rates-v2-page.rates-v2-page', 'header'> &
      Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::rates-v2-page.rates-v2-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    use_cases: Attribute.Component<'rates-v2.use-cases'>;
  };
}

export interface ApiReviewReview extends Schema.CollectionType {
  collectionName: 'reviews';
  info: {
    description: '';
    displayName: 'Review';
    pluralName: 'reviews';
    singularName: 'review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badges: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    header: Attribute.String;
    publishedAt: Attribute.DateTime;
    reason_list_items: Attribute.Component<'review.reason-list-items', true>;
    redirect_description: Attribute.String;
    redirect_url: Attribute.String;
    review_id: Attribute.UID;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSearchComponentSearchComponent
  extends Schema.CollectionType {
  collectionName: 'search_components';
  info: {
    displayName: 'Search Component';
    pluralName: 'search-components';
    singularName: 'search-component';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::search-component.search-component',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    header: Attribute.String;
    publishedAt: Attribute.DateTime;
    search_placeholder: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::search-component.search-component',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSupportPageSupportPage extends Schema.CollectionType {
  collectionName: 'support_pages';
  info: {
    displayName: 'Support Page';
    pluralName: 'support-pages';
    singularName: 'support-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::support-page.support-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    FAQ_description: Attribute.Text;
    FAQ_header: Attribute.String;
    FAQ_list_items: Attribute.Component<'support.faq-list-items', true>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::support-page.support-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags';
  info: {
    description: '';
    displayName: 'Tag';
    pluralName: 'tags';
    singularName: 'tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.Text;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    publishedAt: Attribute.DateTime;
    type: Attribute.Enumeration<['blog_posts']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiWhyUsPageWhyUsPage extends Schema.CollectionType {
  collectionName: 'why_us_pages';
  info: {
    description: '';
    displayName: 'Why Us Page';
    pluralName: 'why-us-pages';
    singularName: 'why-us-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::why-us-page.why-us-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Blocks;
    footer_description: Attribute.String;
    footer_header: Attribute.String;
    footer_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    footer_map: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    header_segment_1: Attribute.String;
    header_segment_2: Attribute.String;
    hero_redirect_url: Attribute.String;
    media_section_description: Attribute.Text;
    media_section_header: Attribute.String;
    media_section_list_items: Attribute.Component<
      'why-us.media-section-list-items',
      true
    >;
    publishedAt: Attribute.DateTime;
    reason_list_items: Attribute.Component<'why-us.reason-list-items', true>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::why-us-page.why-us-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about.about': ApiAboutAbout;
      'api::blog-engagement.blog-engagement': ApiBlogEngagementBlogEngagement;
      'api::blog-post.blog-post': ApiBlogPostBlogPost;
      'api::blog-schedule-call.blog-schedule-call': ApiBlogScheduleCallBlogScheduleCall;
      'api::calculator.calculator': ApiCalculatorCalculator;
      'api::credit-summary.credit-summary': ApiCreditSummaryCreditSummary;
      'api::geo-landing.geo-landing': ApiGeoLandingGeoLanding;
      'api::global.global': ApiGlobalGlobal;
      'api::goal-selection-page.goal-selection-page': ApiGoalSelectionPageGoalSelectionPage;
      'api::google-review.google-review': ApiGoogleReviewGoogleReview;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::learn-page.learn-page': ApiLearnPageLearnPage;
      'api::mqls-page.mqls-page': ApiMqlsPageMqlsPage;
      'api::navbar.navbar': ApiNavbarNavbar;
      'api::offer-to-finance.offer-to-finance': ApiOfferToFinanceOfferToFinance;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::product-page.product-page': ApiProductPageProductPage;
      'api::product.product': ApiProductProduct;
      'api::rates-page.rates-page': ApiRatesPageRatesPage;
      'api::rates-v2-page.rates-v2-page': ApiRatesV2PageRatesV2Page;
      'api::review.review': ApiReviewReview;
      'api::search-component.search-component': ApiSearchComponentSearchComponent;
      'api::support-page.support-page': ApiSupportPageSupportPage;
      'api::tag.tag': ApiTagTag;
      'api::why-us-page.why-us-page': ApiWhyUsPageWhyUsPage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
