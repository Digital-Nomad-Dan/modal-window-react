import _ from 'lodash';


const modals = [
  { 
    
    id: 1,
    title: 'Welcome 1 1 1',
    title1: 'Welcome 1 1 1',
    text: 'Text 3'
  }, 

  { 
    
    id: 2,
    title: 'Welcome 2 2 2',
    title1: 'Welcome 4 2 2',
    text: 'Text 4'
  }, 

  { 
    
    id: 3,
    title: 'Welcome 3 3 3',
    title1: 'Welcome 3 3 3',
    text: 'Text 5'
  }, 

  { 
    
    id: 4,
    title: 'Welcome 4 4 4',
    title1: 'Welcome 3 3 3',
    text: 'Text 2'
  }, 

  { 
    
    id: 5,
    title: 'Welcome 5 5 5',
    title1: 'Welcome 3 3 3',
    text: 'Text 1'
  }, 
  
  
];

const App = ({store, setStore}) => {
  return (
    <div id="app">
      <h1>Modal</h1>
      <div className="main">
        {modals.map((modal, index) => {
          return (
            <button
              key={`modal-${index}`}
              onClick={() => {
                const newStore = _.cloneDeep(store);
                _.set(newStore, `modalProperty.showModal`, true);
                _.set(newStore, `modalProperty.title`, modal.title);
                _.set(newStore, `modalProperty.title1`, modal.title1);
                _.set(newStore, ` modalText`, modal.text);
                setStore(newStore);
                  
              }}
            >
              Modal {modal.id}
            </button>
          );
        })
      }


    </div>
    </div>
  );
};

export default App;
