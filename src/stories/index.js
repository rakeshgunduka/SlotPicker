import React from 'react';
import { storiesOf } from '@storybook/react';

import App from "../App";
import { processData } from "../utils";

const data = require('../data.json');

storiesOf("Choose", module)
  .add("slot", () => <App data={processData(data)} title={data.title} />)
