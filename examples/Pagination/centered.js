
            import React from 'react';

            export default class CoreExample extends React.Component {

              render() {

              /* eslint-disable */
              // Disabled to ignore Dangerously Setting Inner HTML

                return <div dangerouslySetInnerHTML={{__html: ` <ul class="pagination text-center" role="navigation" aria-label="Pagination">
   <li class="pagination-previous disabled">Previous <span class="show-for-sr">page</span></li>
   <li class="current" aria-label="Page 1">1</li>
   <li><a href="javascript:void(0)" aria-label="Page 2">2</a></li>
   <li><a href="javascript:void(0)" aria-label="Page 3">3</a></li>
   <li><a href="javascript:void(0)" aria-label="Page 4">4</a></li>
   <li class="ellipsis" aria-hidden="true"></li>
   <li><a href="javascript:void(0)" aria-label="Page 12">12</a></li>
   <li><a href="javascript:void(0)" aria-label="Page 13">13</a></li>
   <li class="pagination-next"><a href="javascript:void(0)" aria-label="Next page">Next <span class="show-for-sr">page</span></a></li>
 </ul>`}} />

              /* eslint-enable */
              }
            }
          