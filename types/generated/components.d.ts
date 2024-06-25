import type { Schema, Attribute } from '@strapi/strapi';

export interface CalculatorCalculatorTextField extends Schema.Component {
  collectionName: 'components_calculator_calculator_text_field';
  info: {
    displayName: 'Calculator Text Field';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    more_information: Attribute.Text;
    operator: Attribute.String;
  };
}

export interface CalculatorCalculatorTotalLabel extends Schema.Component {
  collectionName: 'components_calculator_calculator_total_label';
  info: {
    displayName: 'Calculator Total Label';
  };
  attributes: {
    label: Attribute.String;
    more_information: Attribute.Text;
    operator: Attribute.String;
  };
}

export interface CalculatorCalculatorVariables extends Schema.Component {
  collectionName: 'components_calculator_calculator_variables';
  info: {
    displayName: 'Calculator variables';
    description: '';
  };
  attributes: {
    value: Attribute.String;
    name: Attribute.String;
  };
}

export interface CalculatorErrorMessages extends Schema.Component {
  collectionName: 'components_calculator_error_messages';
  info: {
    displayName: 'error_messages';
  };
  attributes: {
    message: Attribute.String;
  };
}

export interface CalculatorHeaders extends Schema.Component {
  collectionName: 'components_calculator_headers';
  info: {
    displayName: 'headers';
  };
  attributes: {
    header: Attribute.String;
  };
}

export interface CalculatorNotes extends Schema.Component {
  collectionName: 'components_calculator_notes';
  info: {
    displayName: 'notes';
  };
  attributes: {
    note: Attribute.String;
  };
}

export interface CalculatorSelectionFields extends Schema.Component {
  collectionName: 'components_calculator_selection_fields';
  info: {
    displayName: 'selection_fields';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    more_information: Attribute.Text;
    selections: Attribute.Text;
  };
}

export interface CalculatorSelections extends Schema.Component {
  collectionName: 'components_calculator_selections';
  info: {
    displayName: 'selections';
  };
  attributes: {
    selection: Attribute.String;
  };
}

export interface CreditSummaryCreditScoreHelper extends Schema.Component {
  collectionName: 'components_credit_summary_credit_score_helpers';
  info: {
    displayName: 'Credit Score Helper';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface CreditSummaryCreditSummaryPage extends Schema.Component {
  collectionName: 'components_credit_summary_credit_summary_pages';
  info: {
    displayName: 'Credit Summary Page';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    liability_table_header: Attribute.String;
  };
}

export interface CreditSummaryCurrentAnalysisAndSolutionsPage
  extends Schema.Component {
  collectionName: 'components_credit_summary_current_analysis_and_solutions_pages';
  info: {
    displayName: 'Current Analysis & Solutions Page';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    gds_ratio_title: Attribute.String;
    gds_ratio_description: Attribute.Text;
    tds_ratio_title: Attribute.String;
    tds_ratio_description: Attribute.Text;
    payment_estimate_title: Attribute.String;
    payment_estimate_description: Attribute.Text;
    payment_estimate_rates_list: Attribute.String;
  };
}

export interface CreditSummaryOrderAppraisalItem extends Schema.Component {
  collectionName: 'components_credit_summary_order_appraisal_items';
  info: {
    displayName: 'Order Appraisal Item';
  };
  attributes: {
    image: Attribute.Media;
    item_body: Attribute.Blocks;
  };
}

export interface CreditSummaryOrderAppraisal extends Schema.Component {
  collectionName: 'components_credit_summary_order_appraisals';
  info: {
    displayName: 'Order Appraisal';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    order_appraisal_sub_item: Attribute.Component<'credit-summary.order-appraisal-item'>;
    equity_analysis_title: Attribute.String;
    equity_analysis_description: Attribute.Text;
  };
}

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

export interface HomeProductsSectionListItems extends Schema.Component {
  collectionName: 'components_home_products_section_list_items';
  info: {
    displayName: 'products_section_list_items';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    redirect_url: Attribute.String;
    story_header: Attribute.String;
    story_list_items: Attribute.Component<'home.story-list-items', true>;
    story_image: Attribute.Media;
    story_description: Attribute.Text;
    name: Attribute.String;
  };
}

export interface HomeStoryListItems extends Schema.Component {
  collectionName: 'components_home_story_list_items';
  info: {
    displayName: 'story_list_items';
  };
  attributes: {
    item: Attribute.Text;
  };
}

export interface MqlsEducation extends Schema.Component {
  collectionName: 'components_mqls_educations';
  info: {
    displayName: 'Educational Content';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    description: Attribute.String;
    learn_more_link: Attribute.String;
    shape_type: Attribute.Enumeration<['What', 'Why', 'How']> &
      Attribute.Required;
  };
}

export interface ProductInitialStates extends Schema.Component {
  collectionName: 'components_product_initial_states';
  info: {
    displayName: 'initial_states';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
  };
}

export interface ProductProductCalculatorContent extends Schema.Component {
  collectionName: 'components_product_product_calculator_contents';
  info: {
    displayName: 'product_calculator_content';
    description: '';
  };
  attributes: {
    summary_list_items: Attribute.Component<
      'product.product-calculator-summary-list-item',
      true
    >;
    header: Attribute.String;
    subheader_1: Attribute.String;
    subheader_2: Attribute.String;
    subheader_2_list_items: Attribute.Component<
      'product.product-calculator-subheader-2-list-item',
      true
    >;
    subheader_3: Attribute.String;
    subheader_3_description: Attribute.Text;
    image: Attribute.Media;
    description: Attribute.Blocks;
    initial_states: Attribute.Component<'product.initial-states', true>;
  };
}

export interface ProductProductCalculatorSubheader2ListItem
  extends Schema.Component {
  collectionName: 'components_product_product_calculator_subheader_2_list_items';
  info: {
    displayName: 'Product Calculator Subheader 2 List Items';
    description: '';
  };
  attributes: {
    item: Attribute.String;
    value: Attribute.Text;
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

export interface RatesMortgageOptionListItems extends Schema.Component {
  collectionName: 'components_rates_mortgage_option_list_items';
  info: {
    displayName: 'mortgage_option_list_items';
    description: '';
  };
  attributes: {
    item: Attribute.String;
    description: Attribute.Text;
    type: Attribute.Enumeration<
      [
        'Refinance (Prime)',
        'Refinance (Subprime)',
        'Purchase (Insured)',
        'Purchase (Uninsured)'
      ]
    >;
  };
}

export interface RatesRateOptions extends Schema.Component {
  collectionName: 'components_rates_rate_options';
  info: {
    displayName: 'rate-options';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    type: Attribute.Enumeration<
      ['Insured', 'Uninsured', 'Prime', 'Subprime', 'Non-Prime']
    >;
    icon: Attribute.String;
    rate: Attribute.Decimal;
  };
}

export interface RatesRates extends Schema.Component {
  collectionName: 'components_rates_rates';
  info: {
    displayName: 'rates';
  };
  attributes: {
    type: Attribute.Enumeration<
      [
        'Refinance (Prime)',
        'Refinance (Subprime)',
        'Purchase (Insured)',
        'Purchase (Uninsured)'
      ]
    >;
    rate: Attribute.Decimal;
    bank_logo: Attribute.Media;
    bank_name: Attribute.String;
    term: Attribute.Integer;
  };
}

export interface ReviewReasonListItems extends Schema.Component {
  collectionName: 'components_review_reason_list_items';
  info: {
    displayName: 'reason_list_items';
  };
  attributes: {
    reason: Attribute.String;
    icon: Attribute.Media;
    description: Attribute.Blocks;
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

export interface SupportFaqListItems extends Schema.Component {
  collectionName: 'components_support_faq_list_items';
  info: {
    displayName: 'FAQ_list_items';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface WhyUsMediaSectionListItems extends Schema.Component {
  collectionName: 'components_why_us_media_section_list_items';
  info: {
    displayName: 'media_section_list_items';
  };
  attributes: {
    header: Attribute.String;
    redirect_url: Attribute.String;
    date: Attribute.Date;
    logo: Attribute.Media;
  };
}

export interface WhyUsReasonListItems extends Schema.Component {
  collectionName: 'components_why_us_reason_list_items';
  info: {
    displayName: 'reason_list_items';
  };
  attributes: {
    item: Attribute.String;
    value: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'calculator.calculator-text-field': CalculatorCalculatorTextField;
      'calculator.calculator-total-label': CalculatorCalculatorTotalLabel;
      'calculator.calculator-variables': CalculatorCalculatorVariables;
      'calculator.error-messages': CalculatorErrorMessages;
      'calculator.headers': CalculatorHeaders;
      'calculator.notes': CalculatorNotes;
      'calculator.selection-fields': CalculatorSelectionFields;
      'calculator.selections': CalculatorSelections;
      'credit-summary.credit-score-helper': CreditSummaryCreditScoreHelper;
      'credit-summary.credit-summary-page': CreditSummaryCreditSummaryPage;
      'credit-summary.current-analysis-and-solutions-page': CreditSummaryCurrentAnalysisAndSolutionsPage;
      'credit-summary.order-appraisal-item': CreditSummaryOrderAppraisalItem;
      'credit-summary.order-appraisal': CreditSummaryOrderAppraisal;
      'home.product-description': HomeProductDescription;
      'home.products-section-list-items': HomeProductsSectionListItems;
      'home.story-list-items': HomeStoryListItems;
      'mqls.education': MqlsEducation;
      'product.initial-states': ProductInitialStates;
      'product.product-calculator-content': ProductProductCalculatorContent;
      'product.product-calculator-subheader-2-list-item': ProductProductCalculatorSubheader2ListItem;
      'product.product-calculator-summary-list-item': ProductProductCalculatorSummaryListItem;
      'product.product-service-content': ProductProductServiceContent;
      'product.product-service-item': ProductProductServiceItem;
      'product.product-subheader-content': ProductProductSubheaderContent;
      'product.product-subheader-list-item': ProductProductSubheaderListItem;
      'rates.mortgage-option-list-items': RatesMortgageOptionListItems;
      'rates.rate-options': RatesRateOptions;
      'rates.rates': RatesRates;
      'review.reason-list-items': ReviewReasonListItems;
      'shared.media': SharedMedia;
      'shared.product-benefits': SharedProductBenefits;
      'shared.product-next-step': SharedProductNextStep;
      'shared.product-question': SharedProductQuestion;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text': SharedText;
      'support.faq-list-items': SupportFaqListItems;
      'why-us.media-section-list-items': WhyUsMediaSectionListItems;
      'why-us.reason-list-items': WhyUsReasonListItems;
    }
  }
}
