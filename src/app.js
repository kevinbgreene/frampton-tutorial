const Signal = Frampton.Signal;
const Union = Frampton.Data.Union;
const Record = Frampton.Data.Record;
const onSelector = Frampton.Events.onSelector;
const eventValue = Frampton.Events.eventValue;
const preventDefault = Frampton.Events.preventDefault;

const State = Record.create({
  selection : ''
});

const newState = (selection) =>
  State.set('selection', selection);

const Actions = Union.create({
  UpdateSelection : [ 'selection' ],
  SubmitSelection : []
});

const selectionChange =
  onSelector('change', '.tracking-select')
    .map(eventValue)
    .map(Actions.UpdateSelection);

const selectionSubmit =
  onSelector('submit', '.tracking-form')
    .map(preventDefault)
    .map(Actions.SubmitSelection);

const update = (state, msg) =>
  Actions.match({

    UpdateSelection : (selection) => {
      return state.set('selection', selection);
    },

    SubmitSelection : () => {
      return state;
    }

  }, msg);


// BUILD APPLICATION

const initialState = newState('');
const inputs = Signal.merge([selectionChange, selectionSubmit]);
const app = inputs.fold((acc, nextAction) => {
  return update(acc, nextAction);
}, initialState);

app.value((currentState) => {
  console.log('current state: ', currentState);
});
