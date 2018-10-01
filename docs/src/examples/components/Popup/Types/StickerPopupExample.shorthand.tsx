import React from 'react'
import { Button, Popup, Grid, Image, Input, Menu } from '@stardust-ui/react'

const imageStyle = {
  padding: '5px',
}

const arrayOfImages = [
  [
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="ade"
      fluid
      src="public/images/avatar/large/ade.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="chris"
      fluid
      src="public/images/avatar/large/chris.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="christian"
      fluid
      src="public/images/avatar/large/christian.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="daniel"
      fluid
      src="public/images/avatar/large/daniel.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="elliot"
      fluid
      src="public/images/avatar/large/elliot.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="elyse"
      fluid
      src="public/images/avatar/large/elyse.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="helen"
      fluid
      src="public/images/avatar/large/helen.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="jenny"
      fluid
      src="public/images/avatar/large/jenny.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="joe"
      fluid
      src="public/images/avatar/large/joe.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="justen"
      fluid
      src="public/images/avatar/large/justen.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="kristy"
      fluid
      src="public/images/avatar/large/kristy.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="laura"
      fluid
      src="public/images/avatar/large/laura.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="matt"
      fluid
      src="public/images/avatar/large/matt.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="matthew"
      fluid
      src="public/images/avatar/large/matthew.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="molly"
      fluid
      src="public/images/avatar/large/molly.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="nan"
      fluid
      src="public/images/avatar/large/nan.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="nom"
      fluid
      src="public/images/avatar/large/nom.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="patrick"
      fluid
      src="public/images/avatar/large/patrick.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="rachel"
      fluid
      src="public/images/avatar/large/rachel.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="steve"
      fluid
      src="public/images/avatar/large/steve.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="stevie"
      fluid
      src="public/images/avatar/large/stevie.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="tom"
      fluid
      src="public/images/avatar/large/tom.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="veronika"
      fluid
      src="public/images/avatar/large/veronika.jpg"
    />,
  ],
  [
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="ade"
      fluid
      src="public/images/avatar/large/ade.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="chris"
      fluid
      src="public/images/avatar/large/chris.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="christian"
      fluid
      src="public/images/avatar/large/christian.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="daniel"
      fluid
      src="public/images/avatar/large/daniel.jpg"
    />,
  ],
  [
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="ade"
      fluid
      src="public/images/avatar/large/ade.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="chris"
      fluid
      src="public/images/avatar/large/chris.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="christian"
      fluid
      src="public/images/avatar/large/christian.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="daniel"
      fluid
      src="public/images/avatar/large/daniel.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="elliot"
      fluid
      src="public/images/avatar/large/elliot.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="elyse"
      fluid
      src="public/images/avatar/large/elyse.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="helen"
      fluid
      src="public/images/avatar/large/helen.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="jenny"
      fluid
      src="public/images/avatar/large/jenny.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="joe"
      fluid
      src="public/images/avatar/large/joe.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="justen"
      fluid
      src="public/images/avatar/large/justen.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="kristy"
      fluid
      src="public/images/avatar/large/kristy.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="laura"
      fluid
      src="public/images/avatar/large/laura.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="matt"
      fluid
      src="public/images/avatar/large/matt.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="matthew"
      fluid
      src="public/images/avatar/large/matthew.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="molly"
      fluid
      src="public/images/avatar/large/molly.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="nan"
      fluid
      src="public/images/avatar/large/nan.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="nom"
      fluid
      src="public/images/avatar/large/nom.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="patrick"
      fluid
      src="public/images/avatar/large/patrick.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="rachel"
      fluid
      src="public/images/avatar/large/rachel.png"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="steve"
      fluid
      src="public/images/avatar/large/steve.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="stevie"
      fluid
      src="public/images/avatar/large/stevie.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="tom"
      fluid
      src="public/images/avatar/large/tom.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="veronika"
      fluid
      src="public/images/avatar/large/veronika.jpg"
    />,
  ],
  [
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="stevie"
      fluid
      src="public/images/avatar/large/stevie.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="tom"
      fluid
      src="public/images/avatar/large/tom.jpg"
    />,
    <Image
      data-is-focusable="true"
      styles={imageStyle}
      key="veronika"
      fluid
      src="public/images/avatar/large/veronika.jpg"
    />,
  ],
]

class StickerPopup extends React.Component {
  state = { activeMenuIndex: 0 }

  onMenuItemClick = (e, props) => {
    this.setState({ activeMenuIndex: props.index })
  }

  items = [
    { key: 'popular', content: 'Popular', onClick: this.onMenuItemClick },
    { key: 'drama', content: 'Office drama', onClick: this.onMenuItemClick },
    { key: 'meme', content: 'Meme', onClick: this.onMenuItemClick },
    { key: 'design', content: 'Designers', onClick: this.onMenuItemClick },
    { key: 'dev', content: 'Dev', onClick: this.onMenuItemClick },
    { key: 'legal', content: 'Legal', onClick: this.onMenuItemClick },
    { key: 'squatch', content: 'Team squatch', onClick: this.onMenuItemClick },
  ]

  render() {
    return (
      <Popup
        position="below"
        trigger={<Button icon="sticky note" />}
        content={
          <div style={{ display: 'flex' }}>
            <div className="left-rail" style={{ paddingRight: '10px' }}>
              <Menu activeIndex={this.state.activeMenuIndex} items={this.items} vertical pointing />
            </div>
            <div className="right-rail">
              {
                <Input
                  styles={{ marginBottom: '5px' }}
                  fluid
                  icon="search"
                  placeholder="Search..."
                />
              }
              {<br />}
              {
                <Grid
                  styles={{ width: '300px' }}
                  columns="5"
                  content={
                    arrayOfImages[this.state.activeMenuIndex]
                      ? arrayOfImages[this.state.activeMenuIndex]
                      : arrayOfImages[0]
                  }
                />
              }
            </div>
          </div>
        }
      />
    )
  }
}

export default StickerPopup
