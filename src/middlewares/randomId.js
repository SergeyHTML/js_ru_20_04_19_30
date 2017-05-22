export default store => next => action => {
    const {...rest} = action
    //через мидлвары будет проходить каждый экшин, но не каждому нужно генерить id
    next({
        ...rest,
        randomId: Date.now()
    })
}
