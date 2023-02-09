import React from 'react'
import SocialProfile from './socialProfile/SocialProfile'

class SocialNetworking extends React.Component {
  render() {
    const themeData = this.props.themeData.social
    return (
      <section id="social-media" className=" pt-20">
        <div className="container mx-auto flex flex-col items-center gap-y-12 overflow-visible">
          <h2 className="self-start text-6xl sm:text-7xl">Social Networking</h2>
          {themeData ? (
            <SocialProfile themeData={themeData} />
          ) : (
            <SocialProfile />
          )}
        </div>
      </section>
    )
  }
}

export default SocialNetworking
