import {StackActions, NavigationActions} from 'react-navigation';

const navigateTo = (linkName, props, options = {}) => {
  const {navigate} = props.navigation;
  if (linkName.length) navigate({routeName: linkName, params: options});
};

const navigateToWithReset = (linkName, options = {}) => {
  if (linkName.length)
    return StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: linkName, params: options}),
      ],
    });
};

export {navigateTo, navigateToWithReset};
