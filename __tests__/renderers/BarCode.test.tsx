import React = require('react');
import {render, fireEvent} from '@testing-library/react';
import '../../src/themes/default';
import {render as amisRender} from '../../src/index';
import {makeEnv} from '../helper';
import 'jest-canvas-mock';

test('Renderer:bar-code', () => {
  const {container} = render(
    amisRender(
      {
        type: 'page',
        body: {
          type: 'barcode',
          value: 'amis'
        }
      },
      {},
      makeEnv({})
    )
  );

  expect(container).toMatchSnapshot();
});
