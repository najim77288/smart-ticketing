
let selectedSeats = [];
let availableSeats = 12;

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const seatPrice = 550;
    const totalSeats = selectedSeats.length;
    const total = totalSeats * seatPrice;
    totalPriceElement.textContent = `Total Price: ${total}`;
}

function updateAvailableSeats() {
    const availableSeatsElement = document.getElementById('availableSeats');
    availableSeatsElement.textContent = `Available Seats: ${availableSeats}`;
}

function updateSelectedSeatsPrices() {
    const selectedSeatsPricesElement = document.getElementById('selectedSeatsPrices');

    selectedSeatsPricesElement.innerHTML = '';

    
    selectedSeats.forEach(seatId => {
        const seat = document.getElementById(seatId);
        const seatPrice = 550; 
        const seatPriceElement = document.createElement('div');
        seatPriceElement.textContent = `Seat ${seatId}: ${seatPrice}`;
        selectedSeatsPricesElement.appendChild(seatPriceElement);
    });
}

function selectSeat(seatId) {
    const seat = document.getElementById(seatId);

    if (selectedSeats.length < 4 && !selectedSeats.includes(seatId) && availableSeats > 0) {
        selectedSeats.push(seatId);
        seat.classList.add('selected');
        availableSeats--;
    }

    if (selectedSeats.length === 4) {
        alert('You can select only 4 seats');
    }

    updateTotalPrice();
    updateAvailableSeats();
    updateSelectedSeatsPrices(); 
}



document.addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('seat')) {
        selectSeat(clickedElement.id);
    }
});
 updateAvailableSeats();






// >>>>>>>>>>>>>>>>>

function btnClick() {
    var footerElement = document.getElementById("footer")
    footerElement.scrollIntoView({behavior: "smooth"})
}