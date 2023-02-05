import { useIntl } from 'react-intl';
import { useCallback } from 'react';

type PrimitiveType = string | number | boolean | null | undefined | Date;

/**
 * Wrapper to the react-intl library {@link https://formatjs.io/} to fasten the development and to
 * reduce boilerplate. Uses its `formatMessage` function and shorten it with the closure.
 *
 * Before:
 * const { formatMessage } = useIntl();
 * const message = formatMessage({ id: 'new-location.steps.clientStep.clientDefaultDescription' });
 * const message2 = formatMessage({ id: 'new-location.steps.clientStep.clientNumber' });
 * const message3 = formatMessage({ id: 'new-location.steps.clientStep.clientName' });
 *
 * After:
 * const tr = useI18n('new-location.steps.clientStep');
 * const message = tr('clientDefaultDescription');
 * const message2 = tr('clientNumber');
 * const message3 = tr('clientName');
 *
 * @param prefix source path to the translation in the translation file
 * @returns callback that retrieves the translation key (full or short), values object
 * {@see https://formatjs.io/docs/core-concepts/icu-syntax/#plural-format} for details
 * and returns the translation text
 */
export function useI18n(prefix = '') {
  const { formatMessage } = useIntl();

  return useCallback(
    (id?: string, values?: Record<string, PrimitiveType>): string => {
      if (id === undefined) {
        return '';
      }
      return formatMessage({ id: prefix ? `${prefix}.${id}` : id }, values);
    },
    [prefix, formatMessage],
  );
}
