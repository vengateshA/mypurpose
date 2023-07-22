import React, { useState, useEffect } from 'react';

const BluetoothExample = () => {
  const [port, setPort] = useState(null);
  const [reader, setReader] = useState(null);
  const [inputDone, setInputDone] = useState(null);
  const [outputDone, setOutputDone] = useState(null);
  const [inputStream, setInputStream] = useState(null);
  const [outputStream, setOutputStream] = useState(null);
  const [isIbeaconAdv, setIsIbeaconAdv] = useState(false);
  const [isEddystonesAdv, setIsEddystonesAdv] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [log, setLog] = useState('');
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const notSupported = document.getElementById('notSupported');
    notSupported.classList.toggle('hidden', !('serial' in navigator));
  }, []);

  const connect = async () => {
    try {
      const newPort = await navigator.serial.requestPort();
      await newPort.open({ baudRate: 9600 });

      const newReader = newPort.readable.getReader();
      setReader(newReader);
      readLoop(newReader);

      setPort(newPort);
      setConnected(true);
      setLog('Dongle Connected!');
    } catch (error) {
      console.error('[connect] Error:', error);
    }
  };

  const disconnect = async () => {
    try {
      if (reader) {
        await reader.cancel();
        setReader(null);
      }

      await port.close();
      setPort(null);
      setConnected(false);
      setLog('Dongle Disconnected!');
    } catch (error) {
      console.error('[disconnect] Error:', error);
    }
  };

  const clickConnect = async () => {
    setLog('');
    if (port) {
      if (isEddystonesAdv || isIbeaconAdv) {
        writeCmd('AT+ADVSTOP');
        setIsIbeaconAdv(false);
        setIsEddystonesAdv(false);
      }
      if (isScanning) {
        writeCmd('\x03');
        setIsScanning(false);
      }
      await disconnect();
      return;
    }
    await connect();
  };

  const clickIbeacon = () => {
    console.log('IBEACON BUTTON PRESSED');

    if (isIbeaconAdv) {
      writeCmd('AT+ADVSTOP');
      setIsIbeaconAdv(false);
      return;
    }

    writeCmd('AT+ADVDATAI=5f2dd896-b886-4549-ae01-e41acd7a354a0203010400');
    setTimeout(() => {
      writeCmd('AT+ADVSTART=0;200;3000;0;');
    }, 500);

    setIsIbeaconAdv(true);
  };

  const clickEddystone = () => {
    console.log('EDDYSTONE BUTTON PRESSED');

    if (isEddystonesAdv) {
      writeCmd('AT+ADVSTOP');
      setIsEddystonesAdv(false);
      return;
    }

    writeCmd('AT+ADVDATA=03:03:aa:fe 0d:16:aa:fe:10:00:03:67:6f:6f:67:6c:65:07');
    setTimeout(() => {
      writeCmd('AT+ADVSTART=0;200;3000;0;');
    }, 500);

    setIsEddystonesAdv(true);
  };

  const clickScan = () => {
    console.log('SCAN BUTTON PRESSED');

    if (isScanning) {
      writeCmd('\x03');
      setTimeout(() => {
        writeCmd('AT+PERIPHERAL');
      }, 500);
      setIsScanning(false);
      return;
    }

    writeCmd('AT+CENTRAL');
    setTimeout(() => {
      writeCmd('AT+GAPSCAN');
    }, 500);

    setIsScanning(true);
  };

  const readLoop = async (reader) => {
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (value) {
          const receivedData = new TextDecoder().decode(value);
          setLog((prevLog) => prevLog + receivedData);
        }
        if (done) {
          console.log('[readLoop] DONE', done);
          reader.releaseLock();
          break;
        }
      }
    } catch (error) {
      console.error('[readLoop] Error:', error);
    }
  };
  
  const writeCmd = (cmd) => {
    const writer = port.writable.getWriter();
    console.log('[SEND]', cmd);
    writer.write(cmd + '\r');
    writer.releaseLock();
  };

  return (
    <>
      <div className="container">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {/* Carousel Items */}
          {/* ... */}
        </div>
        {/* end carousel */}
      </div>
      {/* end container */}
      <div className="codesection">
        <div className="container">
          <h1>Web Bluetooth Example</h1>
          <main className="main">
            <div id="notSupported" className="hidden alert alert-danger">
              {/* ... */}
            </div>

            <br />
            <button
              id="butConnect"
              type="button"
              className="btn btn-success"
              onClick={clickConnect}
            >
              {connected ? 'Disconnect' : 'Connect'}
            </button>
            <br />
            <br />
            <button
              id="butIbeacon"
              type="button"
              disabled={!connected}
              className="btn btn-warning"
              onClick={clickIbeacon}
            >
              {isIbeaconAdv ? 'Stop Beacon' : 'Make iBeacon'}
            </button>
            <button
              id="butEddystone"
              type="button"
              disabled={!connected}
              className="btn btn-info"
              onClick={clickEddystone}
            >
              {isEddystonesAdv ? 'Stop Beacon' : 'Make Eddystone Beacon'}
            </button>
            <button
              id="butScan"
              type="button"
              disabled={!connected}
              className="btn btn-primary"
              onClick={clickScan}
            >
              {isScanning ? 'Stop Scanning...' : 'Scan BLE Devices'}
            </button>

            <pre id="log" className={`mt-5 ${log ? '' : 'd-none'}`}>
              {log}
            </pre>
          </main>
        </div>
      </div>
      <div className="footer text-center mt-3">
        {/* ... */}
      </div>
    </>
  );
};

export default BluetoothExample;
