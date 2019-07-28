import * as React from 'react';
import ScrollProgressRead from '../../dist/index.js';

interface IState {
  backgroundColor?: string;
  barColor?: string;
  height?: string;
}

const initialState: IState = {
  backgroundColor: '#CCC',
  barColor: 'red',
  height: '10px',
};

const reducer = (state: IState, action: {type: string; payload: {}}) => {
  switch (action.type) {
    case 'update':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

const App: React.FC<{}> = () => {
  const refContainer = React.useRef();
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const update = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.currentTarget;
    const payload: IState = {[name]: value};
    dispatch({type: 'update', payload});
  };
  return (
    <>
      <div style={{margin: 0, padding: 0, position: 'fixed', top: 0}}>
        <ScrollProgressRead refTarget={refContainer} {...state} />
      </div>
      <div style={{margin: 0, padding: 0, position: 'fixed', bottom: 0}}>
        <ScrollProgressRead
          target="read-container"
          height="20px"
          barColor="blue"
        />
      </div>
      <div style={{margin: 0, padding: 0, position: 'fixed', bottom: '20px'}}>
        <ScrollProgressRead height="10px" barColor="orange" />
      </div>
      <div
        style={{
          maxWidth: '700px',
          fontSize: '1.2rem',
          margin: '20px auto',
          padding: '1rem',
        }}
      >
        <h1>React Scroll Progress Read</h1>
        <p>
          <ul>
            <li>The top bar target element with ref()</li>
            <li>The orange bottom bar target the document</li>
            <li>The blue bottom bar target element by ID</li>
          </ul>
        </p>
        <div>
          <select onChange={update} name="barColor">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="orange">orange</option>
          </select>
          <select onChange={update} name="backgroundColor">
            <option value="grey">grey</option>
            <option value="gold">gold</option>
            <option value="#AAA">#AAA</option>
          </select>
          <select onChange={update} name="height">
            <option value="1px">1px</option>
            <option value="5px">5px</option>
            <option value="10px">10px</option>
            <option value="15px">15px</option>
            <option value="20px">20px</option>
          </select>
        </div>
        <p ref={refContainer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        </p>
        <h2>Target Container</h2>
        <p id="read-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non
          faceret, si in voluptate summum bonum poneret. Illud quaero, quid ei,
          qui in voluptate summum bonum ponat, consentaneum sit dicere. Quod
          quidem iam fit etiam in Academia. Sit hoc ultimum bonorum, quod nunc a
          me defenditur; Duo Reges: constructio interrete. Tum Piso: Quoniam
          igitur aliquid omnes, quid Lucius noster? Primum quid tu dicis breve?
        </p>
      </div>
      <footer style={{height: '400px', background: '#CCC'}} />
    </>
  );
};

export default React.memo(App);
