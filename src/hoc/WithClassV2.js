import React, {Component} from 'react';

// const withClassV2 = (WrappedComponent, upClassName) => {
//     return (props) => (
//         <div className={upClassName}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

const withClassV2 = (WrappedComponent, upClassName) => {
    return class extends Component {
      render() {
        return (
            <div className={upClassName}>
            <WrappedComponent {...this.props} />
        </div>
        )
      }  
    }
}

export default withClassV2;
