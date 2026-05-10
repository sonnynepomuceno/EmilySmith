import { useEffect } from 'react'

/**
 * Lightweight smooth-scroll: lets the browser handle native scroll speed
 * (no lerp interception), just ensures programmatic scrollTo calls are smooth.
 */
export function useSmoothScroll({ disabled = false } = {}) {
  useEffect(() => {
    if (disabled) return
    // Native CSS scroll-behavior:smooth is already set on html.
    // Nothing extra needed — removing the lerp interceptor that was causing lag.
  }, [disabled])
}
