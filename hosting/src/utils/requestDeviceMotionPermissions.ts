import { isSafari } from 'react-device-detect';
export enum DeviceMotionError {
  IOS_13_PERMISSION_DENIED,
  IOS_12_PERMISSION_DENIED,
  UNSUPPORTED,
}

export function requestDeviceMotionPermissions(
  onSuccess: Function,
  onError: (errorType: DeviceMotionError) => void
) {
  if (
    window.DeviceMotionEvent !== undefined &&
    typeof window.DeviceMotionEvent.requestPermission === 'function'
  ) {
    window.DeviceMotionEvent.requestPermission().then((response) => {
      if (response === 'granted') {
        onSuccess();
      } else {
        onError(DeviceMotionError.IOS_13_PERMISSION_DENIED);
      }
    });
  } else if (isSafari) {
    onError(DeviceMotionError.IOS_12_PERMISSION_DENIED);
  } else {
    onError(DeviceMotionError.UNSUPPORTED);
  }
}
