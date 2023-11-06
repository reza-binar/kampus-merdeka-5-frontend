// const tryFunc = (a) => (b) => a + b;

// const tryNormalFunc = (a, b) => a + b;

// console.log(tryFunc(10)(12));
// console.log(tryNormalFunc(10, 12));

const curry = (a) => (b, c) => {
    return a + b + c;
};
console.log(curry(10)(11, 2));

const registerLoginWithGoogleAction =
    (accessToken, navigate) => async (dispatch, getState) => {
        // code her if you want to async
        // dispatch -> to change the value of state/reducer
        // getState -> to get the current value of state/redu
    };
