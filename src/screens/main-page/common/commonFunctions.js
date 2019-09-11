const onModuleCardPress = (name, state, navigate) => {
    const {cardModules} = state;
    cardModules.forEach(module => {
        if (module.name === name) {
            navigate(module.link);
        }
    });
};

export default onModuleCardPress;