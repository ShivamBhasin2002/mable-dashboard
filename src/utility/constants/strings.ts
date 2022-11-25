import { statusSelector } from '@utility/constants/enums';

export const noWarningsMessage = 'No warnings yet';

export const noOrdersMessage = (status: statusSelector): string =>
  `No ${status && status !== statusSelector.all ? `${status.toLocaleLowerCase()} ` : ''}orders yet`;

export const receivedByFacebookLabel = 'Received by FB';

export const shopifyOrdersLabel = 'Shopify Orders';

export const loadingTimeLabel = (script: string) => `Loading Time: ${script}`;

export const mableShareSpeedLabel = 'Mable Share';

export const totalEventsLabel = 'Total Events';

export const avgDeliveryTimeLabel = 'AVG. Delivery Time';

export const attributionParameterLabel = 'Attribution Parameters';

export const eventParametersLabel = 'Event Parameters';

export const defaultLocale = 'en-US';

export const mableAiLandingPage = 'https://www.mable.ai';

export const scriptTagNotFoundPopupHeader = 'Script-Tag Not Found!';

export const scriptTagNotFoundPopupBody =
  'The script tag is required to ensure the full functionality of the tracking. If you have any questions or need help, please contact our support at';

export const supportEmail = 'support@mable.ai';

export const defaultErrorModalCloseButtonText = 'Dismiss';

export const shopNotFoundErrorMessage = 'No Shops Found';
