## Known issues

- One small condition is hard-coded to avoid white color for pen. This can be removed with an isolated state
- Persisting the last chosen Pen color is also a good UX feature that can be added
- The Highlighter does not have color support as of yet but can be added very easily combined with isolated state
- The canvas does not resize when the viewport resizes. This can be achieved by attaching `resize` events on the component
