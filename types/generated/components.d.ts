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

export interface ProductProductCalculatorContent extends Schema.Component {
  collectionName: 'components_product_product_calculator_content';
  info: {
    displayName: 'Product Calculator Content';
  };
  attributes: {
    summary_list_items: Attribute.Component<
      'product.product-calculator-summary-list-item',
      true
    >;
    header: Attribute.String;
    description: Attribute.String;
    subheader_1: Attribute.String;
    subheader_2: Attribute.String;
    subheader_2_list_items: Attribute.Component<
      'product.product-calculator-subheader-2-list-item',
      true
    >;
    subheader_3: Attribute.String;
    subheader_3_description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ProductProductCalculatorSubheader2ListItem
  extends Schema.Component {
  collectionName: 'components_product_product_calculator_subheader_2_list_items';
  info: {
    displayName: 'Product Calculator Subheader 2 List Items';
  };
  attributes: {
    item: Attribute.String;
    sentence_segment_1: Attribute.String;
    sentence_segment_2: Attribute.String;
    sentence_segment_3: Attribute.String;
  };
}

export interface ProductProductCalculatorSummaryListItem
  extends Schema.Component {
  collectionName: 'components_product_product_calculator_summary_list_items';
  info: {
    displayName: 'Product Calculator Summary List Items';
  };
  attributes: {
    sentence_segment_1: Attribute.String;
    sentence_segment_2: Attribute.String;
  };
}

export interface ProductProductServiceContent extends Schema.Component {
  collectionName: 'components_product_product_service_contents';
  info: {
    displayName: 'Product Service Content';
  };
  attributes: {
    product_service_item: Attribute.Component<
      'product.product-service-item',
      true
    >;
  };
}

export interface ProductProductServiceItem extends Schema.Component {
  collectionName: 'components_product_product_service_items';
  info: {
    displayName: 'Product Service Item';
  };
  attributes: {
    prefix: Attribute.String;
    header: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    redirect_url: Attribute.String;
  };
}

export interface ProductProductSubheaderContent extends Schema.Component {
  collectionName: 'components_product_product_subheader_contents';
  info: {
    displayName: 'Product Subheader Content';
  };
  attributes: {
    subheader: Attribute.String;
    list_prefix: Attribute.String;
    list_items: Attribute.Component<
      'product.product-subheader-list-item',
      true
    >;
    image: Attribute.Media;
  };
}

export interface ProductProductSubheaderListItem extends Schema.Component {
  collectionName: 'components_product_product_subheader_list_items';
  info: {
    displayName: 'Product Subheader List Item';
  };
  attributes: {
    header: Attribute.String;
    redirect_url: Attribute.String;
  };
}

export interface ReviewIframe extends Schema.Component {
  collectionName: 'components_review_iframes';
  info: {
    displayName: 'Iframe';
  };
  attributes: {
    src: Attribute.String;
    title: Attribute.String;
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
      'product.product-calculator-content': ProductProductCalculatorContent;
      'product.product-calculator-subheader-2-list-item': ProductProductCalculatorSubheader2ListItem;
      'product.product-calculator-summary-list-item': ProductProductCalculatorSummaryListItem;
      'product.product-service-content': ProductProductServiceContent;
      'product.product-service-item': ProductProductServiceItem;
      'product.product-subheader-content': ProductProductSubheaderContent;
      'product.product-subheader-list-item': ProductProductSubheaderListItem;
      'review.iframe': ReviewIframe;
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
