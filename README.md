# awesome-cards

> Everyone needs a card for their project

[![NPM](https://img.shields.io/npm/v/awesome-cards.svg)](https://www.npmjs.com/package/awesome-cards) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save awesome-cards
```

## Usage

```jsx
import React, { Component } from 'react'

import AwesomeCards from 'awesome-cards'
import 'awesome-cards/dist/index.css'

export const MyComponent = () => {
  const props = { /* see props section below */ }
  
  return (
    <AwesomeCard {...props} />
  )
}
```

## Props

| Prop                    | Default Value | Type       | Description                                    |
| ---------------------   | ------------- | ---------- | ---------------------------------------------- |
| `avatarBackgroundColor` | `"#F5F5F5"`   | string     | Avatar background color                        |
| `avatarImage`           | `false`       | boolean    | If true, the top image is rounded and centered |
| `buttonBackgroundColor` | `"red"`       | string     | Button color                                   |
| `buttonTextColor`       | `"white"`     | string     | Button text color                              |
| `cardHeight`            | `"500px"`     | string     | Card height                                    |
| `cardWidth`             | `"400px"`     | string     | Card width                                     |
| `iconColor`             | `"red"`       | string     | Change the icon color                          |
| `informationIcon`       | `false`       | boolean    | Information icon                               |
| `mainButtonDisabled`    | `false`       | boolean    | Whether or not to disable the button           |
| `mainButtonFunc`        | `undefined`   | function   | Callback function for the button               |
| `mainButtonLinear`      | `false`       | boolean    | Whether or not to show the linear progress     |
| `mainButtonSpinner`     | `false`       | boolean    | Whether or not to show the spinner             |
| `mainButtonText`        | `""`          | string     | Button text                                    |
| `subTitle`              | `""`          | string     | Card subtitle                                  |
| `text`                  | `""`          | string     | Card text                                      |
| `title`                 | `""`          | string     | Card title                                     |
| `tooltipText`           | `""`          | string     | For a tooltip or information icon              |
| `topImageSrc`           | `undefined`   | string     | Card top image                                 |

## License

MIT © [rubenperezf](https://github.com/rubenperezf)
