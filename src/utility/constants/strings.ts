import { statusSelector } from './enums';

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
