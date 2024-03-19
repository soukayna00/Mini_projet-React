
const INITIAL_STATE = {
    blocks: [
        {
            "block_id": "A",
            "block_name": "Block A",
            "total_seats": 1000,
            "available_seats": 700,
            "unavailable_seats": 300,
            "seats": [101, 102, 103],
            "prices": [150.00],
        },
        {
            "block_id": "B",
            "block_name": "Block B",
            "total_seats": 1500,
            "available_seats": 1200,
            "unavailable_seats": 300,
            "seats": [201, 202, 203],
            "prices": [175.00], 
        },
        {
            "block_id": "C",
            "block_name": "Block C",
            "block_price": 200.00,
            "total_seats": 800,
            "available_seats": 400,
            "unavailable_seats": 400,
            "seats": [301, 302, 303],
            "prices": [250.00], 
        },
        {
            "block_id": "D",
            "block_name": "Block D",
            "total_seats": 1200,
            "available_seats": 800,
            "unavailable_seats": 400,
            "seats": [401, 402, 403],
            "prices": [275.00], 
        },
          {
            "block_id": "E",
            "block_name": "Block E",
            "total_seats": 1200,
            "available_seats": 800,
            "unavailable_seats": 400,
            "seats": [401, 402, 403],
            "prices": [375.00],
        },
        {
            "block_id": "Champ walk",
            "block_name": "Block Champ walk",
            "total_seats": 1200,
            "available_seats": 800,
            "unavailable_seats": 400,
            "seats": [401, 402, 403],
            "prices": [475.00],
        }
    ],
    selectedBlock: null,
    numberOfSeats: 0,
};

function ReducerBillet(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'choose':
            const selectedBlockId = action.payload;
            const selectedBlock = state.blocks.find((block) => block.block_id === selectedBlockId);
            return {
                ...state,
                selectedBlock: selectedBlock,
                numberOfSeats: 0,
            };
        case 'incrementSeats':
            return {
                ...state,
                numberOfSeats: state.numberOfSeats + 1,
            };
        case 'decrementSeats':
            return {
                ...state,
                numberOfSeats: state.numberOfSeats - 1,
            };
        case 'paySeats':
            const { blockId, numberOfSeats } = action.payload;
            const updatedBlocks = state.blocks.map((block) =>
                block.block_id === blockId
                    ? {
                        ...block,
                        available_seats: block.available_seats - numberOfSeats,
                    }
                    : block
            );
            return {
                ...state,
                blocks: updatedBlocks,
            };
        default:
            return state;
    }
}

export default ReducerBillet;