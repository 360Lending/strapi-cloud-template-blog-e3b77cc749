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
    home_page_default_value: Attribute.String;
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
    liability_info: Attribute.String;
    public_record_info: Attribute.String;
    disclaimer: Attribute.Text;
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

export interface GoalsGoals extends Schema.Component {
  collectionName: 'components_goals_goals';
  info: {
    displayName: 'goals';
    description: '';
  };
  attributes: {
    goal_name: Attribute.String;
    goal_description: Attribute.Text;
  };
}

export interface HomeHeroSectionButton extends Schema.Component {
  collectionName: 'components_home_hero_section_buttons';
  info: {
    displayName: 'hero_section_button';
  };
  attributes: {
    button_name: Attribute.String;
    url: Attribute.String;
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

export interface LocationsLocation extends Schema.Component {
  collectionName: 'components_locations_locations';
  info: {
    displayName: 'location';
    description: '';
  };
  attributes: {
    location: Attribute.String;
    average_price: Attribute.BigInteger;
    days_on_market: Attribute.Integer;
    market_description_body: Attribute.Text;
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

export interface MqlsMoreInfo extends Schema.Component {
  collectionName: 'components_mqls_more_infos';
  info: {
    displayName: 'more_info';
  };
  attributes: {
    info: Attribute.String;
  };
}

export interface NavbarMenuProductsNavbarMenuProducts extends Schema.Component {
  collectionName: 'components_navbar_menu_products_navbar_menu_products';
  info: {
    displayName: 'Navbar Menu - Products';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    subheader_1: Attribute.String;
    subheader_2: Attribute.String;
    subheader_3: Attribute.String;
    subheader_4: Attribute.String;
    subheader_5: Attribute.String;
    url: Attribute.String;
  };
}

export interface NavbarMenuNavbarMenu extends Schema.Component {
  collectionName: 'components_navbar_menu_navbar_menus';
  info: {
    displayName: 'Navbar Menu';
    description: '';
  };
  attributes: {
    navbar_menus_products: Attribute.Component<
      'navbar-menu-products.navbar-menu-products',
      true
    >;
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
    description: '';
  };
  attributes: {
    sentence_segment_1: Attribute.String;
    sentence_segment_2: Attribute.String;
    sentence_segment_3: Attribute.String;
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

export interface RatesV2AdvantageCard extends Schema.Component {
  collectionName: 'components_rates_v2_advantage_cards';
  info: {
    displayName: 'Advantage_card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface RatesV2Advantage extends Schema.Component {
  collectionName: 'components_rates_v2_advantages';
  info: {
    displayName: 'Advantage';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    subheader: Attribute.Text;
    cta_text: Attribute.Text;
    button_text: Attribute.String;
    advantage_card: Attribute.Component<'rates-v2.advantage-card', true>;
  };
}

export interface RatesV2BreakdownCreditBand extends Schema.Component {
  collectionName: 'components_rates_v2_breakdown_credit_bands';
  info: {
    displayName: 'Breakdown Credit Band';
    description: 'Represents a credit score band with numeric range and display color';
  };
  attributes: {
    min: Attribute.Integer;
    max: Attribute.Integer;
    label: Attribute.String;
    color: Attribute.String;
  };
}

export interface RatesV2BreakdownExampleLegendItem extends Schema.Component {
  collectionName: 'components_rates_v2_breakdown_example_legend_items';
  info: {
    displayName: 'Breakdown Example Legend Item';
  };
  attributes: {
    color: Attribute.String & Attribute.DefaultTo<'#3EDC93'>;
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface RatesV2BreakdownExample extends Schema.Component {
  collectionName: 'components_rates_v2_breakdown_examples';
  info: {
    displayName: 'Breakdown Example';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    button_text: Attribute.String;
    legend: Attribute.Component<'rates-v2.breakdown-example-legend-item', true>;
    equation_definition: Attribute.String;
    equation: Attribute.String;
  };
}

export interface RatesV2BreakdownStep extends Schema.Component {
  collectionName: 'components_rates_v2_breakdown_steps';
  info: {
    displayName: 'Breakdown Step';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    body: Attribute.Text;
    inline_card: Attribute.Blocks;
    left_card: Attribute.Blocks;
    right_card: Attribute.Blocks;
  };
}

export interface RatesV2Breakdown extends Schema.Component {
  collectionName: 'components_rates_v2_breakdowns';
  info: {
    displayName: 'Breakdown';
    description: 'Breakdown section with steps and example panel';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    steps: Attribute.Component<'rates-v2.breakdown-step', true>;
    credit_score_bands: Attribute.Component<
      'rates-v2.breakdown-credit-band',
      true
    >;
    example: Attribute.Component<'rates-v2.breakdown-example'>;
  };
}

export interface RatesV2CostCardListItem extends Schema.Component {
  collectionName: 'components_rates_v2_cost_card_list_items';
  info: {
    displayName: 'Cost_card_list_item';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface RatesV2CostCard extends Schema.Component {
  collectionName: 'components_rates_v2_cost_cards';
  info: {
    displayName: 'Cost_card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface RatesV2CostExampleFeeItem extends Schema.Component {
  collectionName: 'components_rates_v2_cost_example_fee_items';
  info: {
    displayName: 'Cost_example_fee_item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    amount: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
  };
}

export interface RatesV2Cost extends Schema.Component {
  collectionName: 'components_rates_v2_costs';
  info: {
    displayName: 'Cost';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    subheader: Attribute.Text;
    cta_text: Attribute.Text;
    button_text: Attribute.String;
    out_of_pocket_cost: Attribute.Component<'rates-v2.cost-card'>;
    out_of_pocket_cost_list_item: Attribute.Component<
      'rates-v2.cost-card-list-item',
      true
    >;
    closing_cost: Attribute.Component<'rates-v2.cost-card'>;
    closing_cost_list_item: Attribute.Component<
      'rates-v2.cost-card-list-item',
      true
    >;
    example_fee_card_title: Attribute.String;
    loan_amount: Attribute.Component<'rates-v2.cost-example-fee-item'>;
    fees: Attribute.Component<'rates-v2.cost-example-fee-item', true>;
  };
}

export interface RatesV2HeroHighlightParagraph extends Schema.Component {
  collectionName: 'components_rates_v2_hero_highlight_paragraphs';
  info: {
    displayName: 'Hero Highlight Paragraph';
    description: 'Paragraph with emphasized leading text for the Rates v2 hero section';
  };
  attributes: {
    leading: Attribute.String & Attribute.Required;
    body: Attribute.Text & Attribute.Required;
  };
}

export interface RatesV2HeroSection extends Schema.Component {
  collectionName: 'components_rates_v2_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: 'Top section content for Rates v2 pages';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image_alt: Attribute.String;
    highlight_paragraphs: Attribute.Component<
      'rates-v2.hero-highlight-paragraph',
      true
    >;
  };
}

export interface RatesV2PersonalizedRateStep extends Schema.Component {
  collectionName: 'components_rates_v2_personalized_rate_steps';
  info: {
    displayName: 'Personalized Rate Step';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface RatesV2PersonalizedRateTopBullet extends Schema.Component {
  collectionName: 'components_rates_v2_personalized_rate_top_bullets';
  info: {
    displayName: 'Personalized Rate Top Bullet';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface RatesV2PersonalizedRate extends Schema.Component {
  collectionName: 'components_rates_v2_personalized_rates';
  info: {
    displayName: 'Personalized Rate';
    description: 'Section showing benefits and steps to get a personalized rate';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    bold_intro: Attribute.Text;
    description: Attribute.Text;
    top_bullets: Attribute.Component<
      'rates-v2.personalized-rate-top-bullet',
      true
    >;
    benefits_header: Attribute.String;
    benefits_description: Attribute.Text;
    button_text: Attribute.String;
    steps: Attribute.Component<'rates-v2.personalized-rate-step', true>;
  };
}

export interface RatesV2Rates extends Schema.Component {
  collectionName: 'components_rates_v2_rates';
  info: {
    displayName: 'Rates';
    description: 'Rates section for Rates v2 pages';
  };
  attributes: {
    header: Attribute.String;
    current_header: Attribute.String;
    current_card_1_label: Attribute.String;
    current_card_1_text: Attribute.String;
    current_card_2_label: Attribute.String;
    current_card_2_text: Attribute.String;
    current_body: Attribute.Blocks;
  };
}

export interface RatesV2UseCaseItem extends Schema.Component {
  collectionName: 'components_rates_v2_use_case_items';
  info: {
    displayName: 'Use Case Item';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface RatesV2UseCases extends Schema.Component {
  collectionName: 'components_rates_v2_use_cases';
  info: {
    displayName: 'Use Cases';
    description: 'Use cases section with lead text and items (media/icons hardcoded in FE)';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.Text;
    items: Attribute.Component<'rates-v2.use-case-item', true>;
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
    description_prime: Attribute.Text;
    type: Attribute.Enumeration<
      ['Insured', 'Uninsured', 'Prime', 'Subprime', 'Non-Prime']
    >;
    icon: Attribute.String;
    rate_prime: Attribute.Decimal;
    rate_nonprime: Attribute.Decimal;
    rate_insured: Attribute.Decimal;
    rate_uninsured: Attribute.Decimal;
    description_nonprime: Attribute.Text;
    description_insured: Attribute.Text;
    description_uninsured: Attribute.Text;
    term_prime: Attribute.Integer;
    term_nonprime: Attribute.Integer;
    term_insured: Attribute.Integer;
    term_uninsured: Attribute.Integer;
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

export interface SupportCost extends Schema.Component {
  collectionName: 'components_support_costs';
  info: {
    displayName: 'Cost';
  };
  attributes: {
    header: Attribute.String;
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
      'goals.goals': GoalsGoals;
      'home.hero-section-button': HomeHeroSectionButton;
      'home.product-description': HomeProductDescription;
      'home.products-section-list-items': HomeProductsSectionListItems;
      'home.story-list-items': HomeStoryListItems;
      'locations.location': LocationsLocation;
      'mqls.education': MqlsEducation;
      'mqls.more-info': MqlsMoreInfo;
      'navbar-menu-products.navbar-menu-products': NavbarMenuProductsNavbarMenuProducts;
      'navbar-menu.navbar-menu': NavbarMenuNavbarMenu;
      'product.initial-states': ProductInitialStates;
      'product.product-calculator-content': ProductProductCalculatorContent;
      'product.product-calculator-subheader-2-list-item': ProductProductCalculatorSubheader2ListItem;
      'product.product-calculator-summary-list-item': ProductProductCalculatorSummaryListItem;
      'product.product-service-content': ProductProductServiceContent;
      'product.product-service-item': ProductProductServiceItem;
      'product.product-subheader-content': ProductProductSubheaderContent;
      'product.product-subheader-list-item': ProductProductSubheaderListItem;
      'rates-v2.advantage-card': RatesV2AdvantageCard;
      'rates-v2.advantage': RatesV2Advantage;
      'rates-v2.breakdown-credit-band': RatesV2BreakdownCreditBand;
      'rates-v2.breakdown-example-legend-item': RatesV2BreakdownExampleLegendItem;
      'rates-v2.breakdown-example': RatesV2BreakdownExample;
      'rates-v2.breakdown-step': RatesV2BreakdownStep;
      'rates-v2.breakdown': RatesV2Breakdown;
      'rates-v2.cost-card-list-item': RatesV2CostCardListItem;
      'rates-v2.cost-card': RatesV2CostCard;
      'rates-v2.cost-example-fee-item': RatesV2CostExampleFeeItem;
      'rates-v2.cost': RatesV2Cost;
      'rates-v2.hero-highlight-paragraph': RatesV2HeroHighlightParagraph;
      'rates-v2.hero-section': RatesV2HeroSection;
      'rates-v2.personalized-rate-step': RatesV2PersonalizedRateStep;
      'rates-v2.personalized-rate-top-bullet': RatesV2PersonalizedRateTopBullet;
      'rates-v2.personalized-rate': RatesV2PersonalizedRate;
      'rates-v2.rates': RatesV2Rates;
      'rates-v2.use-case-item': RatesV2UseCaseItem;
      'rates-v2.use-cases': RatesV2UseCases;
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
      'support.cost': SupportCost;
      'support.faq-list-items': SupportFaqListItems;
      'why-us.media-section-list-items': WhyUsMediaSectionListItems;
      'why-us.reason-list-items': WhyUsReasonListItems;
    }
  }
}
