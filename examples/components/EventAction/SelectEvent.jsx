const change = {
  actions: [
    {
      actionType: 'dialog',
      args: {
        val: '${event.data.value}'
      },
      dialog: {
        title: '派发change事件',
        data: {
          val: '${val}'
        },
        body: [
          {
            type: 'tpl',
            tpl: '值更新：${val}'
          }
        ]
      }
    }
  ]
};

const blur = {
  actions: [
    {
      actionType: 'toast',
      msgType: 'info',
      msg: '派发blur事件'
    }
  ]
};

const focus = {
  actions: [
    {
      actionType: 'toast',
      msgType: 'info',
      msg: '派发focus事件'
    }
  ]
};

const options = [
  {
    label: '选项A',
    value: 'A'
  },
  {
    label: '选项B',
    value: 'B'
  },
  {
    label: '选项C',
    value: 'C'
  }
];

export default {
  type: 'page',
  title: '下拉框组件事件',
  regions: ['body', 'toolbar', 'header'],
  body: [
    {
      type: 'tpl',
      tpl: 'Select下拉框',
      inline: false,
      wrapperComponent: 'h2'
    },
    {
      type: 'form',
      debug: true,
      body: [
        {
          type: 'group',
          body: [
            {
              name: 'trigger1',
              id: 'trigger1',
              type: 'action',
              label: 'clear触发器',
              level: 'primary',
              onEvent: {
                click: {
                  actions: [
                    {
                      actionType: 'clear',
                      componentId: 'clear-select',
                      description: '点击清空指定下拉框选中值'
                    }
                  ]
                }
              }
            },
            {
              name: 'clear-select',
              id: 'clear-select',
              type: 'select',
              label: 'clear动作测试',
              mode: 'row',
              value: 'A,B,C',
              multiple: true,
              checkAll: true,
              options,
              onEvent: {
                change,
                blur,
                focus
              }
            }
          ]
        }
      ]
    },
    {
      type: 'tpl',
      tpl: 'inputTag标签选择器',
      inline: false,
      wrapperComponent: 'h2'
    },
    {
      type: 'form',
      debug: true,
      body: [
        {
          type: 'group',
          body: [
            {
              name: 'trigger2',
              id: 'trigger2',
              type: 'action',
              label: 'clear触发器',
              level: 'primary',
              onEvent: {
                click: {
                  actions: [
                    {
                      actionType: 'clear',
                      componentId: 'clear-input-tag',
                      description: '点击清空指定下拉框选中值'
                    }
                  ]
                }
              }
            },
            {
              name: 'clear-input-tag',
              id: 'clear-input-tag',
              type: 'input-tag',
              label: 'clear动作测试',
              mode: 'row',
              value: 'A,B',
              multiple: true,
              options,
              onEvent: {
                change,
                blur,
                focus
              }
            },
            
          ]
        }
      ]
    },
    {
      type: 'tpl',
      tpl: 'matrix-checkboxes矩阵勾选',
      inline: false,
      wrapperComponent: 'h2'
    },
    {
      type: 'form',
      debug: true,
      body: [
        {
          type: 'group',
          body: [
            {
              name: 'trigger3',
              id: 'trigger3',
              type: 'action',
              label: 'clear触发器',
              level: 'primary',
              onEvent: {
                click: {
                  actions: [
                    {
                      actionType: 'clear',
                      componentId: 'clear-matrix-checkboxes',
                      description: '点击清空指定下拉框选中值'
                    }
                  ]
                }
              }
            },
            {
              name: 'clear-matrix-checkboxes',
              id: 'clear-matrix-checkboxes',
              type: 'matrix-checkboxes',
              rowLabel: "行标题说明",
              columns: [
                {
                  label: '列1'
                },
                {
                  label: '列2'
                }
              ],
              rows: [
                {
                  label: '行1'
                },
                {
                  label: '行2'
                }
              ],
              onEvent: {
                change
              }
            },
            
          ]
        }
      ]
    },
    {
      type: 'tpl',
      tpl: 'radios单选框',
      inline: false,
      wrapperComponent: 'h2'
    },
    {
      type: 'form',
      debug: true,
      body: [
        {
          type: 'group',
          body: [
            {
              name: 'trigger4',
              id: 'trigger4',
              type: 'action',
              label: 'clear触发器',
              level: 'primary',
              onEvent: {
                click: {
                  actions: [
                    {
                      actionType: 'clear',
                      componentId: 'clear-radios',
                      description: '点击清空指定下拉框选中值'
                    }
                  ]
                }
              }
            },
            {
              name: 'clear-radios',
              id: 'clear-radios',
              type: "radios",
              options,
              onEvent: {
                change
              }
            },
          ]
        }
      ]
    },
    {
      type: 'tpl',
      tpl: 'options类',
      inline: false,
      wrapperComponent: 'h2'
    },
    {
      type: 'form',
      debug: true,
      body: [
        {
          type: 'group',
          body: [
            {
              name: 'trigger5',
              id: 'trigger5',
              type: 'action',
              label: 'clear触发器',
              level: 'primary',
              onEvent: {
                click: {
                  actions: [
                    {
                      actionType: 'clear',
                      componentId: 'clear-options',
                      description: '点击清空指定下拉框选中值'
                    }
                  ]
                }
              }
            },
            {
              name: 'clear-options',
              id: 'clear-options',
              type: 'checkboxes',
              options,
              onEvent: {
                change
              }
            },
            {
              name: 'clear-options',
              id: 'clear-options',
              type: 'button-group-select',
              options,
              onEvent: {
                change
              }
            },
            {
              name: 'clear-options',
              id: 'clear-options',
              type: 'list-select',
              options,
              onEvent: {
                change
              }
            },
          ]
        }
      ]
    },
  ],
};
