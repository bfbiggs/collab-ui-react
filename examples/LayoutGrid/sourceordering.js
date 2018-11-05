
            import React from 'react';

            export default class CoreExample extends React.Component {

              render() {

              /* eslint-disable */
              // Disabled to ignore Dangerously Setting Inner HTML

                return <div dangerouslySetInnerHTML={{__html: `<div class="row">
  <div class="small-10 small-push-2 columns">10</div>
  <div class="small-2 small-pull-10 columns">2, last</div>
</div>
<div class="row">
  <div class="large-9 large-push-3 columns">9</div>
  <div class="large-3 large-pull-9 columns">3, last</div>
</div>
<div class="row">
  <div class="large-8 large-push-4 columns">8</div>
  <div class="large-4 large-pull-8 columns">4, last</div>
</div>
<div class="row">
  <div class="small-5 small-push-7 medium-7 medium-push-5 columns">7</div>
  <div class="small-7 small-pull-5 medium-5 medium-pull-7 columns">5, last</div>
</div>
<div class="row">
  <div class="medium-6 medium-push-6 columns">6</div>
  <div class="medium-6 medium-pull-6 columns">6, last</div>
</div>`}} />

              /* eslint-enable */
              }
            }
          