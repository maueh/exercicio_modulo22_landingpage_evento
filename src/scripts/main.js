const dataDoEvento = new Date("Jun 1, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contador = setInterval(() => {
  const agora = new Date();
  const timeStampAtual = agora.getTime();
  const tempoMsAteOEvento = timeStampDoEvento - timeStampAtual;

  const segundosEmMs = 1000;
  const minutosEmMs = segundosEmMs * 60;
  const horasEmMs = minutosEmMs * 60;
  const diasEmMs = horasEmMs * 24;

  const diasAteOEvento = Math.floor(tempoMsAteOEvento / diasEmMs);

  const horasAteOEvento = Math.floor(
    (tempoMsAteOEvento % diasEmMs) / horasEmMs
  );

  const minutosAteOEvento = Math.floor(
    (tempoMsAteOEvento % horasEmMs) / minutosEmMs
  );

  const segundosAteOEvento = Math.floor(
    (tempoMsAteOEvento % minutosEmMs) / segundosEmMs
  );

  console.log(
    `${diasAteOEvento}dias ${horasAteOEvento}h ${minutosAteOEvento}min ${segundosAteOEvento}s`
  );
  document.getElementById(
    "contador"
  ).innerHTML = `Faltam ${diasAteOEvento} dias ${horasAteOEvento}h ${minutosAteOEvento}min ${segundosAteOEvento}s`;

  if (tempoMsAteOEvento < 0) {
    clearInterval(contador);
    document.getElementById(
      "contador"
    ).innerHTML = `A festa já ocorreu. <a class="button" href="#">Ver fotos</a>`;
    document.getElementById("card_detail").hidden = true;
  }
}, 1000);
