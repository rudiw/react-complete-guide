import React from 'react';

const withClassV2 = (WrappedComponent, upClassName) => {
    return (props) => (
        <div className={upClassName}>
            <WrappedComponent />
        </div>
    )
}

export default withClassV2;
