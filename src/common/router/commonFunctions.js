import {StackActions, NavigationActions} from 'react-navigation';

const onModuleCardPress = (name, state) => {
  const {cardModules} = state;
  let resetAction = null;
  cardModules.forEach(module => {
    if (module.name === name) {
      resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: module.link})],
      });
    }
  });
  return resetAction;
};

const navigateTo = (linkName, options = {}) => {
  if (linkName.length)
    return StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: linkName, params: options}),
      ],
    });
};

export {onModuleCardPress, navigateTo};
