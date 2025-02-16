import { articleTypes } from './articles';
import { customFields } from './customFields';

export const schema = {
  name: 'default',
  types: [...articleTypes, ...customFields],
};
