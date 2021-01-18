import React from 'react';
import lottie from 'lottie-web/build/player/lottie_light';

interface Props {
  eventListeners: Array<any>;
  options: any;
  height: string | number;
  width: string | number;
  isStopped?: boolean;
  isPaused?: boolean;
  speed?: number;
  segments?: Array<number>;
  direction?: number;
  ariaRole?: string;
  ariaLabel?: string;
  isClickToPauseDisabled?: boolean;
  title?: string;
  style?: any;
}

export class Lottie extends React.Component<Props> {
  static defaultProps = {
    eventListeners: [],
    isStopped: false,
    isPaused: false,
    speed: 1,
    ariaRole: 'button',
    ariaLabel: 'animation',
    isClickToPauseDisabled: false,
    title: '',
    style: {},
    autoplay: true,
    segments: [],
    loop: true,
  };

  options: any = {};
  anim: any;
  el: any;

  componentDidMount() {
    const { options, eventListeners } = this.props;

    const {
      loop,
      autoplay,
      animationData,
      rendererSettings,
      segments,
      path,
    } = options;

    this.options = {
      container: this.el,
      renderer: 'svg',
      loop,
      autoplay,
      segments,
      rendererSettings,
    };

    if (path) {
      this.options.path = path;
    } else if (animationData) {
      this.options.animationData = animationData;
    }

    this.options = { ...this.options, ...options };

    this.anim = lottie.loadAnimation(this.options);
    this.registerEvents(eventListeners);
  }

  componentWillUpdate(nextProps: Props /* , nextState */) {
    /* Recreate the animation handle if the data is changed */
    if (
      this.options.animationData !== nextProps.options.animationData ||
      this.options.path !== nextProps.options.path
    ) {
      this.deRegisterEvents(this.props.eventListeners);
      this.destroy();

      this.options = { ...this.options, ...nextProps.options };

      this.anim = lottie.loadAnimation(this.options);
      this.registerEvents(nextProps.eventListeners);
    }
  }

  componentDidUpdate() {
    if (this.props.isStopped) {
      this.stop();
    } else if (this.props.segments) {
      this.playSegments();
    } else {
      this.play();
    }

    this.pause();
    this.setSpeed();
    this.setDirection();
  }

  componentWillUnmount() {
    this.deRegisterEvents(this.props.eventListeners);
    this.destroy();
    this.options.animationData = null;
    this.anim = null;
  }

  setSpeed() {
    if (this.anim) {
      this.anim.setSpeed(this.props.speed);
    }
  }

  setDirection() {
    if (this.anim) {
      this.anim.setDirection(this.props.direction);
    }
  }

  play() {
    if (this.anim) {
      this.anim.play();
    }
  }

  playSegments() {
    if (this.anim) {
      this.anim.playSegments(this.props.segments);
    }
  }

  stop() {
    if (this.anim) {
      this.anim.stop();
    }
  }

  pause() {
    if (this.props.isPaused && !this.anim.isPaused) {
      this.anim.pause();
    } else if (!this.props.isPaused && this.anim.isPaused) {
      this.anim.pause();
    }
  }

  destroy() {
    this.anim.destroy();
  }

  registerEvents(eventListeners: Array<any>) {
    eventListeners.forEach((eventListener) => {
      this.anim.addEventListener(
        eventListener.eventName,
        eventListener.callback
      );
    });
  }

  deRegisterEvents(eventListeners: Array<any>) {
    eventListeners.forEach((eventListener) => {
      this.anim.removeEventListener(
        eventListener.eventName,
        eventListener.callback
      );
    });
  }

  handleClickToPause = () => {
    if (this.props.isClickToPauseDisabled) {
      return;
    }

    // The pause() method is for handling pausing by passing a prop isPaused
    // This method is for handling the ability to pause by clicking on the animation
    if (this.anim.isPaused) {
      this.anim.play();
    } else {
      this.anim.pause();
    }
  };

  render() {
    const { width, height, ariaRole, ariaLabel, title } = this.props;

    const lottieStyles = {
      width: getSize(width),
      height: getSize(height),
      overflow: 'hidden',
      margin: '0 auto',
      outline: 'none',
      ...this.props.style,
    };

    return (
      // Bug with eslint rules https://github.com/airbnb/javascript/issues/1374
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        ref={(c) => {
          this.el = c;
        }}
        style={lottieStyles}
        onClick={this.handleClickToPause}
        title={title}
        role={ariaRole}
        aria-label={ariaLabel}
        tabIndex={0}
      />
    );
  }
}

function getSize(initial: number | string): string {
  if (typeof initial === 'number') {
    return `${initial}px`;
  }

  return initial || '100%';
}
