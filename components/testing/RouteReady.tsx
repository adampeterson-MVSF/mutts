/**
 * RouteReady - A test sentinel component that marks when a route has finished loading.
 *
 * This component renders a visible element that Playwright can detect as visible,
 * while remaining visually unobtrusive to users. Used for E2E test synchronization.
 */
export function RouteReady({ route }: { route: string }) {
  return (
    <div
      data-testid="route-ready"
      data-route={route}
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        top: 0,
        left: 0,
        opacity: 1, // Make visible for test detection
        pointerEvents: 'none',
        visibility: 'visible', // Ensure it's visible
      }}
    />
  );
}

