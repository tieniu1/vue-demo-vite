import 'element-plus/theme-chalk/base.css';
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

const components = [
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
];
//  全局注册组件
export default function (app) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
