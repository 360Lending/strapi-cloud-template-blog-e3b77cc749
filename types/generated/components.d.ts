import type { Attribute, Schema } from '@strapi/strapi';

export interface CalculatorCalculatorTextField extends Schema.Component {
  collectionName: 'components_calculator_calculator_text_field';
  info: {
    description: '';
    displayName: 'Calculator Text Field';
  };
  attributes: {
    home_page_default_value: Attribute.String;
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
    description: '';
    displayName: 'Calculator variables';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
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
    description: '';
    displayName: 'selection_fields';
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
    description: Attribute.Blocks;
    title: Attribute.String;
  };
}

export interface CreditSummaryCreditSummaryPage extends Schema.Component {
  collectionName: 'components_credit_summary_credit_summary_pages';
  info: {
    description: '';
    displayName: 'Credit Summary Page';
  };
  attributes: {
    description: Attribute.String;
    disclaimer: Attribute.Text;
    liability_info: Attribute.String;
    liability_table_header: Attribute.String;
    public_record_info: Attribute.String;
    title: Attribute.String;
  };
}

export interface CreditSummaryCurrentAnalysisAndSolutionsPage
  extends Schema.Component {
  collectionName: 'components_credit_summary_current_analysis_and_solutions_pages';
  info: {
    description: '';
    displayName: 'Current Analysis & Solutions Page';
  };
  attributes: {
    description: Attribute.Text;
    gds_ratio_description: Attribute.Text;
    gds_ratio_title: Attribute.String;
    payment_estimate_description: Attribute.Text;
    payment_estimate_rates_list: Attribute.String;
    payment_estimate_title: Attribute.String;
    tds_ratio_description: Attribute.Text;
    tds_ratio_title: Attribute.String;
    title: Attribute.String;
  };
}

export interface CreditSummaryOrderAppraisal extends Schema.Component {
  collectionName: 'components_credit_summary_order_appraisals';
  info: {
    description: '';
    displayName: 'Order Appraisal';
  };
  attributes: {
    description: Attribute.Text;
    equity_analysis_description: Attribute.Text;
    equity_analysis_title: Attribute.String;
    order_appraisal_sub_item: Attribute.Component<'credit-summary.order-appraisal-item'>;
    title: Attribute.String;
  };
}

export interface CreditSummaryOrderAppraisalItem extends Schema.Component {
  collectionName: 'components_credit_summary_order_appraisal_items';
  info: {
    displayName: 'Order Appraisal Item';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    item_body: Attribute.Blocks;
  };
}

export interface GoalsGoals extends Schema.Component {
  collectionName: 'components_goals_goals';
  info: {
    description: '';
    displayName: 'goals';
  };
  attributes: {
    goal_description: Attribute.Text;
    goal_name: Attribute.String;
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
    description: '';
    displayName: 'Home Page Carousel';
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
    description: '';
    displayName: 'products_section_list_items';
  };
  attributes: {
    description: Attribute.Text;
    header: Attribute.String;
    name: Attribute.String;
    redirect_url: Attribute.String;
    story_description: Attribute.Text;
    story_header: Attribute.String;
    story_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    story_list_items: Attribute.Component<'home.story-list-items', true>;
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
    description: '';
    displayName: 'location';
  };
  attributes: {
    average_price: Attribute.BigInteger;
    days_on_market: Attribute.Integer;
    location: Attribute.String;
    market_description_body: Attribute.Text;
  };
}

export interface MqlsEducation extends Schema.Component {
  collectionName: 'components_mqls_educations';
  info: {
    description: '';
    displayName: 'Educational Content';
  };
  attributes: {
    description: Attribute.String;
    header: Attribute.String & Attribute.Required;
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
    description: '';
    displayName: 'Navbar Menu - Products';
  };
  attributes: {
    description: Attribute.Text;
    subheader_1: Attribute.String;
    subheader_2: Attribute.String;
    subheader_3: Attribute.String;
    subheader_4: Attribute.String;
    subheader_5: Attribute.String;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface NavbarMenuNavbarMenu extends Schema.Component {
  collectionName: 'components_navbar_menu_navbar_menus';
  info: {
    description: '';
    displayName: 'Navbar Menu';
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
    description: '';
    displayName: 'product_calculator_content';
  };
  attributes: {
    description: Attribute.Blocks;
    header: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    initial_states: Attribute.Component<'product.initial-states', true>;
    subheader_1: Attribute.String;
    subheader_2: Attribute.String;
    subheader_2_list_items: Attribute.Component<
      'product.product-calculator-subheader-2-list-item',
      true
    >;
    subheader_3: Attribute.String;
    subheader_3_description: Attribute.Text;
    summary_list_items: Attribute.Component<
      'product.product-calculator-summary-list-item',
      true
    >;
  };
}

export interface ProductProductCalculatorSubheader2ListItem
  extends Schema.Component {
  collectionName: 'components_product_product_calculator_subheader_2_list_items';
  info: {
    description: '';
    displayName: 'Product Calculator Subheader 2 List Items';
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
    description: '';
    displayName: 'Product Calculator Summary List Items';
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
    description: Attribute.Text;
    header: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    prefix: Attribute.String;
    redirect_url: Attribute.String;
  };
}

export interface ProductProductSubheaderContent extends Schema.Component {
  collectionName: 'components_product_product_subheader_contents';
  info: {
    displayName: 'Product Subheader Content';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list_items: Attribute.Component<
      'product.product-subheader-list-item',
      true
    >;
    list_prefix: Attribute.String;
    subheader: Attribute.String;
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

export interface RatesV2Advantage extends Schema.Component {
  collectionName: 'components_rates_v2_advantages';
  info: {
    description: '';
    displayName: 'Advantage';
  };
  attributes: {
    advantage_card: Attribute.Component<'rates-v2.advantage-card', true>;
    button_text: Attribute.String;
    cta_text: Attribute.Text;
    header: Attribute.String;
    subheader: Attribute.Text;
  };
}

export interface RatesV2AdvantageCard extends Schema.Component {
  collectionName: 'components_rates_v2_advantage_cards';
  info: {
    displayName: 'Advantage_card';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface RatesV2Breakdown extends Schema.Component {
  collectionName: 'components_rates_v2_breakdowns';
  info: {
    description: 'Breakdown section with steps and example panel';
    displayName: 'Breakdown';
  };
  attributes: {
    credit_score_bands: Attribute.Component<
      'rates-v2.breakdown-credit-band',
      true
    >;
    description: Attribute.Text;
    example: Attribute.Component<'rates-v2.breakdown-example'>;
    header: Attribute.String;
    steps: Attribute.Component<'rates-v2.breakdown-step', true>;
  };
}

export interface RatesV2BreakdownCreditBand extends Schema.Component {
  collectionName: 'components_rates_v2_breakdown_credit_bands';
  info: {
    description: 'Represents a credit score band with numeric range and display color';
    displayName: 'Breakdown Credit Band';
  };
  attributes: {
    color: Attribute.String;
    label: Attribute.String;
    max: Attribute.Integer;
    min: Attribute.Integer;
  };
}

export interface RatesV2BreakdownExample extends Schema.Component {
  collectionName: 'components_rates_v2_breakdown_examples';
  info: {
    displayName: 'Breakdown Example';
  };
  attributes: {
    button_text: Attribute.String;
    equation: Attribute.String;
    equation_definition: Attribute.String;
    legend: Attribute.Component<'rates-v2.breakdown-example-legend-item', true>;
    title: Attribute.String & Attribute.Required;
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

export interface RatesV2BreakdownStep extends Schema.Component {
  collectionName: 'components_rates_v2_breakdown_steps';
  info: {
    displayName: 'Breakdown Step';
  };
  attributes: {
    body: Attribute.Text;
    inline_card: Attribute.Blocks;
    left_card: Attribute.Blocks;
    right_card: Attribute.Blocks;
    title: Attribute.String & Attribute.Required;
  };
}

export interface RatesV2CalculatorTab extends Schema.Component {
  collectionName: 'components_rates_v2_calculator_tabs';
  info: {
    description: 'Single calculator tab configuration for Rates section';
    displayName: 'Calculator Tab';
  };
  attributes: {
    cta_text: Attribute.String;
    description: Attribute.Text;
    estimated_header: Attribute.String;
    icon: Attribute.Enumeration<['star', 'hand', 'house']> &
      Attribute.DefaultTo<'house'>;
    label: Attribute.String & Attribute.Required;
    primary_slider_1_label: Attribute.String;
    primary_slider_2_label: Attribute.String;
    rate_header: Attribute.String;
    rate_note: Attribute.String;
  };
}

export interface RatesV2Cost extends Schema.Component {
  collectionName: 'components_rates_v2_costs';
  info: {
    description: '';
    displayName: 'Cost';
  };
  attributes: {
    button_text: Attribute.String;
    closing_cost: Attribute.Component<'rates-v2.cost-card'>;
    closing_cost_list_item: Attribute.Component<
      'rates-v2.cost-card-list-item',
      true
    >;
    cta_text: Attribute.Text;
    example_fee_card_title: Attribute.String;
    fees: Attribute.Component<'rates-v2.cost-example-fee-item', true>;
    header: Attribute.String;
    loan_amount: Attribute.Component<'rates-v2.cost-example-fee-item'>;
    out_of_pocket_cost: Attribute.Component<'rates-v2.cost-card'>;
    out_of_pocket_cost_list_item: Attribute.Component<
      'rates-v2.cost-card-list-item',
      true
    >;
    subheader: Attribute.Text;
  };
}

export interface RatesV2CostCard extends Schema.Component {
  collectionName: 'components_rates_v2_cost_cards';
  info: {
    displayName: 'Cost_card';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface RatesV2CostCardListItem extends Schema.Component {
  collectionName: 'components_rates_v2_cost_card_list_items';
  info: {
    displayName: 'Cost_card_list_item';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface RatesV2CostExampleFeeItem extends Schema.Component {
  collectionName: 'components_rates_v2_cost_example_fee_items';
  info: {
    description: '';
    displayName: 'Cost_example_fee_item';
  };
  attributes: {
    amount: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface RatesV2HeroHighlightParagraph extends Schema.Component {
  collectionName: 'components_rates_v2_hero_highlight_paragraphs';
  info: {
    description: 'Paragraph with emphasized leading text for the Rates v2 hero section';
    displayName: 'Hero Highlight Paragraph';
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    leading: Attribute.String & Attribute.Required;
  };
}

export interface RatesV2HeroSection extends Schema.Component {
  collectionName: 'components_rates_v2_hero_sections';
  info: {
    description: 'Top section content for Rates v2 pages';
    displayName: 'Hero Section';
  };
  attributes: {
    description: Attribute.Text;
    header: Attribute.String & Attribute.Required;
    highlight_paragraphs: Attribute.Component<
      'rates-v2.hero-highlight-paragraph',
      true
    >;
    image_alt: Attribute.String;
    toc_header: Attribute.String;
    toc_links: Attribute.Component<'rates-v2.hero-toc-link', true>;
  };
}

export interface RatesV2HeroTocLink extends Schema.Component {
  collectionName: 'components_rates_v2_hero_toc_links';
  info: {
    description: 'Label for an anchor link in the Rates v2 Hero TOC; anchors are fixed in code';
    displayName: 'Hero TOC Link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
  };
}

export interface RatesV2PersonalizedRate extends Schema.Component {
  collectionName: 'components_rates_v2_personalized_rates';
  info: {
    description: 'Section showing benefits and steps to get a personalized rate';
    displayName: 'Personalized Rate';
  };
  attributes: {
    benefits_description: Attribute.Text;
    benefits_header: Attribute.String;
    bold_intro: Attribute.Text;
    button_text: Attribute.String;
    description: Attribute.Text;
    header: Attribute.String & Attribute.Required;
    steps: Attribute.Component<'rates-v2.personalized-rate-step', true>;
    top_bullets: Attribute.Component<
      'rates-v2.personalized-rate-top-bullet',
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
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
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

export interface RatesV2Rates extends Schema.Component {
  collectionName: 'components_rates_v2_rates';
  info: {
    description: 'Rates section for Rates v2 pages';
    displayName: 'Rates';
  };
  attributes: {
    calculator_borrow_label: Attribute.String;
    calculator_cta_text: Attribute.String;
    calculator_description: Attribute.Text;
    calculator_estimated_header: Attribute.String;
    calculator_header: Attribute.String;
    calculator_rate_header: Attribute.String;
    calculator_rate_note: Attribute.String;
    calculator_tabs: Attribute.Component<'rates-v2.calculator-tab', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    current_body: Attribute.Blocks;
    current_card_1_icon: Attribute.Enumeration<['star', 'hand', 'house']>;
    current_card_1_label: Attribute.String;
    current_card_1_rank: Attribute.Enumeration<['none', 'first', 'second']> &
      Attribute.DefaultTo<'none'>;
    current_card_1_text: Attribute.String;
    current_card_2_icon: Attribute.Enumeration<['star', 'hand', 'house']>;
    current_card_2_label: Attribute.String;
    current_card_2_rank: Attribute.Enumeration<['none', 'first', 'second']> &
      Attribute.DefaultTo<'none'>;
    current_card_2_text: Attribute.String;
    current_header: Attribute.String;
    header: Attribute.String;
    purchasing_card_1_description: Attribute.Blocks;
    purchasing_card_1_icon: Attribute.Enumeration<['star', 'hand', 'house']>;
    purchasing_card_1_label: Attribute.String;
    purchasing_card_1_rank: Attribute.Enumeration<['none', 'first', 'second']> &
      Attribute.DefaultTo<'none'>;
    purchasing_card_1_text: Attribute.String;
    purchasing_card_2_description: Attribute.Blocks;
    purchasing_card_2_icon: Attribute.Enumeration<['star', 'hand', 'house']>;
    purchasing_card_2_label: Attribute.String;
    purchasing_card_2_rank: Attribute.Enumeration<['none', 'first', 'second']> &
      Attribute.DefaultTo<'none'>;
    purchasing_card_2_text: Attribute.String;
    purchasing_header: Attribute.String;
    refinancing_card_1_description: Attribute.Blocks;
    refinancing_card_1_icon: Attribute.Enumeration<['star', 'hand', 'house']>;
    refinancing_card_1_label: Attribute.String;
    refinancing_card_1_rank: Attribute.Enumeration<
      ['none', 'first', 'second']
    > &
      Attribute.DefaultTo<'none'>;
    refinancing_card_1_text: Attribute.String;
    refinancing_card_2_description: Attribute.Blocks;
    refinancing_card_2_icon: Attribute.Enumeration<['star', 'hand', 'house']>;
    refinancing_card_2_label: Attribute.String;
    refinancing_card_2_rank: Attribute.Enumeration<
      ['none', 'first', 'second']
    > &
      Attribute.DefaultTo<'none'>;
    refinancing_card_2_text: Attribute.String;
    refinancing_header: Attribute.String;
  };
}

export interface RatesV2UseCaseItem extends Schema.Component {
  collectionName: 'components_rates_v2_use_case_items';
  info: {
    displayName: 'Use Case Item';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface RatesV2UseCases extends Schema.Component {
  collectionName: 'components_rates_v2_use_cases';
  info: {
    description: 'Use cases section with lead text and items (media/icons hardcoded in FE)';
    displayName: 'Use Cases';
  };
  attributes: {
    description: Attribute.Text;
    header: Attribute.String;
    items: Attribute.Component<'rates-v2.use-case-item', true>;
  };
}

export interface RatesMortgageOptionListItems extends Schema.Component {
  collectionName: 'components_rates_mortgage_option_list_items';
  info: {
    description: '';
    displayName: 'mortgage_option_list_items';
  };
  attributes: {
    description: Attribute.Text;
    item: Attribute.String;
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
    description: '';
    displayName: 'rate-options';
  };
  attributes: {
    description_insured: Attribute.Text;
    description_nonprime: Attribute.Text;
    description_prime: Attribute.Text;
    description_uninsured: Attribute.Text;
    icon: Attribute.String;
    rate_insured: Attribute.Decimal;
    rate_nonprime: Attribute.Decimal;
    rate_prime: Attribute.Decimal;
    rate_uninsured: Attribute.Decimal;
    term_insured: Attribute.Integer;
    term_nonprime: Attribute.Integer;
    term_prime: Attribute.Integer;
    term_uninsured: Attribute.Integer;
    title: Attribute.String;
    type: Attribute.Enumeration<
      ['Insured', 'Uninsured', 'Prime', 'Subprime', 'Non-Prime']
    >;
  };
}

export interface RatesRates extends Schema.Component {
  collectionName: 'components_rates_rates';
  info: {
    displayName: 'rates';
  };
  attributes: {
    bank_logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bank_name: Attribute.String;
    rate: Attribute.Decimal;
    term: Attribute.Integer;
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

export interface ReviewReasonListItems extends Schema.Component {
  collectionName: 'components_review_reason_list_items';
  info: {
    displayName: 'reason_list_items';
  };
  attributes: {
    description: Attribute.Blocks;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reason: Attribute.String;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProductBenefits extends Schema.Component {
  collectionName: 'components_shared_product_benefits';
  info: {
    displayName: 'Product Benefits';
  };
  attributes: {
    description: Attribute.Text;
    header: Attribute.String;
  };
}

export interface SharedProductNextStep extends Schema.Component {
  collectionName: 'components_shared_product_next_steps';
  info: {
    description: '';
    displayName: 'Product Next Step';
  };
  attributes: {
    description: Attribute.String;
    header: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    redirect_url: Attribute.String;
    steps: Attribute.Component<'shared.text', true>;
  };
}

export interface SharedProductQuestion extends Schema.Component {
  collectionName: 'components_shared_product_questions';
  info: {
    description: '';
    displayName: 'Product Question';
  };
  attributes: {
    benefits: Attribute.Component<'shared.product-benefits', true>;
    description: Attribute.Text;
    header: Attribute.String;
    header_benefits: Attribute.String;
    header2: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    redirect_url: Attribute.String;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedText extends Schema.Component {
  collectionName: 'components_shared_texts';
  info: {
    description: '';
    displayName: 'Product Step Description';
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
    answer: Attribute.Text;
    question: Attribute.Text;
  };
}

export interface WhyUsMediaSectionListItems extends Schema.Component {
  collectionName: 'components_why_us_media_section_list_items';
  info: {
    displayName: 'media_section_list_items';
  };
  attributes: {
    date: Attribute.Date;
    header: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    redirect_url: Attribute.String;
  };
}

export interface WhyUsReasonListItems extends Schema.Component {
  collectionName: 'components_why_us_reason_list_items';
  info: {
    displayName: 'reason_list_items';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    item: Attribute.String;
    value: Attribute.String;
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
      'credit-summary.order-appraisal': CreditSummaryOrderAppraisal;
      'credit-summary.order-appraisal-item': CreditSummaryOrderAppraisalItem;
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
      'rates-v2.advantage': RatesV2Advantage;
      'rates-v2.advantage-card': RatesV2AdvantageCard;
      'rates-v2.breakdown': RatesV2Breakdown;
      'rates-v2.breakdown-credit-band': RatesV2BreakdownCreditBand;
      'rates-v2.breakdown-example': RatesV2BreakdownExample;
      'rates-v2.breakdown-example-legend-item': RatesV2BreakdownExampleLegendItem;
      'rates-v2.breakdown-step': RatesV2BreakdownStep;
      'rates-v2.calculator-tab': RatesV2CalculatorTab;
      'rates-v2.cost': RatesV2Cost;
      'rates-v2.cost-card': RatesV2CostCard;
      'rates-v2.cost-card-list-item': RatesV2CostCardListItem;
      'rates-v2.cost-example-fee-item': RatesV2CostExampleFeeItem;
      'rates-v2.hero-highlight-paragraph': RatesV2HeroHighlightParagraph;
      'rates-v2.hero-section': RatesV2HeroSection;
      'rates-v2.hero-toc-link': RatesV2HeroTocLink;
      'rates-v2.personalized-rate': RatesV2PersonalizedRate;
      'rates-v2.personalized-rate-step': RatesV2PersonalizedRateStep;
      'rates-v2.personalized-rate-top-bullet': RatesV2PersonalizedRateTopBullet;
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
