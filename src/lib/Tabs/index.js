import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tabs is container component for rendering tabs and tab-panels
 * @category layout
 * @component tabs
 * @variations collab-ui-react
 *
 */

class Tabs extends React.Component {
  static displayName = 'Tabs';

  state = {
    activeIndex: 0,
    focus: this.props.focus
  };

  getChildContext = () => {
    return {
      activeIndex: this.state.activeIndex,
      onActivate: index => this.setSelected(index),
      onFocus: index => this.setState({ focus: index }),
      focus: this.state.focus,
    };
  };

  componentWillMount() {
    const tabsCount = this.getChildrenElements('TabList');
    const panelsCount = this.getChildrenElements('TabContent');

    if (tabsCount !== panelsCount) {
      throw new Error(`There should be an equal number of Tabs and TabPanels.
      Received ${tabsCount} Tabs and ${panelsCount} TabPanels.`);
    }
  }

  getMobileListItems = () => {
    return React.Children.map(this.props.children, child => {
      if (child.type.displayName === 'TopbarNav') {
        return child.props.children;
      }
    });
  };

  getChildrenElements = name => {
    let elementCount = 0;

    React.Children.forEach(this.props.children, child => {
      if (child.type.displayName === name) {
        return child.props.children.length
          ? (elementCount += child.props.children.length)
          : elementCount++;
      }
    });

    return elementCount;
  };

  setSelected = index => {
    // Don't do anything if index is the same or outside of the bounds
    if (
      index === this.state.activeIndex ||
      index < 0 ||
      index >= this.getChildrenElements('TabList')
    )
      return;

    // Keep reference to last index for event handler
    const last = this.state.activeIndex;

    // Update state with selected index
    this.setState({ activeIndex: index });
    // Call change event handler
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(index, last);
    }
  };

  render() {
    const { children, className, tabType, justified } = this.props;

    const cloneChildren = React.Children.map(children, child => {
      if (child.type.displayName === 'TabContent') {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex,
        });
      } else if (child.type.displayName === 'TabList') {
        return React.cloneElement(child, {
          role: 'tab'
        });
      } else {
        return child;
      }
    });

    return (
      <div
        className={
        'cui-tab' +
        `${(tabType && ` cui-tab--${tabType}`) || ''}` +
        `${(justified && ` cui-tab--justified`) || ''}` +
        (className && ` ${className}`) || ''}
        type={tabType}
        >
        {cloneChildren}
      </div>
    );
  }
}

Tabs.childContextTypes = {
  focus: PropTypes.number,
  activeIndex: PropTypes.number,
  onActivate: PropTypes.func,
  onFocus: PropTypes.func,
};

Tabs.propTypes = {
  /**
   * Children of Tab and TabContent required to work
   */
  children: PropTypes.node.isRequired,
  /**
   * optional className prop type
   */
  className: PropTypes.string,
  /**
   * optional onSelect prop type defaults to navigating to other panes
   */
  onSelect: PropTypes.func,
  /**
   * optional tabType prop type defaults to horizontal
   */
  tabType: PropTypes.oneOf(['pills']),
  /**
   * optional justified prop type
   */
  justified: PropTypes.bool,
  /**
   * optional focusIndex prop
   */
  focus: PropTypes.number
};

Tabs.defaultProps = {
  active: false,
  tabType: 'pills',
  className: '',
  justified: false,
  focus: 0
};

export default Tabs;

/**
* @name Tabs Pills
*
* @category layout
* @component tabs
* @section horizontal-pills
*
* @js

 import { Tab, TabContent, TabPane, TabList } from '@collab-ui/react';

 export default function() {
  return (
    <div className='row'>
      <div className='columns'>
        <Tabs>
          <TabList>
            <Tab
              heading='First Tab'
            />
            <Tab
              heading='Second Tab'
            />
            <Tab
              heading='Third Tab'
            />
          </TabList>
          <TabContent>
            <TabPane>
              Testing 1
            </TabPane>
            <TabPane>
              Testing 2
            </TabPane>
            <TabPane>
              Testing 3
            </TabPane>
          </TabContent>
        </Tabs>
      </div>
    </div>
  );
}
**/

/**
* @name Tabs Pills (Justified)
*
* @category layout
* @component tabs
* @section horizontal-pills-justified
*
* @js

 import { Tab, TabContent, TabPane, TabList } from '@collab-ui/react';

 export default function() {
  return (

    <div className='row'>
      <div className='columns'>
        <Tabs justified>
          <TabList>
            <Tab
              heading='First Tab'
            />
            <Tab
              heading='Second Tab'
            />
            <Tab
              heading='Third Tab'
            />
          </TabList>
          <TabContent>
            <TabPane>
              Testing 1
            </TabPane>
            <TabPane>
              Testing 2
            </TabPane>
            <TabPane>
              Testing 3
            </TabPane>
          </TabContent>
        </Tabs>
      </div>
    </div>
  );
}
**/
