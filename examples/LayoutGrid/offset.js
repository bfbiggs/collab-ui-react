
            import React from 'react';

            export default class CoreExample extends React.Component {

              render() {

              /* eslint-disable */
              // Disabled to ignore Dangerously Setting Inner HTML

                return <div dangerouslySetInnerHTML={{__html: `<div class="row">
  <div class="large-1 columns">1</div>
  <div class="large-11 columns">11</div>
</div>
<div class="row">
  <div class="large-1 columns">1</div>
  <div class="large-10 large-offset-1 columns">10, offset 1</div>
</div>
<div class="row">
  <div class="large-1 columns">1</div>
  <div class="large-9 large-offset-2 columns">9, offset 2</div>
</div>
<div class="row">
  <div class="large-1 columns">1</div>
  <div class="large-8 large-offset-3 columns">8, offset 3</div>
</div>`}} />

              /* eslint-enable */
              }
            }
          