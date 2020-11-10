const inject = (originals, injections) => {
    injections.sort((a, b) => a.index - b.index);
    const result = [];

    injections.reduce((partial, injection, index) => {
        const currentOriginalsCount = partial.length - index;
        const originalsSlice = originals.slice(currentOriginalsCount, injection.index);
        partial.push(...originalsSlice, injection.content);
        return partial;
    }, result);

    const tailStartIndex = injections[injections.length - 1].index;
    const tails = originals.slice(tailStartIndex, originals.length);

    result.push(...tails);
    return result;
}
export {inject};
