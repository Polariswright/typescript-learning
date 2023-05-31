//para declarar algo como opcional, colocamos ? na frente

function proclaim(status?: string) {
    console.log(`I'm ${status || 'not ready...'}`);
  }
  
  proclaim();
  proclaim('ready?');
  proclaim('ready!');