export default store => next => action => {
    const {...rest} = action
    next({
        ...rest,
        randomId: Date.now()
    })
}