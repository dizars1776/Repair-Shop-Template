import React from 'react'

class ServiceCard extends React.Component {
  render() {
    return (
      <div className="flex h-full max-w-[280px] flex-col place-content-center gap-8 text-center text-white sm:text-left">
        <div className="">
          <img
            src={this.props.img}
            alt={this.props.imgAlt}
            width="280px"
            height="160px"
          />
        </div>
        <h3 className="mb-0 self-center text-sm font-bold uppercase sm:self-start">
          {this.props.title}
        </h3>
        <p className="text-sm">{this.props.mainText}</p>
      </div>
    )
  }
}

ServiceCard.defaultProps = {
  img: 'images/camera-service-1.jpg',
  imgAlt: 'alt text of image',
  title: 'Title',
  mainText: 'Main text',
}

export default ServiceCard
