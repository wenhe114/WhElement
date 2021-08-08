import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
    name: 'ElButton',
});

const _hoisted_1 = /*#__PURE__*/createVNode("button", { style: {"color":"red","background":"orange"} }, "测试", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, [
    _hoisted_1
  ]))
}

script.render = render;
script.__file = "packages/button/src/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Button = script;

export { _Button as default };
