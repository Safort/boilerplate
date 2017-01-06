export default () => next => action => {
  console.log(`Action type: ${action.type}`, action);

  return next(action);
};
