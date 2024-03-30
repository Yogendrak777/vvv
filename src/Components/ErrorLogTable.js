
import React , {useState} from 'react';

const ErrorLogTable = () => {
    var errorLogs111 = [];
   
    if(window.location.pathname === '/QuarkU'){
        errorLogs111 = [
            { timestamp: '2023-05-19 10:23:45', message: 'Over Heat',errorLogs: '0x800000',sensorNumber: 'x45tyr' },
            { timestamp: '2023-05-20 14:56:12', message: 'Over stress',errorLogs: '0x800001',sensorNumber: 'x45tes' },
            { timestamp: '2023-05-21 09:08:30', message: 'Over Power',errorLogs: '0x800002',sensorNumber: 'x45tys' },
        ];
     
    }
    else if(window.location.pathname === '/nxp500'){
        errorLogs111 = [
            { timestamp: '2023-05-19 10:23:45', message: 'Over stress',errorLogs: '0x800003',sensorNumber: 'x45tyr' },
            { timestamp: '2023-05-20 14:56:12', message: 'Over Heat',errorLogs: '0x800004',sensorNumber: 'x45tes' },
            
        ];
    
    }
    else if(window.location.pathname === '/Irrway'){
        errorLogs111 = [
            { timestamp: '2023-05-19 10:23:45', message: 'Over Heat',errorLogs: '0x800005',sensorNumber: 'x45tyr' },
          
        ];
     
    }
    else if(window.location.pathname === '/Moptro'){
        errorLogs111 = [
            { timestamp: '2023-05-19 10:23:45', message: 'Over Heat',errorLogs: '0x800006',sensorNumber: 'x45tyr' },
            { timestamp: '2023-05-20 14:56:12', message: 'Over Power',errorLogs: '0x800007',sensorNumber: 'x45tes' },
          
        ];
      
    }
    else if(window.location.pathname === '/nxp700'){
        errorLogs111 = [
            { timestamp: '2023-05-19 10:23:45', message: 'Over Power',errorLogs: '0x800008',sensorNumber: 'x45tyr' },
           
        ];
      
    }
    

    const [errorLogs, setErrorLogs] = useState(errorLogs111);
  return (
    <div className='Table'>
    <table style={{ border: '1px solid #40475D', borderCollapse: 'collapse' }}>
      <thead className='ErrorsLogs'>
        <tr >
          <th style={{ border: '1px solid #40475D', padding: '15px' }}>ErrorCode</th>
          <th style={{ border: '1px solid #40475D', padding: '15px' }}>TimeStamp</th>
          <th style={{ border: '1px solid #40475D', padding: '15px' }}>Message</th>
          <th style={{ border: '1px solid #40475D', padding: '15px' }}>SensorNumber</th>
        </tr>
      </thead>
      <tbody className='ErrorsLogsbody'>
      {errorLogs.map((log ) => (
          <tr>
            <td style={{ border: '1px solid #40475D', padding: '5px' }}>{log.errorLogs}</td>
            <td style={{ border: '1px solid #40475D', padding: '5px' }}>{log.timestamp}</td>
            <td style={{ border: '1px solid #40475D', padding: '5px' }}>{log.message}</td>
            <td style={{ border: '1px solid #40475D', padding: '5px' }}>{log.sensorNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ErrorLogTable;
