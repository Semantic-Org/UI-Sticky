### Version 2.1.5 - Nov 1, 2015

- **Sticky** - Fixes bug where sticky would stick at incorrect times when using a different scroll container than `body` and scrollTop is not 0 on page load.
- **Sticky** - Fixed issue where pressing home/end button would cause sticky to break due to internal logic not allowing immediate jump from bottom attached to top attached, experienced most likely when pressing "home" or "end" key [#3011](https://github.com/Semantic-Org/Semantic-UI/issues/3011)

#### Bugs

- **Sticky** - Sticky now sets width and height with `!important` to avoid inheritance issues in some cases **Thanks @lauri-elevant** [#2710](https://github.com/Semantic-Org/Semantic-UI/issues/2710)

### Version 2.0.4 - July 17, 2015

- **Sticky** - Fixed `sticky` element that cannot fit in viewport not scrolling correctly when fixed to viewport [#2605](https://github.com/Semantic-Org/Semantic-UI/issues/2605)
- **Sticky** - Fixed `sticky` content jumping from `fixed` to `bount bottom` when scroll position has surpassed bottom of container during page refresh.
- **Sticky** - Sticky no longer uses `bottomPadding` to determine bottom edge of container.

### Version 2.0.0 - June 30, 2015

- **Visibility** - Visibility and sticky now use a more performant [pub/sub pattern](http://davidwalsh.name/pubsub-javascript) that will only attach a single event to context `scroll`.
- **Sticky** - Sticky now internally caches current scroll position when `cantFit = true` to avoid getting DOM property  on scroll.
- **Visibility/Sticky** - Visibility and sticky now refresh automatically after page content loading to deal with changes in position from images loading
- **Visibility/Sticky** - Visibility now uses pub/sub pattern to greatly improve scroll performance when attaching multiple events
- **Sticky** - Fix issue with sticky content scroll css transition causing element to scroll too slowly when cannot fit on screen.
- **Sticky** - Fix issues when `pushing: true` with sticky content having incorrect bottom spacing, when container has bottom padding
- **Sticky** - Fixed issue with sticky content animating width on display in some cases.

### Version 1.12.0 - April 13, 2015

- **Sticky** - Adds sticky module from `2.x` branch. Sticky elements now use pub/sub with drastically improved performance. Sticky elements that do not fit on page will now scroll at the same speed as the page is scrolled instead of slower.

### Version 1.11.7 - April 13, 2015

- **Sticky** - Fixes errant `console.log` statement appearing in source

### Version 1.11.0 - March 3, 2015

- **Sticky** - Fixed sticky position when page loads and content is below sticky content.
- **Sticky** - Fix bottom attached position not adjusting for bottom padding on container element

### Version 1.8.0 - January 23, 2015

- **Sticky** - Fixes issue with container size not being set explicitly on rail due to improper method renaming

### Version 0.1.0 - Sep 25, 2013