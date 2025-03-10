import React = require('react');
import {render, fireEvent, findByText} from '@testing-library/react';
import '../../../src/themes/default';
import {render as amisRender} from '../../../src/index';
import {makeEnv, wait} from '../../helper';

test('Renderer:combo', () => {
  const {container} = render(
    amisRender(
      {
        type: 'form',
        mode: 'horizontal',
        api: '/api/mock2/form/saveForm',
        body: [
          {
            type: 'combo',
            name: 'combo1',
            label: 'Combo 单行展示',
            items: [
              {
                name: 'text',
                label: '文本',
                type: 'input-text'
              },
              {
                name: 'select',
                label: '选项',
                type: 'select',
                options: ['a', 'b', 'c']
              }
            ]
          },
          {
            type: 'divider'
          },
          {
            type: 'combo',
            name: 'combo2',
            label: 'Combo 多行展示',
            multiLine: true,
            items: [
              {
                name: 'text',
                label: '文本',
                type: 'input-text'
              },
              {
                name: 'select',
                label: '选项',
                type: 'select',
                options: ['a', 'b', 'c']
              }
            ]
          }
        ]
      },
      {},
      makeEnv({})
    )
  );

  expect(container).toMatchSnapshot();
});

test('Renderer:combo multiple', async () => {
  const {container, getByText} = render(
    amisRender(
      {
        type: 'form',
        mode: 'horizontal',
        api: '/api/mock2/form/saveForm',
        debug: true,
        body: [
          {
            type: 'combo',
            name: 'combo',
            label: 'Combo 多选展示',
            multiple: true,
            items: [
              {
                name: 'text',
                label: '文本',
                type: 'input-text'
              },
              {
                name: 'select',
                label: '选项',
                type: 'select',
                options: ['aOptions', 'b', 'c']
              }
            ]
          }
        ]
      },
      {},
      makeEnv({})
    )
  );

  const add = await findByText(container, '新增');
  // 点击新增
  add.click();

  // 输入
  const input = container.querySelector(
    '.cxd-TextControl-input input'
  ) as HTMLInputElement;

  fireEvent.change(input, {target: {value: 'amis'}});

  // 下拉框点击
  (container.querySelector('.cxd-Select') as HTMLDivElement).click();

  await findByText(container, 'aOptions');

  fireEvent.click(getByText('aOptions'));
  await wait(300);

  const formDebug = JSON.parse(document.querySelector('pre code')!.innerHTML);

  expect(formDebug).toEqual({
    combo: [
      {
        select: 'aOptions',
        text: 'amis'
      }
    ]
  });

  // expect(container).toMatchSnapshot();
});
