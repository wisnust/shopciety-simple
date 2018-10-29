import React, { Component } from "react";
import "./index.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe6b92f88f55824e64a1bae15f5bf52a&auto=format&fit=crop&w=800&q=80",
    altText: "The Best Electronics",
    caption: "The Best Electronic"
  },
  {
    src:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23a211dc09151d3ae0c78308b296b7b5&auto=format&fit=crop&w=750&q=80",
    altText: "Checkout Our Fashion Trends",
    caption: "Checkout Our Fashion Trends"
  },
  {
    src:
      "https://images.unsplash.com/photo-1512429234305-12fe5b0b0f07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05965fb7548a840e0794f89572004dc0&auto=format&fit=crop&w=1334&q=80",
    altText: "The Best Workspace Tools",
    caption: "The Best Workspace Tools"
  }
];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="main-carousel"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Slider;
