const Signal = Frampton.Signal;
const onSelector = Frampton.Events.onSelector;
const eventValue = Frampton.Events.eventValue;
const preventDefault = Frampton.Events.preventDefault;

const updateSelection = (selection) => ({
  name : 'UpdateSelection',
  data : selection
});

const submitSelection = () => ({
  name : 'SubmitSelection'
});

const selectionChange =
  onSelector('change', '.tracking-select')
    .map(eventValue)
    .map(updateSelection);

const selectionSubmit =
  onSelector('submit', '.tracking-form')
    .map(preventDefault)
    .map(submitSelection);

const newState = (selection) => ({
  currentSelection : selection
});

const update = (state, msg) => {
  switch (msg.name) {
    case 'UpdateSelection':
      return newState(msg.data);

    case 'SubmitSelection':
      return state;

    default:
      throw new Error('update received an unrecognized message');
  }
}


// BUILD APPLICATION

const initialState = newState('');
const inputs = Signal.merge([selectionChange, selectionSubmit]);
const app = inputs.fold((acc, nextAction) => {
  return update(acc, nextAction);
}, initialState);

app.value((currentState) => {
  console.log('current state: ', currentState);
});
