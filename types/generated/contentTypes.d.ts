import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
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
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
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
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
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
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
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
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
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
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
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
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
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
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
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
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
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
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: 'About';
    description: 'Write about yourself and the content you create';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String;
    blocks: Attribute.DynamicZone<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    >;
    description: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'blog-engagement';
    pluralName: 'blog-engagements';
    displayName: 'Blog Engagement';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Attribute.String;
    body: Attribute.Blocks;
    button_text: Attribute.String;
    button_url: Attribute.String;
    is_active: Attribute.Boolean & Attribute.DefaultTo<true>;
    slug: Attribute.UID & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-engagement.blog-engagement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'blog-post';
    pluralName: 'blog-posts';
    displayName: 'Blog Post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    author: Attribute.String & Attribute.Required;
    body: Attribute.Blocks & Attribute.Required;
    slug: Attribute.UID<'api::blog-post.blog-post', 'title'> &
      Attribute.Required;
    hero_image: Attribute.Media & Attribute.Required;
    tags: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToMany',
      'api::tag.tag'
    >;
    isFeatureArticle: Attribute.Boolean & Attribute.DefaultTo<false>;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'blog-schedule-call';
    pluralName: 'blog-schedule-calls';
    displayName: 'Blog Schedule Call';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Attribute.String;
    body: Attribute.Blocks;
    button_text: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-schedule-call.blog-schedule-call',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'calculator';
    pluralName: 'calculators';
    displayName: 'Calculator';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    instruction: Attribute.String;
    text_fields: Attribute.Component<'calculator.calculator-text-field', true>;
    total_labels: Attribute.Component<
      'calculator.calculator-total-label',
      true
    >;
    variables: Attribute.Component<'calculator.calculator-variables', true>;
    calculator: Attribute.UID;
    selection_fields: Attribute.Component<'calculator.selection-fields', true>;
    headers: Attribute.Component<'calculator.headers', true>;
    notes: Attribute.Component<'calculator.notes', true>;
    redirect_url: Attribute.String;
    error_messages: Attribute.Component<'calculator.error-messages', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::calculator.calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::calculator.calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCreditSummaryCreditSummary extends Schema.CollectionType {
  collectionName: 'credit_summaries';
  info: {
    singularName: 'credit-summary';
    pluralName: 'credit-summaries';
    displayName: 'Credit Summary';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    greeting: Attribute.String;
    welcome_text: Attribute.String;
    credit_score_description: Attribute.Blocks;
    credit_score_helper: Attribute.Component<'credit-summary.credit-score-helper'>;
    credit_summary_page: Attribute.Component<'credit-summary.credit-summary-page'>;
    current_analysis_solutions: Attribute.Component<'credit-summary.current-analysis-and-solutions-page'>;
    order_appraisal: Attribute.Component<'credit-summary.order-appraisal'>;
    slug: Attribute.UID;
    credit_score_disclaimer: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::credit-summary.credit-summary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::credit-summary.credit-summary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGeoLandingGeoLanding extends Schema.SingleType {
  collectionName: 'geo_landings';
  info: {
    singularName: 'geo-landing';
    pluralName: 'geo-landings';
    displayName: 'Geo Landing';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    locations: Attribute.Component<'locations.location', true>;
    hero_header: Attribute.String;
    hero_sub_header: Attribute.String;
    hero_underlined_text: Attribute.String;
    hero_bullet_point_1: Attribute.String;
    hero_bullet_point_2: Attribute.String;
    hero_bullet_point_3: Attribute.String;
    hero_button_text: Attribute.String;
    hero_fine_print: Attribute.String;
    hero_image_alt: Attribute.String;
    why_header: Attribute.String;
    why_description: Attribute.String;
    why_bullet_point_1_label: Attribute.String;
    why_bullet_point_1_text: Attribute.String;
    why_bullet_point_2_label: Attribute.String;
    why_bullet_point_2_text: Attribute.String;
    why_bullet_point_3_label: Attribute.String;
    why_bullet_point_3_text: Attribute.String;
    why_bullet_point_4_label: Attribute.String;
    why_bullet_point_4_text: Attribute.String;
    why_cta: Attribute.String;
    why_button_text: Attribute.String;
    social_header: Attribute.String;
    social_description: Attribute.String;
    social_reason_1_label: Attribute.String;
    social_reason_1_text: Attribute.String;
    social_reason_2_label: Attribute.String;
    social_reason_2_text: Attribute.String;
    social_reason_3_label: Attribute.String;
    social_reason_3_text: Attribute.String;
    faq_header: Attribute.String;
    faq_sub_header: Attribute.String;
    faq_list_items: Attribute.Component<'support.faq-list-items', true>;
    services_header: Attribute.String;
    services_description: Attribute.String;
    services_card_1_label: Attribute.String;
    services_card_1_text: Attribute.String;
    services_card_1_link: Attribute.String;
    services_card_2_label: Attribute.String;
    services_card_2_text: Attribute.String;
    services_card_2_link: Attribute.String;
    services_card_3_label: Attribute.String;
    services_card_3_text: Attribute.String;
    services_card_3_link: Attribute.String;
    services_card_4_label: Attribute.String;
    services_card_4_text: Attribute.String;
    services_card_4_link: Attribute.String;
    services_card_5_label: Attribute.String;
    services_card_5_text: Attribute.String;
    services_card_5_link: Attribute.String;
    services_card_6_label: Attribute.String;
    services_card_6_text: Attribute.String;
    services_card_6_link: Attribute.String;
    services_card_7_label: Attribute.String;
    services_card_7_text: Attribute.String;
    services_card_7_link: Attribute.String;
    services_card_8_label: Attribute.String;
    services_card_8_text: Attribute.String;
    services_card_8_link: Attribute.String;
    services_card_9_label: Attribute.String;
    services_card_9_text: Attribute.String;
    services_card_9_link: Attribute.String;
    services_button_text: Attribute.String;
    cta_header: Attribute.String;
    cta_sub_header: Attribute.String;
    cta_button_text: Attribute.String;
    market_header: Attribute.String;
    market_sub_header: Attribute.String;
    market_average_price_title: Attribute.String;
    market_days_on_market_title: Attribute.String;
    market_description_header: Attribute.String;
    market_description_body: Attribute.String;
    market_fine_print_text: Attribute.String;
    market_fine_print_link_text: Attribute.String;
    market_fine_print_link_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::geo-landing.geo-landing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::geo-landing.geo-landing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'Global';
    description: 'Define global settings';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    siteName: Attribute.String & Attribute.Required;
    favicon: Attribute.Media;
    siteDescription: Attribute.Text & Attribute.Required;
    defaultSeo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'goal-selection-page';
    pluralName: 'goal-selection-pages';
    displayName: 'Goal Selection Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    goals: Attribute.Component<'goals.goals', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::goal-selection-page.goal-selection-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'google-review';
    pluralName: 'google-reviews';
    displayName: 'Google Review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    rating: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 5;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::google-review.google-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'Home Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.UID & Attribute.Required;
    above_carousel_header: Attribute.String & Attribute.Required;
    carousel: Attribute.Component<'home.product-description', true> &
      Attribute.Required;
    products_services_section_header: Attribute.String;
    products_services_section_description: Attribute.Text;
    products_services_section_list_items: Attribute.Component<
      'home.products-section-list-items',
      true
    >;
    hero_section_button: Attribute.Component<'home.hero-section-button'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'learn-page';
    pluralName: 'learn-pages';
    displayName: 'Learn Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Attribute.String;
    slug: Attribute.UID;
    subheader: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::learn-page.learn-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'mqls-page';
    pluralName: 'mqls-pages';
    displayName: 'MQLS Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    mqls_page: Attribute.UID;
    education_content: Attribute.Component<'mqls.education'>;
    more_info: Attribute.Component<'mqls.more-info', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mqls-page.mqls-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'navbar';
    pluralName: 'navbars';
    displayName: 'Navbar';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    navbar_menus: Attribute.Component<'navbar-menu.navbar-menu'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'offer-to-finance';
    pluralName: 'offer-to-finances';
    displayName: 'Offer to Finance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    disclaimer: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::offer-to-finance.offer-to-finance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'privacy-policy';
    pluralName: 'privacy-policies';
    displayName: 'Privacy Policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    product: Attribute.UID;
    title_large: Attribute.String;
    title_small: Attribute.String;
    bullet_0: Attribute.String;
    bullet_1: Attribute.String;
    bullet_2: Attribute.String;
    bullet_3: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductPageProductPage extends Schema.CollectionType {
  collectionName: 'product_pages';
  info: {
    singularName: 'product-page';
    pluralName: 'product-pages';
    displayName: 'Product Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header1: Attribute.String & Attribute.Required;
    header2: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    redirect_url: Attribute.String & Attribute.Required;
    product_background_image: Attribute.Media;
    product: Attribute.UID & Attribute.Required;
    product_next_steps: Attribute.Component<'shared.product-next-step'> &
      Attribute.Required;
    product_content: Attribute.Component<'shared.product-question'>;
    product_subheader_content: Attribute.Component<'product.product-subheader-content'>;
    product_service_content: Attribute.Component<'product.product-service-content'>;
    product_calculator_content: Attribute.Component<'product.product-calculator-content'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-page.product-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRatesPageRatesPage extends Schema.CollectionType {
  collectionName: 'rates_pages';
  info: {
    singularName: 'rates-page';
    pluralName: 'rates-pages';
    displayName: 'Rates Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    rates: Attribute.Component<'rates.rates', true>;
    subheader_1: Attribute.String;
    subheader_1_description: Attribute.Text;
    mortgage_option_list_items: Attribute.Component<
      'rates.mortgage-option-list-items',
      true
    >;
    rate_options: Attribute.Component<'rates.rate-options', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rates-page.rates-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rates-page.rates-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReviewReview extends Schema.CollectionType {
  collectionName: 'reviews';
  info: {
    singularName: 'review';
    pluralName: 'reviews';
    displayName: 'Review';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.String;
    badges: Attribute.Media;
    review_id: Attribute.UID;
    redirect_description: Attribute.String;
    redirect_url: Attribute.String;
    reason_list_items: Attribute.Component<'review.reason-list-items', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'search-component';
    pluralName: 'search-components';
    displayName: 'Search Component';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    search_placeholder: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::search-component.search-component',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'support-page';
    pluralName: 'support-pages';
    displayName: 'Support Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    FAQ_header: Attribute.String;
    FAQ_description: Attribute.Text;
    FAQ_list_items: Attribute.Component<'support.faq-list-items', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::support-page.support-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
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
    singularName: 'tag';
    pluralName: 'tags';
    displayName: 'Tag';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    type: Attribute.Enumeration<['blog_posts']> & Attribute.Required;
    description: Attribute.Text;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiWhyUsPageWhyUsPage extends Schema.CollectionType {
  collectionName: 'why_us_pages';
  info: {
    singularName: 'why-us-page';
    pluralName: 'why-us-pages';
    displayName: 'Why Us Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header_segment_1: Attribute.String;
    header_segment_2: Attribute.String;
    description: Attribute.Blocks;
    reason_list_items: Attribute.Component<'why-us.reason-list-items', true>;
    media_section_header: Attribute.String;
    media_section_description: Attribute.Text;
    footer_header: Attribute.String;
    footer_image: Attribute.Media;
    footer_map: Attribute.Media;
    hero_redirect_url: Attribute.String;
    footer_description: Attribute.String;
    media_section_list_items: Attribute.Component<
      'why-us.media-section-list-items',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::why-us-page.why-us-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::why-us-page.why-us-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
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
      'api::product.product': ApiProductProduct;
      'api::product-page.product-page': ApiProductPageProductPage;
      'api::rates-page.rates-page': ApiRatesPageRatesPage;
      'api::review.review': ApiReviewReview;
      'api::search-component.search-component': ApiSearchComponentSearchComponent;
      'api::support-page.support-page': ApiSupportPageSupportPage;
      'api::tag.tag': ApiTagTag;
      'api::why-us-page.why-us-page': ApiWhyUsPageWhyUsPage;
    }
  }
}
