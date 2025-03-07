export const pauseAudios = (...audios) => {
  audios.forEach((effect) => {
    effect.pause();
  });
};
