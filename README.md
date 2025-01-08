# Expo Linking API Deep Link Issue

This repository demonstrates a bug in Expo's `Linking` API related to handling deep links with special characters in their query parameters.  The issue is that `Linking.getInitialURL()` may return `null` or an incomplete URL under certain conditions, preventing correct navigation within the app.

## Bug Description

The app fails to properly handle deep links containing '+' or '%' characters in the query parameters. The `getInitialURL()` method either returns `null` or a truncated URL, leading to incorrect state management and navigation within the app.

## Reproduction

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on a physical device or emulator.
4. Try opening a deep link containing '+' or '%' in the query parameters (see example in `bug.js`).
5. Observe the inconsistent behavior of `getInitialURL()` and the app's inability to correctly handle the deep link.

## Solution

The solution involves URL encoding the query parameters before constructing the deep link and URL decoding them after retrieval using `Linking.getInitialURL()`.  This ensures that the special characters are handled correctly by the API.

## Note

The bug's reproducibility seems dependent on various factors, including the device and operating system version, which makes it difficult to consistently reproduce across all environments.