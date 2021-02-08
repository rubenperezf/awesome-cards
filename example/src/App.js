import React, { useState } from 'react'

import { AwesomeCard } from 'awesome-cards'
import 'awesome-cards/dist/index.css'

const App = () => {
  const [loading, setLoading] = useState(false)
  return (
    <AwesomeCard
      // cardHeight='900px'
      //cardWidth="600px"
      // tooltipText='test'
      // informationIcon
      // avatarBackground='red'
      avatarImage
      // iconColor='blue'
      topImageSrc='http://www.slashfilm.com/wp/wp-content/images/homer.jpg'
      title='Awesome card'
      subtitle='Use this awesome library'
      text='Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Curabitu'
      mainButtonText='enter'
      // buttonBacgroundColor='yellow'
      // buttonTextColor='blue'
      // mainButtonSpinner={loading}
      // mainButtonLinear={loading}
      mainButtonFunc={() => setLoading(!loading)}
      mainButtonDisabled={loading}
      linearProgressColor='yellow'
    />
  )
}

export default App
