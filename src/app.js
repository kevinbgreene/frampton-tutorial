const Signal = Frampton.Signal;
const Union = Frampton.Data.Union;
const Record = Frampton.Data.Record;
const Task = Frampton.Data.Task;
const List = Frampton.List;
const App = Frampton.App;
const Http = Frampton.IO.Http;
const onSelector = Frampton.Events.onSelector;
const eventValue = Frampton.Events.eventValue;
const preventDefault = Frampton.Events.preventDefault;


// STATE

const State = Record.create({
  selection : ''
});

const init = (selection) => {
  const initialState = State.set('selection', selection);
  const initialTask = Task.never();
  return [initialState, initialTask];
};


// ACTIONS

const Actions = Union.create({
  UpdateSelection : [ 'selection' ],
  SubmitSelection : [],
  DisplaySuccess : [],
  DisplayError : []
});


// INPUTS

const selectionChange =
  onSelector('change', '.tracking-select')
    .map(eventValue)
    .map(Actions.UpdateSelection);

const selectionSubmit =
  onSelector('submit', '.tracking-form')
    .map(preventDefault)
    .map(Actions.SubmitSelection);


// TASKS

const validateSelection = (selection) => {
  return Task.create((sinks) => {
    const submitButton = document.querySelector('.submit-button');
    if (selection && selection.trim().length > 0) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', true);
    }
  });
};

const submitData = (selection) => {

  const task = Http.postJson('/api/submit', {
    selection : selection
  });

  const taskToAction =
    task
      .recover(Actions.DisplayError)
      .map(Actions.DisplaySuccess)

  return taskToAction;
};

const displayError = () => {
  return Task.create((sinks) => {
    window.alert('An error occurred while submitting selection');
  });
};

const displaySuccess = () => {
  return Task.create((sinks) => {
    window.alert('Selection successfully submitted');
  });
};


// UPDATE

const update = (msg, state) =>
  Actions.match({

    UpdateSelection : (selection) => {
      const newState = state.set('selection', selection);
      const newTask = validateSelection(selection);
      return [newState, newTask];
    },

    SubmitSelection : () => {
      const newTask = submitData(state.selection);
      return [state, newTask];
    },

    DisplaySuccess : () => {
      const newTask = displaySuccess();
      return [state, newTask];
    },

    DisplayError : () => {
      const newTask = displayError();
      return [state, newTask];
    }

  }, msg);


// INIT APPLICATION

const app = App.basic({
  init : init,
  update : update,
  inputs : [ selectionChange, selectionSubmit ]
});
