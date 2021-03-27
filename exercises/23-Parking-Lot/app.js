let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
];

function getParkingLotState(arr){
    let state = {
        totalSlots: 0,
        availableSlots: 0,
        occupiedSlots: 0
    };

    arr.forEach(row => {
        row.forEach(col => {
            
            if (col === 1) {
                state.occupiedSlots += 1;
                state.totalSlots += 1;
            }
            else if (col === 2) {
                state.availableSlots += 1;
                state.totalSlots += 1;
            }
            
            
        });
        
    });

    return state;
}
console.log(getParkingLotState(parking_state))