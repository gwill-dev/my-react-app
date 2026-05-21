import {createRoot} from 'react-dom/client';


const myelement = (
  <table>
    <tr>
      <td>Name</td>
    </tr>
    <tr>
      <td>Amadi</td>
    </tr>
    <tr>
      <td>Godswill</td>
    </tr>
  </table>
)

createRoot(document.getElementById('root')).render(
  myelement
);