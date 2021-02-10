# awesome-cards

> Every one need a card for his project

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

  const [loading, setLoading] = useState(false)
  return (
    <AwesomeCard />
```

## Props

  <table>
    <thead>
      <tr>
        <th>Prop</th>
        <th>Default Value</th>
        <th>Value Type</th>
        <th>Explanation</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>cardHeight</td>
            <td>500px</td>
            <td>pixels</td>
            <td>card height</td>
        </tr>
        <tr>
            <td>cardWidth</td>
            <td>400px</td>
            <td>pixels</td>
            <td>card width</td>
        </tr>    
        <tr>
            <td>informationIcon</td>
            <td>false</td>
            <td>boolean</td>
            <td>Information Icon</td>
        </tr>
          <tr>
            <td>iconColor</td>
            <td>red</td>
            <td>a color</td>
            <td>Change the icon color</td>
        </tr>
        <tr>
            <td>toottipText</td>
            <td>empty string</td>
            <td>string</td>
            <td>if we like a tooltip for or information icon</td>
        </tr>
        <tr>
            <td>topIMageSrc</td>
            <td>no image</td>
            <td>image link</td>
            <td>card top image</td>
        </tr>
        <tr>
            <td>avatarImage</td>
            <td>false</td>
            <td>boolean</td>
            <td>if it is true the top image is round and center</td>
        </tr>
        <tr>
            <td>avatarBagroundColor</td>
            <td>'#F5F5F5'</td>
            <td>color</td>
            <td>avatar background color</td>
        </tr>
        <tr>
            <td>title</td>
            <td>empty string</td>
            <td>string</td>
            <td>card title</td>
        </tr>
        <tr>
            <td>subtitle</td>
            <td>empty string</td>
            <td>string</td>
            <td>card subtitle</td>
        </tr>
          <tr>
            <td>text</td>
            <td>empty string</td>
            <td>string</td>
            <td>card text</td>
        </tr>
          <tr>
            <td>mainButtonText</td>
            <td>empty string</td>
            <td>string</td>
            <td>button text</td>
        </tr>
        <tr>
            <td>buttonBackgroundColor</td>
            <td>red</td>
            <td>color</td>
            <td>button color</td>
        </tr>
        <tr>
            <td>buttonTextColor</td>
            <td>white</td>
            <td>color</td>
            <td>button text color</td>
        </tr>
        <tr>
            <td>mainButtonSpinner</td>
            <td>none</td>
            <td>needs a state</td>
            <td>create a state to show the spinner</td>
        </tr>
          <tr>
            <td>mainButtonLinear</td>
            <td>none</td>
            <td>needs a state</td>
            <td>create a state to show the linear</td>
        </tr>
                        <tr>
            <td>mainButtonFunc</td>
            <td>none</td>
            <td>onClick function</td>
            <td>onClick function for the button</td>
        </tr>
                  <tr>
            <td>mainButtonDisabled</td>
            <td>none</td>
            <td>needs a state</td>
            <td>create a state to disable the button</td>
        </tr>
    </tbody>
  </table>

## License

MIT © [rubenperezf](https://github.com/rubenperezf)
