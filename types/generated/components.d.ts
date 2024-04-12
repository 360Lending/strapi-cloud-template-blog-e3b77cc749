import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeProductDescription extends Schema.Component {
  collectionName: 'components_products_product_descriptions';
  info: {
    displayName: 'Home Page Carousel';
    description: '';
  };
  attributes: {
    carousel_header_line1: Attribute.String & Attribute.Required;
    carousel_header_line2: Attribute.String & Attribute.Required;
    carousel_subheader: Attribute.String & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedProductBenefits extends Schema.Component {
  collectionName: 'components_shared_product_benefits';
  info: {
    displayName: 'Product Benefits';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedProductNextStep extends Schema.Component {
  collectionName: 'components_shared_product_next_steps';
  info: {
    displayName: 'Product Next Step';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
    steps: Attribute.Component<'shared.text', true>;
    redirect_url: Attribute.String;
  };
}

export interface SharedProductQuestion extends Schema.Component {
  collectionName: 'components_shared_product_questions';
  info: {
    displayName: 'Product Question';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    header2: Attribute.String;
    description: Attribute.Text;
    header_benefits: Attribute.String;
    benefits: Attribute.Component<'shared.product-benefits', true>;
    redirect_url: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedText extends Schema.Component {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Product Step Description';
    description: '';
  };
  attributes: {
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.product-description': HomeProductDescription;
      'shared.media': SharedMedia;
      'shared.product-benefits': SharedProductBenefits;
      'shared.product-next-step': SharedProductNextStep;
      'shared.product-question': SharedProductQuestion;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text': SharedText;
    }
  }
}
