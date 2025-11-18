# Tab Iframe Investigation App

This app is designed to investigate why switching between tabs doesn't trigger Chrome's "Leave Site" prompt when inputs change in iframes.

## Structure

- **Main App** (port 3000): Contains two tabs using Semantic UI React
- **Iframe App 1** (port 3001): First React app with form inputs loaded in first tab
- **Iframe App 2** (port 3002): Second React app with form inputs loaded in second tab

## Quick Start

```bash
# Install dependencies
make install

# Start all apps (main + both iframes)
make dev-all
```

Then open http://localhost:3000 in Chrome.

## Investigation Notes

### The Problem

When you have form inputs inside an iframe and switch tabs in the parent page, Chrome's "Leave Site" prompt (triggered by `beforeunload` event) does not appear, even if the form has unsaved changes.

### Why This Happens

1. **Tab switching is not navigation**: When you switch tabs using Semantic UI's Tab component, you're not navigating away from the page. The iframe content is simply hidden/shown, but the iframe itself remains loaded.

2. **beforeunload only fires on actual navigation**: The `beforeunload` event only fires when:
   - The user navigates to a different URL
   - The user closes the tab/window
   - The page is being unloaded from memory

3. **Iframe isolation**: The `beforeunload` handler in the iframe only knows about navigation within the iframe's context, not about tab changes in the parent page.

### Testing

1. Open the app in Chrome
2. Make changes to the form in Tab 1 (Iframe App 1)
3. Try switching to Tab 2 - **No prompt appears**
4. Try closing the tab or navigating to a different URL - **Prompt should appear**

### Potential Solutions

1. **Intercept tab change in parent**: Add a handler to the tab change event in the parent app that checks if iframes have unsaved changes
2. **Use postMessage**: Have iframes communicate their "dirty" state to the parent via `postMessage`
3. **Custom confirmation dialog**: Instead of relying on `beforeunload`, show a custom confirmation dialog when switching tabs

## Available Commands

See `make help` for all available commands.

