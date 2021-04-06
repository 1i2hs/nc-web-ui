export function wrapClickHandlerWithStopPropagation(fn: (...args: any) => any) {
  return (...args: any) => {
    const event: Event = args[args.length - 1];
    event.stopPropagation();
    if (args.length > 1) {
      const parameter = args.slice(0, -1);
      fn(...parameter, event);
    } else {
      fn(event);
    }
  };
}

export function debounce(fn: (...args: any) => any, milliseconds: number) {
  let timer: number | undefined;
  return (...args: any) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      timer = undefined;
      fn(args);
    }, milliseconds);
  };
}
