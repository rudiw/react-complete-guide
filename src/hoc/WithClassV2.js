import React, {Component} from 'react';

// const withClassV2 = (WrappedComponent, upClassName) => {
//     return (props) => (
//         <div className={upClassName}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

const withClassV2 = (WrappedComponent, upClassName) => {
    const WithClassV2 = class extends Component {
      render() {
        return (
            <div className={upClassName}>
            <WrappedComponent {...this.props} ref={this.props.forwardedRef}/>
        </div>
        )
      }  
    }

    return React.forwardRef( (props, ref) => {
      return <WithClassV2 {...props} forwardedRef={ref} />;
    });
}

export default withClassV2;
