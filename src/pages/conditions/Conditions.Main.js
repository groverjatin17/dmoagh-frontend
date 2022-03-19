import {useTranslation} from 'react-i18next';
import { isMobile } from 'react-device-detect';
import conditionsXL from './ConditionsXLScreens';
import conditionsXS from './ConditionsXSScreens';
import ConditionList from './ConditionsList';

export default function Conditions() {
  const {t} = useTranslation();
  const conditionsObject = {};
  ConditionList.forEach((item) => {
    conditionsObject[item.listId] = [...item.listItems];
  });
  return !isMobile ? conditionsXL(conditionsObject, t) : conditionsXS(conditionsObject, t);
}
