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