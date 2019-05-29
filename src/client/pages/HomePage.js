import React from 'react'
import { Helmet } from 'react-helmet'

const HomePage = () => (
    <div>
        <h1>Klk con KLK</h1>
        <button onClick={() => console.log('a')}>Press me</button>
        <Helmet>
            <title>Tu maldita mai....</title>
            <meta property="og:title" content="klk" />
        </Helmet>
    </div>
)

export default { component: HomePage }
