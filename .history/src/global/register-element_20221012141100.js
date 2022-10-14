import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/base.css';
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
} from 'element-plus';

export default function (app) {
  app.use(ElementPlus);
}
