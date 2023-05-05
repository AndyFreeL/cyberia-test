import '../styles/globals.scss'
import React, {FC} from 'react';
import {AppProps} from 'next/app'
import {wrapper} from "../store";

import {Provider} from 'react-redux';



// const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
//     <Component {...pageProps} />
// );
//export default wrapper.withRedux(WrappedApp);


const MyApp: FC<AppProps> = ({Component, ...rest}) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
};
export default MyApp;
