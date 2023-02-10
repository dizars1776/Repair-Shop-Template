import React from 'react'
import { Map, Marker } from 'pigeon-maps'

class MyMap extends React.Component {
  render() {
    const themeData = this.props.themeData ? this.props.themeData : this.props
    const url = themeData.markerUrl
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    const onClickUrl = () => {
      return () => openInNewTab(url)
    }
    return (
      <Map
        defaultCenter={[themeData.mapLat, themeData.mapLong]}
        defaultZoom={themeData.mapZoom}
        mouseEvents={false}
        touchEvents={false}
        metaWheelZoom={false}
        twoFingerDrag={true}
      >
        <Marker
          width={50}
          anchor={[35.51642, 24.01796]}
          color="#075985"
          onClick={onClickUrl(url)}
        />
      </Map>
    )
  }
}

export default MyMap
