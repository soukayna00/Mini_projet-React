

export const incrementSeats = () => ({
    type: 'incrementSeats',
});

export const decrementSeats = () => ({
    type: 'decrementSeats',
});

export const chooseBlock = (blockId) => ({
  type: 'choose',
  payload: blockId,
});
export const paySeats = (blockId, numberOfSeats) => ({
    type: 'paySeats',
    payload: { blockId, numberOfSeats },
});
