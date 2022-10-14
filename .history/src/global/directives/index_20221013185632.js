export default function (app) {
  // app.directive('focus', {
  //   created(el, binding, vnode, prevVnode) {},
  //   beforeMount(el, binding, vnode, prevVnode) {
  //     console.log('在元素被插入到 DOM 前调用');
  //   },
  //   mounted(el, binding, vnode, prevVnode) {
  //     // 在绑定元素的父组件
  //     // 及他自己的所有子节点都挂载完成后调用
  //   },
  //   beforeUpdate(el, binding, vnode, prevVnode) {
  //     // 绑定元素的父组件更新前调用
  //   },
  //   updated(el, binding, vnode, prevVnode) {
  //     // 在绑定元素的父组件
  //     // 及他自己的所有子节点都更新后调用
  //   },
  //   beforeUnmount(el, binding, vnode, prevVnode) {
  //     // 绑定元素的父组件卸载前调用
  //   },
  //   unmounted(el, binding, vnode, prevVnode) {
  //     // 绑定元素的父组件卸载后调用
  //   },
  // });
  app.directive('focus', (el, binding) => {
    if (binding.value) {
      console.log(binding.value * 1000, typeof binding.value * 1000);
      setTimeout(() => {
        el.focus();
      }, binding.value * 1000);
    } else {
      el.focus();
    }
  });
}
